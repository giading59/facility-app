import { Link } from "react-router";
import { User, Receipt, Settings, Home as HomeIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const categories = [
    {
      title: "Gemüse + Proteine",
      image: "https://images.unsplash.com/photo-1605034298551-baacf17591d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      link: "/menu"
    },
    {
      title: "Salate & Saucen",
      image: "https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      link: "/menu"
    }
  ];

  return (
    <div className="size-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl mb-2">Entdecken</h1>
            <p className="text-neutral-500">Frische Salate und mehr</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 pt-6 pb-24">
        <div className="max-w-md mx-auto space-y-5">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={category.link} className="block">
                <div className="relative rounded-3xl overflow-hidden h-64 shadow-lg group">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-6 right-6">
                    <h2 className="text-white text-3xl drop-shadow-lg">{category.title}</h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-neutral-200 px-8 py-4 safe-area-inset-bottom">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <Link to="/home" className="flex flex-col items-center gap-1.5">
            <div className="bg-lime-100 rounded-2xl p-3">
              <HomeIcon size={22} className="text-lime-600" />
            </div>
            <span className="text-xs text-lime-600 font-medium">Home</span>
          </Link>
          <Link to="/order" className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-900 transition-colors active:scale-95">
            <div className="p-3">
              <Receipt size={24} />
            </div>
          </Link>
          <Link to="/categories" className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-900 transition-colors active:scale-95">
            <div className="p-3">
              <User size={24} />
            </div>
          </Link>
          <button className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-900 transition-colors active:scale-95">
            <div className="p-3">
              <Settings size={24} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
