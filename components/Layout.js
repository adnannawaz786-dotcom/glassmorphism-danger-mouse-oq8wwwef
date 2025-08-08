import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Glass morphism container */}
      <motion.div 
        className="relative z-10 min-h-screen backdrop-blur-sm bg-white/5 border border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.header 
          className="p-6 backdrop-blur-md bg-white/10 border-b border-white/20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="px-6 py-2 backdrop-blur-lg bg-white/20 rounded-full border border-white/30 shadow-lg">
                <h1 className="text-white/90 font-medium text-sm tracking-wide">
                  Glassmorphism Experience
                </h1>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto max-w-4xl">
            {children}
          </div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="p-6 backdrop-blur-md bg-white/10 border-t border-white/20 mt-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 backdrop-blur-lg bg-white/20 rounded-full border border-white/30 shadow-lg">
              <p className="text-white/70 text-xs">
                Powered by Next.js & Glassmorphism
              </p>
            </div>
          </div>
        </motion.footer>
      </motion.div>

      {/* Floating elements for extra visual interest */}
      <motion.div 
        className="absolute top-1/4 left-10 w-4 h-4 bg-white/30 rounded-full blur-sm"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-16 w-6 h-6 bg-purple-300/20 rounded-full blur-sm"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300/25 rounded-full blur-sm"
        animate={{ 
          x: [0, 10, 0],
          y: [0, -10, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default Layout;