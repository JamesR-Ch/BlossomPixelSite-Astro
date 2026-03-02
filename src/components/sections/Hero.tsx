import { useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

// Floating floral elements (SVG decorations)
const FloralDeco = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <circle cx="60" cy="60" r="10" fill="#C9A882" opacity="0.3"/>
    {[0,60,120,180,240,300].map((angle, i) => (
      <ellipse key={i}
        cx={60 + 28 * Math.cos((angle * Math.PI)/180)}
        cy={60 + 28 * Math.sin((angle * Math.PI)/180)}
        rx="12" ry="7"
        fill={i % 2 === 0 ? '#B8CCE0' : '#C9A882'}
        opacity="0.4"
        transform={`rotate(${angle}, ${60 + 28 * Math.cos((angle * Math.PI)/180)}, ${60 + 28 * Math.sin((angle * Math.PI)/180)})`}
      />
    ))}
  </svg>
)

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Hero() {
  const t = useStore(tStore)
  const parallaxRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2]">

      {/* Background collage grid */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        {/* Photo mosaic background */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-20 scale-110">
          {[
            '/images/photobooth/1.jpg',
            '/images/photobooth/3.jpg',
            '/images/onsite/1.jpg',
            '/images/photobooth/5.jpg',
            '/images/settings/Setting-1.jpg',
            '/images/photobooth/7.jpg',
            '/images/onsite/3.jpg',
            '/images/photobooth/9.jpg',
            '/images/onsite/2.jpg',
            '/images/photobooth/11.jpg',
            '/images/settings/Setting-3.jpg',
            '/images/photobooth/13.jpg',
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/85 via-[#FAF7F2]/70 to-[#FAF7F2]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/60 via-transparent to-[#FAF7F2]/60" />
      </div>

      {/* Decorative floral corners */}
      <img
        src="/images/logo/Branding and colors.jpg"
        alt=""
        width={256}
        height={144}
        className="absolute top-16 left-0 w-40 md:w-64 opacity-40 pointer-events-none select-none object-cover mix-blend-multiply"
        style={{
          maskImage: 'linear-gradient(to bottom right, black 20%, rgba(0,0,0,0.5) 55%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom right, black 20%, rgba(0,0,0,0.5) 55%, transparent 85%)',
        }}
      />

      {/* Floating petals */}
      <FloralDeco className="absolute top-24 right-8 w-16 md:w-24 animate-float opacity-50" />
      <FloralDeco className="absolute bottom-32 left-8 w-12 md:w-20 animate-float-delayed opacity-40" />
      <FloralDeco className="absolute top-1/2 right-4 w-10 md:w-16 animate-float-slow opacity-30" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <img
              src="/images/logo/logo and favicon.png"
              alt="Blossom Pixel Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A67C52]/30 bg-[#A67C52]/8 text-[#A67C52] text-xs md:text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
          >
            <span className="gradient-tan block">{t.hero.headline1}</span>
            <span className="text-[#2D1F14] block">{t.hero.headline2}</span>
            <span className="gradient-blue block italic">{t.hero.headline3}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-[#4A3728]/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shine group px-8 py-3.5 bg-[#A67C52] text-white rounded-full font-medium text-base
                         hover:bg-[#7D5E3A] transition-all duration-300 shadow-lg hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-[#A67C52]/50"
            >
              {t.hero.cta1}
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 border-2 border-[#A67C52] text-[#A67C52] rounded-full font-medium text-base
                         hover:bg-[#A67C52] hover:text-white transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-[#A67C52]/50"
            >
              {t.hero.cta2}
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll hint — pinned to section bottom, outside content div */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-tan/60 text-xs z-10"
      >
        <span className="font-body tracking-widest uppercase text-[10px]">{t.hero.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
