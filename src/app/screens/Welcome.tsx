import { Link } from "react-router";
import { motion } from "motion/react";

export default function Welcome() {
  return (
    <div className="size-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background salad image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616005944283-486e2bc22990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')"
        }}
      />

      {/* Enhanced overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-8 text-center max-w-md w-full"
      >
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-7xl sm:text-8xl mb-4 tracking-wide drop-shadow-2xl"
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "white"
          }}
        >
          Saladino
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/90 text-lg leading-relaxed">
            frische Salate für Ihren<br />Co-Working Space
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <Link
            to="/categories"
            className="bg-white text-neutral-900 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Los geht's
          </Link>

          <Link
            to="/categories"
            className="text-white/90 font-medium px-8 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
          >
            Sign Up
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}