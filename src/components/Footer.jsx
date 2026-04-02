export default function Footer() {
  return (
    <footer className="bg-brand-text text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/spendit_Logo.svg"
              alt="Spendit"
              className="h-6 w-auto brightness-0 invert"
            />
            <span className="font-body text-white/40 text-sm">|</span>
            <span className="font-body text-white/60 text-sm font-medium">Lunchit</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
            {[
              { label: 'Impressum', href: '#' },
              { label: 'Datenschutz', href: '#' },
              { label: 'AGB', href: '#' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm text-white/35">
            © {new Date().getFullYear()} Spendit AG
          </p>
        </div>
      </div>
    </footer>
  )
}
