import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function BackToTop() {
  const [visible, setVisible]   = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY    = window.scrollY
      const maxScroll  = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollY > 400)
      setProgress(maxScroll > 0 ? scrollY / maxScroll : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.6, y: 20  }}
          transition={{ duration: 0.35, ease: 'easeOut' as const }}
          whileHover={{ scale: 1.1 }}
          whileTap={{   scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 w-[52px] h-[52px] flex items-center justify-center focus:outline-none group"
          aria-label="Back to top"
        >
          {/* Scroll progress arc */}
          <svg
            className="absolute inset-0 -rotate-90 pointer-events-none"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            aria-hidden="true"
          >
            {/* Track ring */}
            <circle
              cx="26" cy="26" r={RADIUS}
              fill="none"
              stroke="rgba(166,124,82,0.18)"
              strokeWidth="1.5"
            />
            {/* Progress ring */}
            <circle
              cx="26" cy="26" r={RADIUS}
              fill="none"
              stroke="#A67C52"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={`${CIRCUMFERENCE}`}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 0.12s linear' }}
            />
          </svg>

          {/* Inner pill — cream base, tan on hover */}
          <div className="absolute inset-1.5 rounded-full bg-cream/95 backdrop-blur-sm group-hover:bg-tan transition-colors duration-250 shadow-[0_2px_18px_rgba(166,124,82,0.22)] group-hover:shadow-[0_4px_24px_rgba(166,124,82,0.40)]" />

          {/* Chevron — bobs upward gently, inverts on hover */}
          <motion.span
            className="relative z-10 flex text-tan group-hover:text-white transition-colors duration-250"
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const }}
          >
            <ChevronUp size={18} strokeWidth={2.5} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
