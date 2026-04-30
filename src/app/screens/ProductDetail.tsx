import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import veggieBoxImage from "figma:asset/c50eda5be1775fb3437bb9a18e93e2a9f7fb3b89.png";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "GEMÜSE-BOX CLASSIC",
    rating: 4,
    reviews: "4 von Ratings",
    price: 22.99,
    priceNote: "/ fein Bio-Station",
    description: "In der Gemüse-Box Classic findest du eine bunte Mischung frisch geernteter Bio-Gemüsesorten für ein zwei Personen.",
    image: veggieBoxImage,
    ingredients: [
      {
        id: 1,
        name: "Kartoffel Purple Rain",
        subtitle: "Farbe: lilila, Festkochend II Deutschland",
        image: "https://images.unsplash.com/photo-1581599967258-50c1f48bd36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBwb3RhdG98ZW58MXx8fHwxNzc1ODc0MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 2,
        name: "Kartoffel Nicola",
        subtitle: "Festkochend II Demeter Deutschland",
        image: "https://images.unsplash.com/photo-1691442152523-f31ea73d5181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBwb3RhdG98ZW58MXx8fHwxNzc1ODc0MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 3,
        name: "Karotte Farbe: Orange",
        subtitle: "II Demeter",
        image: "https://images.unsplash.com/photo-1611048660183-dc688cc049f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXJyb3RzfGVufDF8fHx8MTc3NTc3NjM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
  };

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="size-full bg-neutral-50 flex flex-col">
      {/* Header with Image */}
      <div className="relative h-96 bg-gradient-to-br from-lime-200 via-lime-100 to-lime-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-12 left-6 z-20"
        >
          <Link
            to="/categories"
            className="bg-white/90 backdrop-blur-sm text-neutral-900 p-2.5 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-12 right-6 z-20"
        >
          <Link
            to="/order"
            className="bg-white/90 backdrop-blur-sm text-neutral-900 p-2.5 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all"
          >
            <ShoppingCart size={22} />
          </Link>
        </motion.div>

        {/* Product Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-12"
          />
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="flex-1 bg-white rounded-t-[2rem] -mt-8 relative z-10 overflow-auto shadow-2xl">
        <div className="px-6 pt-8 pb-32">
          <div className="max-w-md mx-auto">
            {/* Title and Rating */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-3xl mb-3 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < product.rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-500">({product.reviews})</span>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 bg-lime-50 rounded-2xl p-4 border border-lime-100"
            >
              <div className="text-4xl mb-1">{product.price.toFixed(2)} €</div>
              <div className="text-sm text-neutral-600">{product.priceNote}</div>
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-xl mb-3">Beschreibung</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Ingredients List */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl mb-4">Inhalt</h2>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors"
                  >
                    <div className="size-14 rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0">
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm mb-1">{ingredient.name}</h3>
                      <p className="text-xs text-neutral-500">{ingredient.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-neutral-200 px-6 py-5 shadow-2xl"
      >
        <div className="max-w-md mx-auto flex items-center gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-4 bg-neutral-100 rounded-2xl px-5 py-3.5">
            <button
              onClick={handleDecrease}
              className="text-neutral-600 hover:text-neutral-900 active:scale-90 transition-all"
            >
              <Minus size={20} />
            </button>
            <span className="text-xl font-medium min-w-[2.5rem] text-center">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="text-neutral-600 hover:text-neutral-900 active:scale-90 transition-all"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <Link
            to="/order"
            className="flex-1 bg-lime-500 text-white font-medium rounded-2xl px-6 py-4 text-center hover:bg-lime-600 active:scale-[0.98] transition-all shadow-lg shadow-lime-500/30"
          >
            In den Warenkorb
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
