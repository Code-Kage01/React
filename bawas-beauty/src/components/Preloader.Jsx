import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 border-2 border-rose-gold rounded-full animate-pulse-glow" />
          <div className="absolute inset-2 border border-rose-gold/50 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-4 bg-rose-gold/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-light tracking-[0.3em] text-white mb-2"
        >
          BAWAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-rose-gold text-sm tracking-[0.5em]"
        >
          HOUSE OF BEAUTY
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;