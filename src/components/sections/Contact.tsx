import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Facebook, Instagram, Mail, MessageCircle, ExternalLink, Copy, Check } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.08a8.14 8.14 0 004.78 1.52V7.17a4.85 4.85 0 01-1.01-.48z"/>
    </svg>
  )
}

const CONTACT_CHANNELS = [
  {
    key: 'facebook' as const,
    icon: Facebook,
    color: '#1877F2',
    bg: '#EBF3FF',
    href: 'https://www.facebook.com/bblossompixel',
    label: 'Blossom Pixel',
  },
  {
    key: 'instagram' as const,
    icon: Instagram,
    color: '#E4405F',
    bg: '#FFF0F3',
    href: 'https://www.instagram.com/blossom.pixel',
    label: 'blossom.pixel',
  },
  {
    key: 'tiktok' as const,
    icon: TikTokIcon,
    color: '#010101',
    bg: '#F5F5F5',
    href: 'https://www.tiktok.com/@blossom.pixel',
    label: '@blossom.pixel',
  },
  {
    key: 'line' as const,
    icon: MessageCircle,
    color: '#06C755',
    bg: '#F0FFF5',
    href: 'https://line.me/R/ti/p/@748qgshq',
    label: '@748qgshq',
    copyable: true,
  },
  {
    key: 'email' as const,
    icon: Mail,
    color: '#A67C52',
    bg: '#FFF8F2',
    href: 'mailto:blossom.pixel.th@gmail.com',
    label: 'blossom.pixel.th@gmail.com',
    copyable: true,
  },
]

export default function Contact() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#A67C52]/6" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#B8CCE0]/12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F0EBE1]/30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A67C52]/10 text-[#A67C52] text-sm font-medium mb-5">
              ✦ {t.contact.badge}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D1F14] leading-tight mb-5">
              {t.contact.title}
            </h2>
            <p className="text-[#4A3728]/75 text-base md:text-lg leading-relaxed mb-8 font-body">
              {t.contact.subtitle}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.facebook.com/bblossompixel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center justify-center gap-2 px-7 py-3.5 bg-[#A67C52] text-white rounded-full font-medium
                           hover:bg-[#7D5E3A] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
              >
                <Facebook size={16} />
                {t.contact.bookBtn}
              </a>
              <a
                href="https://www.facebook.com/bblossompixel/reviews/?id=100066675607800&sk=reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#A67C52] text-[#A67C52] rounded-full font-medium
                           hover:bg-[#A67C52]/8 transition-all duration-300 focus:outline-none"
              >
                <ExternalLink size={16} />
                {t.contact.reviewBtn}
              </a>
            </div>

            {/* Logo */}
            <div className="mt-10 flex items-center gap-3">
              <img src="/images/logo/logo and favicon.png" alt="Blossom Pixel" width={48} height={48} className="object-contain" />
              <div>
                <div className="font-display font-semibold text-[#A67C52] tracking-wider">BLOSSOM PIXEL</div>
                <div className="text-xs text-[#4A3728]/60 font-body">Premium Photo & Video Experiences</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact cards */}
          <div className="space-y-4">
            {CONTACT_CHANNELS.map(({ key, icon: Icon, color, bg, href, label, copyable }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-[rgba(166,124,82,0.15)] transition-all duration-300 hover:shadow-md"
                style={{ background: bg }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color + '20', color }}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#4A3728]/60 font-body mb-0.5">{t.contact[key]}</div>
                  <div className="font-medium text-[#2D1F14] font-body truncate text-sm md:text-base">{label}</div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {copyable && (
                    <button
                      onClick={() => copyToClipboard(label, key)}
                      className="p-2 rounded-lg text-[#4A3728]/40 hover:text-[#4A3728]/80 hover:bg-black/5 transition-colors focus:outline-none"
                      aria-label={`Copy ${key}`}
                    >
                      {copied === key
                        ? <Check size={15} className="text-green-500" />
                        : <Copy size={15} />
                      }
                    </button>
                  )}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors hover:bg-black/5 focus:outline-none"
                    style={{ color }}
                    aria-label={`Go to ${key}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
