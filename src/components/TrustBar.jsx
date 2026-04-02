import { useRef } from 'react'
import { motion } from 'framer-motion'

const logos = [
  { file: 'BASF.svg',                  alt: 'BASF' },
  { file: 'Lufthansa.svg',             alt: 'Lufthansa' },
  { file: 'Rewe.svg',                  alt: 'REWE' },
  { file: 'Vodafone.svg',              alt: 'Vodafone' },
  { file: 'HP.svg',                    alt: 'HP' },
  { file: 'Booking.svg',               alt: 'Booking.com' },
  { file: 'HDI.svg',                   alt: 'HDI' },
  { file: 'fressnapf.svg',             alt: 'Fressnapf' },
  { file: 'Burda_.svg',                alt: 'Burda' },
  { file: 'Conrad.svg',                alt: 'Conrad' },
  { file: 'Hays.svg',                  alt: 'Hays' },
  { file: 'Vinted.svg',                alt: 'Vinted' },
  { file: 'Multivac.svg',              alt: 'Multivac' },
  { file: 'Uniqa.svg',                 alt: 'UNIQA' },
  { file: 'Deutsches_rotes_kreuz.svg', alt: 'Deutsches Rotes Kreuz' },
  { file: 'SOS_Kinderdörfer.svg',      alt: 'SOS-Kinderdörfer' },
  { file: 'Berliner_Werkstatt.svg',    alt: 'Berliner Werkstatt' },
  { file: 'Billa.svg',                 alt: 'Billa' },
  { file: 'aumavio.svg',               alt: 'Aumavio' },
  { file: 'itk.svg',                   alt: 'ITK' },
  { file: 'Kubatzki.svg',              alt: 'Kubatzki' },
]

// Duplicate for seamless infinite loop
const track = [...logos, ...logos]

export default function TrustBar() {
  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="font-body text-sm text-brand-text/40 text-center uppercase tracking-widest font-medium">
          Partner die uns vertrauen
        </p>
      </div>

      {/* Infinite scrolling logo band */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: 'max-content' }}
        >
          {track.map(({ file, alt }, i) => (
            <div key={`${file}-${i}`} className="shrink-0 flex items-center justify-center h-10 w-32">
              <img
                src={`/Kunden/${file}`}
                alt={alt}
                className="max-h-full max-w-full object-contain"
                style={{ filter: 'grayscale(1) opacity(0.35)' }}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
