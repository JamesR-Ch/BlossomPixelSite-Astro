import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore, language, toggleLanguage, initLanguage } from '@/stores/language'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#services',  labelKey: 'services'  as const },
  { href: '#reviews',   labelKey: 'reviews'   as const },
  { href: '#portfolio', labelKey: 'portfolio' as const },
  { href: '#process',   labelKey: 'process'   as const },
  { href: '#contact',   labelKey: 'contact'   as const },
]

export default function Navbar() {
  const t = useStore(tStore)
  const lang = useStore(language)
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('')

  useEffect(() => {
    initLanguage()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(166,124,82,0.12)] border-b border-tan/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Blossom Pixel Home"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <img
                  src="/images/logo/logo and favicon.png"
                  alt="Blossom Pixel"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-display text-lg md:text-xl font-semibold text-tan tracking-wider hidden sm:block">
                BLOSSOM PIXEL
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ href, labelKey }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full font-body',
                    active === href
                      ? 'text-tan'
                      : 'text-text-body hover:text-tan'
                  )}
                >
                  {t.nav[labelKey]}
                  {active === href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-tan rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right: lang toggle + CTA */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200',
                  'border-tan/40 text-tan hover:bg-tan/10 hover:border-tan',
                  'focus:outline-none focus:ring-2 focus:ring-tan/40'
                )}
              >
                <span className={cn('transition-opacity duration-200', lang === 'th' ? 'opacity-100 font-semibold' : 'opacity-50')}>TH</span>
                <span className="text-tan/40">|</span>
                <span className={cn('transition-opacity duration-200', lang === 'en' ? 'opacity-100 font-semibold' : 'opacity-50')}>EN</span>
              </button>

              {/* CTA Button (desktop) */}
              <button
                onClick={() => handleNav('#contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-tan text-white rounded-full text-sm font-medium
                           hover:bg-tan-dark transition-all duration-200 shadow-md hover:shadow-lg btn-shine
                           focus:outline-none focus:ring-2 focus:ring-tan/40"
              >
                {t.nav.bookNow}
              </button>

              {/* Hamburger (mobile) */}
              <button
                className="md:hidden p-2 rounded-full text-tan hover:bg-tan/10 transition-colors focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen
                    ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
                    : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 z-50 bg-cream shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-tan/10">
                <span className="font-display text-lg font-semibold text-tan">BLOSSOM PIXEL</span>
                <button onClick={() => setMenuOpen(false)} className="p-1 text-tan" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 p-5 flex-1">
                {NAV_LINKS.map(({ href, labelKey }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNav(href)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                      active === href
                        ? 'bg-tan/10 text-tan'
                        : 'text-text-body hover:bg-tan/5 hover:text-tan'
                    )}
                  >
                    {t.nav[labelKey]}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-tan/10 space-y-3">
                <button
                  onClick={() => { handleNav('#contact') }}
                  className="w-full py-3 bg-tan text-white rounded-full font-medium text-sm hover:bg-tan-dark transition-colors"
                >
                  {t.nav.bookNow}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
