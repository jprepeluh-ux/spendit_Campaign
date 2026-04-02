import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send, ChevronDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const inputClass =
  'w-full font-body text-base text-brand-text bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green hover:ring-2 hover:ring-brand-green/30 hover:border-brand-green transition placeholder:text-brand-text/35'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="kontakt" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <ScrollReveal direction="left">
            <p className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Jetzt starten
            </p>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-brand-text leading-tight mb-6 text-balance">
              Bereit für das tägliche{' '}
              <span className="text-brand-green-light">Plus</span>?
            </h2>
            <p className="font-body text-lg text-brand-text leading-relaxed mb-8">
              Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.
              Kostenlos, unverbindlich und auf Ihre Unternehmensgröße zugeschnitten.
            </p>

            <div className="flex flex-col gap-4">
              {[
                'Persönliche Beratung ohne Kosten',
                'Individuelle Lösung für Ihr Unternehmen',
                'Schnelle Einrichtung in unter 48h',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-green shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span className="font-body text-base text-brand-text">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-[#E8F5E9] rounded-4xl p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-brand-text">
                    Vielen Dank!
                  </h3>
                  <p className="font-body text-brand-text/65 leading-relaxed">
                    Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-brand-text/70 mb-1.5" htmlFor="firstname">
                        Vorname
                      </label>
                      <input id="firstname" type="text" required placeholder="Anna" className={inputClass} autoComplete="given-name" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-brand-text/70 mb-1.5" htmlFor="lastname">
                        Nachname
                      </label>
                      <input id="lastname" type="text" required placeholder="Müller" className={inputClass} autoComplete="family-name" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-brand-text/70 mb-1.5" htmlFor="company">
                      Unternehmen
                    </label>
                    <input id="company" type="text" required placeholder="Musterfirma GmbH" className={inputClass} autoComplete="organization" />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-brand-text/70 mb-1.5" htmlFor="email">
                      E-Mail
                    </label>
                    <input id="email" type="email" required placeholder="anna@musterfirma.de" className={inputClass} autoComplete="email" />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-brand-text/70 mb-1.5" htmlFor="employees">
                      Anzahl Mitarbeitende
                    </label>
                    <div className="relative">
                      <select id="employees" className={`${inputClass} appearance-none pr-12`} defaultValue="">
                        <option value="" disabled>Bitte wählen</option>
                        <option>1–25</option>
                        <option>26–100</option>
                        <option>101–500</option>
                        <option>500+</option>
                      </select>
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-brand-text/50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex items-center justify-center gap-3 h-14 px-7 bg-brand-green text-white font-body font-semibold text-lg rounded-xl shadow-cta hover:bg-[#3a7227] hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                  >
                    {loading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        className="block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        Kostenlos beraten lassen
                      </>
                    )}
                  </button>

                  <p className="font-body text-xs text-brand-text/40 text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="#" className="underline hover:text-brand-green transition-colors">Datenschutzerklärung</a>{' '}
                    zu. Kein Spam, versprochen.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
