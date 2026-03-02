import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

export default function Reviews() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const items = t.reviews.items

  const prev = () => setCurrent(i => (i - 1 + items.length) % items.length)
  const next = () => setCurrent(i => (i + 1) % items.length)

  return (
    <section id="reviews" ref={ref} className="py-20 md:py-28 bg-[#FEFCF9] relative overflow-hidden">
      {/* BG circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-tan/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#B8CCE0]/15 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C47B8A]/10 text-[#C47B8A] text-sm font-medium mb-4">
            ✦ {t.reviews.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#2D1F14] mb-3">
            {t.reviews.title}
          </h2>
          <p className="text-text-body/70 font-body">{t.reviews.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-tan/8"
              >
                <Quote size={40} className="text-tan/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#A67C52" className="text-tan" />
                  ))}
                </div>

                <blockquote className="font-body text-lg md:text-xl text-[#2D1F14]/85 leading-relaxed mb-8 italic">
                  &ldquo;{items[current].text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tan/15 flex items-center justify-center font-display text-lg font-semibold text-tan">
                    {items[current].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D1F14] font-body">{items[current].name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm text-text-body/60 font-body">{items[current].platform}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-tan/20 text-tan hover:bg-tan/10 transition-colors focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    i === current ? 'w-6 bg-tan' : 'bg-tan/25'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-tan/20 text-tan hover:bg-tan/10 transition-colors focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.facebook.com/bblossompixel/reviews/?id=100066675607800&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-tan text-tan rounded-full font-medium text-sm
                       hover:bg-tan hover:text-white transition-all duration-300 focus:outline-none"
          >
            {t.reviews.cta}
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
