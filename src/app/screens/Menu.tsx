import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Search, ShoppingCart, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const products = {
    salads: [
      {
        id: "nudeln-salat",
        name: "Nudeln Salat",
        description: "Frische Pasta mit Gemüse",
        image: "https://images.unsplash.com/photo-1565976469640-8c764ce9721c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 8.50
      }
    ],
    sides: [
      {
        id: "pasta-1",
        name: "Pasta",
        description: "Italienische Pasta",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 6.00
      },
      {
        id: "pasta-2",
        name: "Pasta Spezial",
        description: "Mit Kräutern und Gewürzen",
        image: "https://images.unsplash.com/photo-1621427016981-25b2381f5538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 7.50
      }
    ]
  };

  const addToCart = (product: { id: string; name: string; price: number }) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Visual feedback
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 1000);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="size-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-5">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-5"
          >
            <Link
              to="/home"
              className="text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </Link>
            <h1 className="text-2xl">Menü</h1>
            <div className="w-10" />
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Suchen..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-100 border-none outline-none focus:bg-white focus:ring-2 focus:ring-lime-500 transition-all"
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6 pb-32">
        <div className="max-w-md mx-auto space-y-8">
          {/* Nudeln Salat Section */}
          <div>
            <h2 className="text-xl mb-4">Nudeln Salat</h2>
            <div className="space-y-3">
              {products.salads.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 p-3">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base mb-1 truncate">{product.name}</h3>
                      <p className="text-sm text-neutral-500 mb-2">{product.description}</p>
                      <p className="text-lg font-medium">€{product.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-lime-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-lime-600 active:scale-90 transition-all shadow-md"
                    >
                      <AnimatePresence mode="wait">
                        {addedItems.has(product.id) ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check size={22} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Plus size={22} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beilagen Section */}
          <div>
            <h2 className="text-xl mb-4">Beilagen</h2>
            <div className="space-y-3">
              {products.sides.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (products.salads.length + index) * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 p-3">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base mb-1 truncate">{product.name}</h3>
                      <p className="text-sm text-neutral-500 mb-2">{product.description}</p>
                      <p className="text-lg font-medium">€{product.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-lime-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-lime-600 active:scale-90 transition-all shadow-md"
                    >
                      <AnimatePresence mode="wait">
                        {addedItems.has(product.id) ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check size={22} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Plus size={22} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-50"
          >
            <div className="max-w-md mx-auto">
              <Link
                to="/order"
                state={{ cart }}
                className="bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-3xl px-6 py-5 flex items-center justify-between hover:from-lime-600 hover:to-lime-700 active:scale-[0.98] transition-all shadow-2xl shadow-lime-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <ShoppingCart size={22} />
                  </div>
                  <div>
                    <div className="text-sm opacity-90">{totalItems} {totalItems === 1 ? 'Artikel' : 'Artikel'}</div>
                    <div className="text-lg font-medium">€{totalPrice.toFixed(2)}</div>
                  </div>
                </div>
                <div className="font-medium">Zur Kasse →</div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
