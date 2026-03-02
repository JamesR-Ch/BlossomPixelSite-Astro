import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion'
import { Camera, Video, Heart, Sticker, PenLine, Check } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'
import { cn } from '@/lib/utils'

type ServiceKey = 'photobooth' | 'video360' | 'blessing' | 'sticker' | 'signme'

const SERVICE_CONFIG: {
  key: ServiceKey
  icon: React.ElementType
  color: string
  bg: string
  images: string[]
  comingSoon?: boolean
}[] = [
  {
    key: 'photobooth',
    icon: Camera,
    color: '#A67C52',
    bg: '#FFF8F2',
    images: [
      '/images/photobooth/2.jpg',
      '/images/photobooth/4.jpg',
      '/images/photobooth/6.jpg',
    ],
  },
  {
    key: 'video360',
    icon: Video,
    color: '#5B7FA6',
    bg: '#F2F7FF',
    images: [
      '/images/360video/360-Video.jpg',
    ],
  },
  {
    key: 'blessing',
    icon: Heart,
    color: '#C47B8A',
    bg: '#FFF5F7',
    images: [
      '/images/blessing/1.jpg',
      '/images/blessing/2.jpg',
    ],
  },
  {
    key: 'sticker',
    icon: Sticker,
    color: '#7A9E7E',
    bg: '#F2FFF5',
    images: [
      '/images/sticker/Sticker Line.jpg',
    ],
  },
  {
    key: 'signme',
    icon: PenLine,
    color: '#8B6BB1',
    bg: '#F8F2FF',
    images: [
      '/images/signme/NewUpcomingSignMe.jpg',
    ],
    comingSoon: true,
  },
]

const fadeUp = (delay = 0): Variants => ({
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } },
})

function ServiceCard({
  cfg,
  svc,
  idx,
  inView,
  comingSoonLabel,
}: {
  cfg: typeof SERVICE_CONFIG[0]
  svc: { name: string; short: string; desc: string; features: string[] }
  idx: number
  inView: boolean
  comingSoonLabel: string
}) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const Icon = cfg.icon

  useEffect(() => {
    if (!hovered || cfg.images.length <= 1) return
    const id = setInterval(() => setImgIdx(i => (i + 1) % cfg.images.length), 1500)
    return () => clearInterval(id)
  }, [hovered, cfg.images.length])

  return (
    <motion.div
      variants={fadeUp(idx * 0.1)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => { setHovered(false); setImgIdx(0) }}
      className={cn(
        'group relative rounded-3xl overflow-hidden cursor-default transition-all duration-500',
        'border border-transparent hover:border-[rgba(166,124,82,0.2)]',
        hovered ? 'shadow-2xl -translate-y-2' : 'shadow-md',
        cfg.comingSoon && 'opacity-90'
      )}
      style={{ background: cfg.bg }}
    >
      {/* Top image strip */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <AnimatePresence initial={false}>
          {cfg.images.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered && cfg.images.length > 1 ? (i === imgIdx ? 1 : 0) : i === 0 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={src} alt={svc.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Coming soon overlay */}
        {cfg.comingSoon && (
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex items-center justify-center z-10">
            <div
              className="px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase text-white shadow-lg"
              style={{ background: cfg.color }}
            >
              {comingSoonLabel}
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"
          style={{ background: `linear-gradient(to top, ${cfg.color}30, transparent)` }}
        />
        {/* Icon badge */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg z-20"
          style={{ background: cfg.color }}
        >
          <Icon size={18} className="text-white" />
        </div>
        {/* Tag */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium z-20" style={{ color: cfg.color }}>
          {svc.short}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-text-dark mb-2">{svc.name}</h3>
        <p className="text-text-body/75 text-sm leading-relaxed mb-4 font-body">{svc.desc}</p>

        {/* Features */}
        <ul className="space-y-2">
          {svc.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-text-body/80 font-body">
              <Check size={14} style={{ color: cfg.color }} className="shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <div
          className="mt-5 h-0.5 rounded-full opacity-30 transition-all duration-500 group-hover:opacity-80"
          style={{ background: `linear-gradient(90deg, ${cfg.color}, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-muted/15 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-tan/8 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tan/10 text-tan text-sm font-medium mb-4">
            ✦ {t.services.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-dark leading-tight">
            {t.services.title}
            <span className="block gradient-blue italic">{t.services.subtitle}</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_CONFIG.map((cfg, idx) => {
            const svc = t.services[cfg.key]
            return (
              <ServiceCard
                key={cfg.key}
                cfg={cfg}
                svc={svc}
                idx={idx}
                inView={inView}
                comingSoonLabel={t.services.comingSoon}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
