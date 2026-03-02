import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { useStore } from '@nanostores/react'
import { t as tStore } from '@/stores/language'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  },
})

export default function About() {
  const t = useStore(tStore)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { val: t.about.stat1Val, lbl: t.about.stat1Lbl },
    { val: t.about.stat2Val, lbl: t.about.stat2Lbl },
    { val: t.about.stat3Val, lbl: t.about.stat3Lbl },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-28 bg-[#FEFCF9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Collage */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative h-[480px] md:h-[560px]"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-4/5 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/onsite/1.jpg"
                alt="Blossom Pixel in action"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent image */}
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/settings/Setting-2.jpg"
                alt="Blossom Pixel setup"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating logo badge */}
            <div className="absolute top-4 right-6 w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-[#FAF7F2]">
              <img
                src="/images/logo/logo and favicon.png"
                alt="Blossom Pixel"
                className="w-full h-full object-contain p-2"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#B8CCE0]/30 -z-10" />
            <div className="absolute top-1/2 -right-6 w-24 h-24 rounded-full bg-[#A67C52]/10 -z-10" />
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A67C52]/10 text-[#A67C52] text-sm font-medium mb-4">
                ✦ {t.about.badge}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D1F14] leading-tight">
                {t.about.title}
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-[#4A3728]/80 text-base md:text-lg leading-relaxed font-body"
            >
              {t.about.desc}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="text-center p-4 rounded-2xl bg-[#FAF7F2] border border-[#A67C52]/15"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-[#A67C52] mb-1">
                    {val}
                  </div>
                  <div className="text-xs md:text-sm text-[#4A3728]/70 font-body">
                    {lbl}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-3 pt-2"
            >
              {/* Preview faces */}
              <div className="flex -space-x-3">
                {[2, 4, 6].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-white"
                  >
                    <img
                      src={`/images/onsite/${i < 6 ? i : 5}.jpg`}
                      alt=""
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#A67C52] text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-[#4A3728]/60 font-body">
                  Trusted by hundreds of clients
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
