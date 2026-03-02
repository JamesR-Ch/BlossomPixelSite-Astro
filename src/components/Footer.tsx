import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Mail, Heart } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.08a8.14 8.14 0 004.78 1.52V7.17a4.85 4.85 0 01-1.01-.48z"/>
    </svg>
  )
}

const SOCIAL_LINKS = [
  { icon: Facebook,       href: 'https://www.facebook.com/bblossompixel',   label: 'Facebook' },
  { icon: Instagram,      href: 'https://www.instagram.com/blossom.pixel',  label: 'Instagram' },
  { icon: TikTokIcon,     href: 'https://www.tiktok.com/@blossom.pixel',    label: 'TikTok' },
  { icon: MessageCircle,  href: 'https://line.me/R/ti/p/@748qgshq',          label: 'Line' },
  { icon: Mail,           href: 'mailto:blossom.pixel.th@gmail.com',         label: 'Email' },
]

const NAV_LINKS = [
  { href: '#services',  labelKey: 'services'  as const },
  { href: '#reviews',   labelKey: 'reviews'   as const },
  { href: '#portfolio', labelKey: 'portfolio' as const },
  { href: '#process',   labelKey: 'process'   as const },
  { href: '#contact',   labelKey: 'contact'   as const },
]

export default function Footer() {
  const t = useStore(tStore)

  return (
    <footer className="bg-text-dark text-white relative overflow-hidden">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-tan to-transparent opacity-50" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #A67C52 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-cream rounded-xl p-1.5">
                <img src="/images/logo/logo and favicon.png" alt="Blossom Pixel" width={48} height={48} className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-display text-lg font-semibold text-tan-light tracking-wider">BLOSSOM PIXEL</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed font-body">{t.footer.tagline}</p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-tan/80 flex items-center justify-center
                             text-white/60 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tan/40"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-tan-light/80 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, labelKey }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/50 hover:text-white text-sm transition-colors font-body text-left focus:outline-none"
                  >
                    {t.nav[labelKey]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-tan-light/80 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50 font-body">
                <Facebook size={14} className="text-tan-light/70 shrink-0" />
                <a href="https://www.facebook.com/bblossompixel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blossom Pixel</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50 font-body">
                <Instagram size={14} className="text-tan-light/70 shrink-0" />
                <a href="https://www.instagram.com/blossom.pixel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">blossom.pixel</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50 font-body">
                <TikTokIcon size={14} />
                <a href="https://www.tiktok.com/@blossom.pixel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@blossom.pixel</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50 font-body">
                <MessageCircle size={14} className="text-tan-light/70 shrink-0" />
                <span>@748qgshq</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50 font-body">
                <Mail size={14} className="text-tan-light/70 shrink-0" />
                <a href="mailto:blossom.pixel.th@gmail.com" className="hover:text-white transition-colors break-all">blossom.pixel.th@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body">{t.footer.rights}</p>
          <p className="text-white/25 text-xs font-body flex items-center gap-1">
            Made with <Heart size={10} className="text-[#C47B8A]" fill="#C47B8A" /> for every special moment
          </p>
        </div>
      </div>
    </footer>
  )
}
