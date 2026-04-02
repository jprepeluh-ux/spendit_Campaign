import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Vorteile', href: '#vorteile', sectionId: 'vorteile' },
  { label: 'So funktionierts', href: '#mission', sectionId: 'mission' },
  { label: 'Steuervorteil', href: '#steuervorteil', sectionId: 'steuervorteil' },
  { label: 'Kontakt', href: '#kontakt', sectionId: 'kontakt' },
]

function NavItem({ href, label, isActive }) {
  const [hovered, setHovered] = useState(false)
  const active = isActive && !hovered

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center font-body text-sm font-medium transition-colors duration-150"
      style={{ color: hovered || isActive ? '#535FED' : 'rgba(61,61,61,0.8)' }}
    >
      {label}
      <AnimatePresence>
        {hovered && (
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute -bottom-4 w-1.5 h-1.5 rounded-full bg-[#535FED]"
          />
        )}
      </AnimatePresence>
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId)
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
          else setActiveSection((prev) => (prev === id ? null : prev))
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-card py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Lunchit by Spendit – Startseite" className="flex items-center gap-3">
          <img src="/spendit_Logo.svg" alt="Spendit Logo" className="h-7 w-auto" />
          <span className="text-brand-text/40 font-body text-sm">|</span>
          <span className="font-body text-sm font-medium text-brand-text/60">Lunchit</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.sectionId}
            />
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center px-5 py-3 bg-brand-green text-white font-body font-semibold text-sm rounded-xl shadow-cta hover:bg-[#3a7227] hover:-translate-y-1 transition-all duration-200"
        >
          Kostenlose Beratung
        </a>

        {/* Mobile burger → X */}
        <button
          className="md:hidden p-2 rounded-lg text-brand-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <div className="w-[22px] h-[22px] flex flex-col justify-between py-[3px]">
            {/* Top bar */}
            <motion.span
              className="block w-full h-[2px] rounded-full bg-current origin-center"
              animate={menuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Middle bar */}
            <motion.span
              className="block w-full h-[2px] rounded-full bg-current"
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            {/* Bottom bar */}
            <motion.span
              className="block w-full h-[2px] rounded-full bg-current origin-center"
              animate={menuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-white overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMenuOpen(false)
                    setTimeout(() => {
                      document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' })
                    }, 320)
                  }}
                  className="font-body text-base font-medium py-1"
                  style={{ color: activeSection === link.sectionId ? '#535FED' : 'rgba(61,61,61,0.8)' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  setTimeout(() => {
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
                  }, 320)
                }}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-brand-green text-white font-semibold text-sm rounded-xl shadow-cta hover:-translate-y-1 transition-all duration-200"
              >
                Kostenlose Beratung
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
