import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"></div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-12 md:p-16 lg:p-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center"
          >
            Hello{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent"
            >
              Danger Mouse
            </motion.span>
          </motion.h1>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
          </motion.div>
        </motion.div>
        
        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400/30 rounded-full blur-sm"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-400/30 rounded-full blur-sm"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [-5, 5, -5],
            y: [5, -5, 5]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
        ></motion.div>
      </div>
    </div>
  );
}