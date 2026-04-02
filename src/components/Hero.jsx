import { motion } from 'framer-motion'

const HERO_IMAGE_URL = '/key_visual.png'
const SPENDIT_LOGO_URL = '/spendit_Logo.svg'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const desktopCardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const plusVariants = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [1, 0.85, 1],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <>
      {/* ── MOBILE layout (< md) ── */}
      <section className="md:hidden relative w-full min-h-screen overflow-hidden" aria-label="Hero Stage">
        {/* Full-bleed image */}
        <img
          src={HERO_IMAGE_URL}
          alt="Zwei Menschen genießen ihre Mittagspause in der Stadt"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
          loading="eager"
        />

        {/* Floating content card – bottom overlay */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-[38px] p-6 flex flex-col gap-8"
        >
          {/* Text */}
          <div className="flex flex-col gap-5">
            <h1 className="font-headline font-extrabold text-[32px] leading-[40px] text-brand-text">
              Gönn deinem Team das tägliche{' '}
              <motion.span
                className="text-brand-green-light inline-block"
                variants={plusVariants}
                animate="animate"
              >
                Plus
              </motion.span>
            </h1>
            <p className="font-body text-[16px] text-brand-text leading-relaxed">
              Genieße jede Pause mit{' '}
              <strong className="font-semibold">Lunchit</strong>
              {' '}– deinem digitalen Plus zum Essenszuschuss.
            </p>
          </div>

          {/* CTA – full width */}
          <a
            href="#kontakt"
            className="flex items-center justify-center h-16 w-full bg-brand-green text-white font-body font-semibold text-[16px] rounded-xl shadow-cta hover:bg-[#3a7227] transition-colors"
          >
            Zur kostenlosen Beratung
          </a>
        </motion.div>
      </section>

      {/* ── DESKTOP layout (≥ md) ── */}
      <section className="hidden md:block relative w-full min-h-screen overflow-hidden" aria-label="Hero Stage">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Zwei Menschen genießen ihre Mittagspause in der Stadt"
            className="hero-img absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(-83.16deg, rgba(255,255,255,0) 44.9%, rgba(255,255,255,1) 103.7%)' }}
          />
          <div className="absolute inset-0 bg-[#f2f2f2]/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
          <motion.div
            variants={desktopCardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/90 backdrop-blur-sm rounded-4xl p-14 max-w-[568px] w-full shadow-card-lg flex flex-col gap-16"
          >
            <div className="flex flex-col gap-6">
              <h1 className="font-headline font-extrabold text-[56px] leading-[1.1] text-brand-text text-balance">
                Gönn deinem Team das tägliche{' '}
                <motion.span
                  className="text-brand-green-light inline-block"
                  variants={plusVariants}
                  animate="animate"
                >
                  Plus
                </motion.span>
              </h1>
              <p className="font-body text-lg text-brand-text leading-relaxed">
                Genieße jede Pause mit{' '}
                <strong className="font-semibold text-brand-text">Lunchit</strong>
                {' '}– deinem digitalen Plus zum Essenszuschuss.
              </p>
            </div>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center h-16 px-7 bg-brand-green text-white font-body font-semibold text-lg rounded-xl shadow-cta hover:bg-[#3a7227] hover:-translate-y-1 transition-all duration-200"
              >
                Zur kostenlosen Beratung
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-body text-sm text-brand-blue">by</span>
                <img src={SPENDIT_LOGO_URL} alt="Spendit" className="h-6 w-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
