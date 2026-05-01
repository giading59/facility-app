import { Link } from "react-router";
import { ShoppingBag, Grid3x3, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Categories() {
  const categories = [
    {
      id: "grummes-gemuse",
      name: "Grummes Gemüse",
      items: "15 Items",
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHZlZ2V0YWJsZXMlMjBhc3NvcnRtZW50fGVufDF8fHx8MTc3NTg3NDExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#84cc16",
      link: "/product-detail"
    },
    {
      id: "hauptspeise",
      name: "Hauptspeise",
      items: "28 Items",
      image: "https://images.unsplash.com/photo-1624340209404-4f479dd59708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc3NTgwMjM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#a3e635",
      link: "/product-detail"
    },
    {
      id: "beilagen",
      name: "Beilagen",
      items: "183 Items",
      image: "https://images.unsplash.com/photo-1664992956749-8b96721304e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWRlJTIwZGlzaCUyMGZvb2R8ZW58MXx8fHwxNzc1ODc0MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#bef264",
      link: "/menu"
    }
  ];

  return (
    <div className="size-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-white">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl mb-1">Welcome Back!</h1>
              <p className="text-neutral-500 text-sm">What are you craving today?</p>
            </div>
            <Link
              to="/order"
              className="text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 p-3 rounded-full transition-colors"
            >
              <ShoppingBag size={24} />
            </Link>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Search food..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-neutral-100 border-none outline-none focus:bg-white focus:ring-2 focus:ring-lime-500 transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
              <path d="M13 13L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 pt-6">
        <div className="max-w-md mx-auto space-y-4 pb-28">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={category.link} className="block">
                <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  {/* Enhanced background decoration */}
                  <div
                    className="absolute -right-12 -top-8 w-40 h-40 rounded-full opacity-[0.07]"
                    style={{ background: category.color }}
                  />

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Image with enhanced styling */}
                    <div
                      className="size-24 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-white shadow-md"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h2 className="text-xl mb-1">{category.name}</h2>
                      <p className="text-sm text-neutral-500">{category.items}</p>
                    </div>

                    {/* Arrow indicator */}
                    <ChevronRight size={24} className="text-neutral-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-neutral-200 px-8 py-4 safe-area-inset-bottom">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <Link to="/categories" className="flex flex-col items-center gap-1.5">
            <div className="bg-lime-100 rounded-2xl p-3">
              <Grid3x3 size={22} className="text-lime-600" />
            </div>
            <span className="text-xs text-lime-600 font-medium">MENÜ</span>
          </Link>
          <Link to="/order" className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-neutral-900 transition-colors active:scale-95">
            <div className="p-3">
              <ShoppingBag size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
