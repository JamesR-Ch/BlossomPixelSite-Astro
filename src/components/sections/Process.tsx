import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, CheckCircle, Rocket, Send } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

const STEP_ICONS = [Palette, CheckCircle, Rocket, Send]
const STEP_COLORS = ['#A67C52', '#5B7FA6', '#7A9E7E', '#C47B8A']
const STEP_BG = ['#FFF8F2', '#F2F7FF', '#F2FFF5', '#FFF5F7']

export default function Process() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="py-20 md:py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] text-sm font-medium mb-4">
            ✦ {t.process.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#2D1F14] leading-tight">
            {t.process.title}
            <span className="block gradient-blue italic">{t.process.subtitle}</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5"
            style={{ background: 'linear-gradient(90deg, #A67C52, #5B7FA6, #7A9E7E, #C47B8A)', opacity: 0.25 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {t.process.steps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              const color = STEP_COLORS[i]
              const bg = STEP_BG[i]

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="relative text-center group"
                >
                  {/* Icon circle */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg
                                 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                      style={{ background: bg, border: `2px solid ${color}30` }}
                    >
                      {/* Number badge */}
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                        style={{ background: color }}
                      >
                        {i + 1}
                      </div>
                      <Icon size={28} style={{ color }} />
                    </div>
                  </div>

                  {/* Step number */}
                  <div
                    className="font-display text-5xl font-bold opacity-8 mb-2 leading-none select-none"
                    style={{ color, opacity: 0.08 }}
                  >
                    {step.num}
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color }}>
                    {step.title}
                  </h3>
                  <p className="text-[#4A3728]/70 text-sm leading-relaxed font-body max-w-[180px] mx-auto">
                    {step.desc}
                  </p>

                  {/* Mobile connector */}
                  {i < t.process.steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <div className="h-8 w-0.5 rounded-full" style={{ background: color, opacity: 0.3 }} />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#A67C52]/10 via-[#B8CCE0]/20 to-[#A67C52]/10 border border-[#A67C52]/15">
            <span className="text-[#4A3728]/80 font-body text-sm md:text-base">
              Ready to create memories? ✨
            </span>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-[#A67C52] text-white rounded-full text-sm font-medium hover:bg-[#7D5E3A] transition-colors focus:outline-none"
            >
              Get Started →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
