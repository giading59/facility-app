import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function OrderSummary() {
  const location = useLocation();
  const initialCart = location.state?.cart || [];
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="size-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-5">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <Link
              to="/menu"
              className="text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </Link>
            <div className="text-center">
              <h1 className="text-2xl">Warenkorb</h1>
              <p className="text-sm text-neutral-500">{cart.length} {cart.length === 1 ? 'Artikel' : 'Artikel'}</p>
            </div>
            <div className="w-10" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6 pb-32">
        <div className="max-w-md mx-auto">
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="bg-neutral-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={40} className="text-neutral-400" />
              </div>
              <h2 className="text-2xl mb-3">Ihr Warenkorb ist leer</h2>
              <p className="text-neutral-500 mb-8">Fügen Sie Artikel aus dem Menü hinzu</p>
              <Link
                to="/menu"
                className="inline-block bg-lime-500 text-white px-8 py-4 rounded-full hover:bg-lime-600 active:scale-95 transition-all shadow-lg"
              >
                Zum Menü
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {/* Order Items */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h2 className="text-xl mb-5">Ihre Artikel</h2>
                <AnimatePresence mode="popLayout">
                  {cart.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="py-4 border-b border-neutral-100 last:border-0"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-base mb-2">{item.name}</h3>
                          <p className="text-sm text-neutral-500 mb-3">
                            €{item.price.toFixed(2)} / Stück
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 active:scale-90 transition-all"
                            >
                              <Minus size={18} />
                            </button>
                            <span className="text-lg font-medium min-w-[2rem] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center hover:bg-lime-600 active:scale-90 transition-all"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-medium mb-3">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <h2 className="text-xl mb-5">Zusammenfassung</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-neutral-600">Zwischensumme</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-neutral-600">Liefergebühr</span>
                    <span className="text-lime-600 font-medium">Kostenlos</span>
                  </div>
                  <div className="border-t-2 border-neutral-100 pt-4 flex justify-between items-center">
                    <span className="text-xl">Gesamt</span>
                    <span className="text-2xl font-medium">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Button */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-50"
          >
            <div className="max-w-md mx-auto">
              <button className="w-full bg-gradient-to-r from-lime-500 to-lime-600 text-white font-medium rounded-3xl px-6 py-5 hover:from-lime-600 hover:to-lime-700 active:scale-[0.98] transition-all shadow-2xl shadow-lime-500/40">
                <div className="flex items-center justify-between">
                  <span className="text-lg">Bestellung aufgeben</span>
                  <span className="text-lg">€{total.toFixed(2)}</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
