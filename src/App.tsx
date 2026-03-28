import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MapPin, Calendar, Clock } from 'lucide-react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      setShowDetails(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfbf7] relative font-sans">
      <AnimatePresence>
        {!showDetails && (
          <motion.div
            className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/3] cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={handleOpen}
            animate={{ y: isOpened ? 100 : 0 }}
            transition={{ duration: 1, delay: isOpened ? 0.6 : 0, ease: "easeInOut" }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8 } }}
          >
            {/* Envelope Back (Inside of the envelope) */}
            <div className="absolute inset-0 bg-[#cbb8a5] rounded-sm shadow-xl z-0" />
            
            {/* Card inside envelope */}
            <motion.div
              className="absolute inset-x-4 top-4 bottom-4 bg-white rounded-sm shadow-md flex flex-col items-center justify-center p-6 text-center z-20 border border-[#e8d8c8]"
              initial={{ y: 0 }}
              animate={{ y: isOpened ? -200 : 0 }}
              transition={{ duration: 1, delay: isOpened ? 0.6 : 0, ease: "easeInOut" }}
            >
              <div className="absolute inset-2 border border-[#dccab8] opacity-50" />
              <div className="font-serif text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-2">You are invited</div>
              <div className="font-cursive text-3xl sm:text-4xl text-[#8b7355]">Alex & Taylor</div>
            </motion.div>

            {/* Front Flaps (z-30) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {/* Left Flap */}
              <div className="absolute inset-0 bg-[#e8d8c8]" style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }} />
              {/* Right Flap */}
              <div className="absolute inset-0 bg-[#e8d8c8]" style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }} />
              {/* Bottom Flap Wrapper for shadow */}
              <div className="absolute inset-0" style={{ filter: "drop-shadow(0 -4px 4px rgba(0,0,0,0.05))" }}>
                <div className="absolute inset-0 bg-[#dfcebc]" style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }} />
              </div>
            </div>

            {/* Top Flap (Opens) (z-40 -> z-10) */}
            <motion.div
              className="absolute inset-0 origin-top"
              initial={{ rotateX: 0, zIndex: 40 }}
              animate={{ rotateX: isOpened ? 180 : 0, zIndex: isOpened ? 10 : 40 }}
              transition={{ duration: 0.8, ease: "easeInOut", zIndex: { delay: 0.4 } }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Flap Front Container */}
              <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                {/* Flap Front Wrapper for shadow */}
                <div className="absolute inset-0" style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.05))" }}>
                  <div 
                    className="absolute inset-0 bg-[#f0e3d3]"
                    style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0)" }}
                  />
                </div>
                {/* Wax Seal */}
                <motion.div 
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-[#9b2c2c] rounded-full shadow-lg flex items-center justify-center"
                  animate={{ opacity: isOpened ? 0 : 1, scale: isOpened ? 1.5 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Heart className="text-white/80 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </motion.div>
              </div>

              {/* Flap Back (Inside) */}
              <div 
                className="absolute inset-0 bg-[#dccab8]"
                style={{ 
                  clipPath: "polygon(0 0, 50% 50%, 100% 0)",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              />
            </motion.div>

            {/* Tap to open hint */}
            {!isOpened && (
              <motion.div
                className="absolute -bottom-16 left-0 right-0 text-center text-[#8b7355] font-serif italic text-sm sm:text-base"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                Tap to open
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 overflow-y-auto z-50 bg-[#fdfbf7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-white w-full max-w-2xl min-h-[80vh] rounded-xl shadow-2xl p-8 sm:p-12 flex flex-col items-center text-center relative overflow-hidden my-auto"
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {/* Decorative corners */}
              <div className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[#dccab8] opacity-50" />
              <div className="absolute top-6 right-6 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 border-[#dccab8] opacity-50" />
              <div className="absolute bottom-6 left-6 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 border-[#dccab8] opacity-50" />
              <div className="absolute bottom-6 right-6 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[#dccab8] opacity-50" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col items-center w-full my-auto"
              >
                <p className="font-serif text-[#8b7355] tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 sm:mb-8">
                  You are invited to the wedding of
                </p>

                <h1 className="font-cursive text-5xl sm:text-7xl md:text-8xl text-[#2c3e50] mb-4 sm:mb-6 leading-tight">
                  Alex & Taylor
                </h1>

                <p className="font-serif text-gray-600 italic mb-8 sm:mb-12 text-base sm:text-lg">
                  "Two souls, one heart."
                </p>

                <div className="w-full max-w-md space-y-6 sm:space-y-8 mb-10 sm:mb-12">
                  <div className="flex flex-col items-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#dccab8] mb-2 sm:mb-3" />
                    <h3 className="font-serif text-lg sm:text-xl text-gray-800 mb-1">Saturday, September 26th, 2026</h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#dccab8] mb-2 sm:mb-3" />
                    <h3 className="font-serif text-lg sm:text-xl text-gray-800 mb-1">4:00 PM in the Afternoon</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Reception to follow</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#dccab8] mb-2 sm:mb-3" />
                    <h3 className="font-serif text-lg sm:text-xl text-gray-800 mb-1">The Botanical Gardens</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">123 Nature Path, Springville, CA</p>
                  </div>
                </div>

                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_PLACEHOLDER/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#8b7355] text-white font-serif tracking-widest uppercase text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7a6548] transition-colors shadow-lg"
                >
                  RSVP Now
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
