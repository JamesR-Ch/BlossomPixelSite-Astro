import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PETAL_COUNT = 8

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF7F2]"
        >
          {/* Spinning petal ring */}
          <div className="relative w-24 h-24 mb-6">
            {Array.from({ length: PETAL_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-6 rounded-full origin-bottom"
                style={{
                  background: i % 2 === 0 ? '#A67C52' : '#B8CCE0',
                  opacity: 0.7,
                  rotate: `${(360 / PETAL_COUNT) * i}deg`,
                  translateX: '-50%',
                  translateY: '-100%',
                }}
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * (1.2 / PETAL_COUNT),
                  ease: 'easeInOut',
                }}
              />
            ))}
            {/* Center logo */}
            <div className="absolute inset-3 rounded-full bg-[#FAF7F2] flex items-center justify-center">
              <img src="/images/logo/logo and favicon.png" alt="Loading..." width={40} height={40} className="object-contain" />
            </div>
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-lg font-semibold text-[#A67C52] tracking-widest"
          >
            BLOSSOM PIXEL
          </motion.div>

          {/* Loading dots */}
          <div className="flex gap-1.5 mt-4">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#A67C52]/40"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
