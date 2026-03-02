import { useRef, useState, useCallback } from 'react'
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Facebook, Instagram } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'
import { cn } from '@/lib/utils'

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.08a8.14 8.14 0 004.78 1.52V7.17a4.85 4.85 0 01-1.01-.48z"/>
    </svg>
  )
}

type TabKey = 'vibe' | 'photobooth' | 'video360' | 'blessing' | 'frames'

interface GalleryItem {
  src: string
  alt: string
  tab: TabKey
  rotate?: number
}

const GALLERY: GalleryItem[] = [
  // Vibe / Atmosphere
  { src: '/images/onsite/1.jpg',              alt: 'Event atmosphere',    tab: 'vibe',       rotate:  0.5 },
  { src: '/images/onsite/2.jpg',              alt: 'Onsite vibe',         tab: 'vibe',       rotate: -1   },
  { src: '/images/onsite/3.jpg',              alt: 'Event onsite',        tab: 'vibe',       rotate:  1.5 },
  { src: '/images/onsite/4.jpg',              alt: 'Event setup',         tab: 'vibe',       rotate: -0.5 },
  { src: '/images/onsite/5.jpg',              alt: 'Event atmosphere',    tab: 'vibe',       rotate:  1   },
  { src: '/images/settings/Setting-1.jpg',    alt: 'Studio setting',      tab: 'vibe',       rotate: -1   },
  { src: '/images/settings/Setting-2.jpg',    alt: 'Event setting',       tab: 'vibe',       rotate:  0.5 },
  { src: '/images/settings/Setting-3.jpg',    alt: 'Setting design',      tab: 'vibe',       rotate: -1.5 },
  { src: '/images/settings/Setting-4.jpg',    alt: 'Studio atmosphere',   tab: 'vibe',       rotate:  1   },
  { src: '/images/settings/Setting-5.jpg',    alt: 'Event decor',         tab: 'vibe',       rotate: -0.5 },
  { src: '/images/settings/Setting-6.jpg',    alt: 'Event vibes',         tab: 'vibe',       rotate:  2   },
  // Photobooth — all 15
  { src: '/images/photobooth/1.jpg',          alt: 'Photobooth design',   tab: 'photobooth', rotate: -1   },
  { src: '/images/photobooth/2.jpg',          alt: 'Photobooth session',  tab: 'photobooth', rotate:  1   },
  { src: '/images/photobooth/3.jpg',          alt: 'Photo frame',         tab: 'photobooth', rotate: -2   },
  { src: '/images/photobooth/4.jpg',          alt: 'Photo strip',         tab: 'photobooth', rotate:  0.5 },
  { src: '/images/photobooth/5.jpg',          alt: 'Event photobooth',    tab: 'photobooth', rotate:  2   },
  { src: '/images/photobooth/6.jpg',          alt: 'Custom design',       tab: 'photobooth', rotate: -1.5 },
  { src: '/images/photobooth/7.jpg',          alt: 'Wedding photobooth',  tab: 'photobooth', rotate:  1   },
  { src: '/images/photobooth/8.jpg',          alt: 'Fun photobooth',      tab: 'photobooth', rotate: -0.5 },
  { src: '/images/photobooth/9.jpg',          alt: 'Photobooth moments',  tab: 'photobooth', rotate:  1.5 },
  { src: '/images/photobooth/10.jpg',         alt: 'Photo memories',      tab: 'photobooth', rotate: -1   },
  { src: '/images/photobooth/11.jpg',         alt: 'Photobooth fun',      tab: 'photobooth', rotate:  0.5 },
  { src: '/images/photobooth/12.jpg',         alt: 'Special moments',     tab: 'photobooth', rotate: -2   },
  { src: '/images/photobooth/13.jpg',         alt: 'Photo booth shots',   tab: 'photobooth', rotate:  1   },
  { src: '/images/photobooth/14.jpg',         alt: 'Captured memories',   tab: 'photobooth', rotate: -1.5 },
  { src: '/images/photobooth/15.jpg',         alt: 'Photobooth magic',    tab: 'photobooth', rotate:  0   },
  // 360° Video
  { src: '/images/360video/360-Video.jpg',    alt: '360 video booth',     tab: 'video360',   rotate:  0   },
  // Blessing — all 4
  { src: '/images/blessing/1.jpg',            alt: 'Video blessing setup',tab: 'blessing',   rotate:  1   },
  { src: '/images/blessing/2.jpg',            alt: 'Blessing video',      tab: 'blessing',   rotate: -1   },
  { src: '/images/blessing/3.jpg',            alt: 'Guest blessing',      tab: 'blessing',   rotate:  0.5 },
  { src: '/images/blessing/4.jpg',            alt: 'Blessing moments',    tab: 'blessing',   rotate: -1.5 },
  // Frames — all 10
  { src: '/images/frames/FrameDesign-1.jpg',  alt: 'Frame design 1',      tab: 'frames',     rotate: -1   },
  { src: '/images/frames/FrameDesign-2.jpg',  alt: 'Frame design 2',      tab: 'frames',     rotate:  1.5 },
  { src: '/images/frames/FrameDesign-3.jpg',  alt: 'Frame design 3',      tab: 'frames',     rotate: -0.5 },
  { src: '/images/frames/FrameDesign-4.jpg',  alt: 'Frame design 4',      tab: 'frames',     rotate:  0   },
  { src: '/images/frames/FrameDesign-5.jpg',  alt: 'Frame design 5',      tab: 'frames',     rotate:  1   },
  { src: '/images/frames/FrameDesign-6.jpg',  alt: 'Frame design 6',      tab: 'frames',     rotate: -2   },
  { src: '/images/frames/FrameDesign-7.jpg',  alt: 'Frame design 7',      tab: 'frames',     rotate:  0.5 },
  { src: '/images/frames/FrameDesign-8.jpg',  alt: 'Frame design 8',      tab: 'frames',     rotate: -1.5 },
  { src: '/images/frames/FrameDesign-9.jpg',  alt: 'Frame design 9',      tab: 'frames',     rotate:  1   },
  { src: '/images/frames/FrameDesign-10.jpg', alt: 'Frame design 10',     tab: 'frames',     rotate: -0.5 },
]

const TABS: TabKey[] = ['photobooth', 'vibe', 'frames', 'blessing', 'video360']

const fadeUp = (delay = 0): Variants => ({
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } },
})

export default function Portfolio() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState<TabKey>('photobooth')
  const [lightbox, setLightbox] = useState<{ idx: number; items: GalleryItem[] } | null>(null)

  const filtered = GALLERY.filter(g => g.tab === activeTab)

  const openLightbox = useCallback((idx: number, items: GalleryItem[]) => {
    setLightbox({ idx, items })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const prevItem = useCallback(() => {
    setLightbox(prev => prev
      ? { ...prev, idx: (prev.idx - 1 + prev.items.length) % prev.items.length }
      : null
    )
  }, [])

  const nextItem = useCallback(() => {
    setLightbox(prev => prev
      ? { ...prev, idx: (prev.idx + 1) % prev.items.length }
      : null
    )
  }, [])

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-28 bg-cream relative overflow-hidden">

      {/* Decorative flower elements */}
      <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none select-none opacity-[0.12] translate-x-16 -translate-y-8">
        <img src="/images/elements/Flower-1.jpg" alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none select-none opacity-[0.10] -translate-x-12 translate-y-8 rotate-180">
        <img src="/images/elements/Flower-2.jpg" alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-muted/10 text-blue-muted text-sm font-medium mb-4">
            ✦ {t.portfolio.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-dark mb-3">
            {t.portfolio.title}
          </h2>
          <p className="text-text-body/70 font-body">{t.portfolio.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none',
                activeTab === tab
                  ? 'bg-tan text-white shadow-md'
                  : 'bg-cream text-text-body hover:bg-tan/10 hover:text-tan border border-tan/20'
              )}
            >
              {t.portfolio.tabs[tab]}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => openLightbox(idx, filtered)}
                className="group cursor-pointer"
                style={{ '--rotate': `${item.rotate ?? 0}deg` } as React.CSSProperties}
              >
                <div className="polaroid">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F0EBE1]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-tan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white drop-shadow-lg" size={28} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More CTA */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 flex flex-col items-center gap-7"
        >
          {/* Animated drip dots */}
          <div className="flex flex-col items-center gap-1.5">
            {([0, 0.2, 0.4] as number[]).map((delay, i) => (
              <motion.span
                key={i}
                className="block w-1 h-1 rounded-full bg-tan/50"
                animate={{ opacity: [0.2, 0.9, 0.2], y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeInOut' as const }}
              />
            ))}
          </div>

          {/* Card */}
          <div className="w-full max-w-md bg-white/60 backdrop-blur-sm rounded-3xl border border-tan/15 px-8 py-8 text-center shadow-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tan/8 text-tan text-xs font-medium tracking-wider uppercase mb-4">
              ✦ {t.portfolio.viewMore}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-text-dark mb-2">
              {t.portfolio.seeMoreTitle}
            </h3>
            <p className="text-text-body/60 text-sm font-body mb-7 leading-relaxed">
              {t.portfolio.seeMoreSub}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/bblossompixel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:opacity-90 focus:outline-none"
                style={{ background: '#1877F2' }}
              >
                <Facebook size={15} />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/blossom.pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:opacity-90 focus:outline-none"
                style={{ background: '#E4405F' }}
              >
                <Instagram size={15} />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@blossom.pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:opacity-90 focus:outline-none"
                style={{ background: '#010101' }}
              >
                <TikTokIcon size={15} />
                TikTok
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 focus:outline-none"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prevItem() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 focus:outline-none"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full max-h-[85vh]"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[3/4] max-h-[85vh]">
                <img
                  src={lightbox.items[lightbox.idx].src}
                  alt={lightbox.items[lightbox.idx].alt}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              {/* Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightbox.idx + 1} / {lightbox.items.length}
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); nextItem() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 focus:outline-none"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
