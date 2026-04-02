import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Reusable scroll-reveal wrapper.
 * Wraps children in a motion div that fades/slides in when scrolled into view.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const offsets = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={`overflow-visible ${className}`}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
