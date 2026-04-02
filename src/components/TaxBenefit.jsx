import { Euro, CheckCircle2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const highlights = [
  'Bis zu 7,23 € täglich steuerfrei pro Mitarbeitendem',
  'Keine Sozialabgaben auf den Essenszuschuss',
  'Einfache Abrechnung für Lohnbuchhaltung & Steuerberater',
  'Konform mit aktuellen BMF-Richtlinien',
  'Komplett digitaler Nachweis – prüfungssicher',
]

export default function TaxBenefit() {
  return (
    <section id="steuervorteil" className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <p className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Rationaler Hebel
            </p>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-brand-text leading-tight mb-6 text-balance">
              Steuervorteil nutzen –<br />
              <span className="text-brand-green-light">für alle Seiten</span>
            </h2>
            <p className="font-body text-lg text-brand-text leading-relaxed mb-10">
              Essenszuschüsse sind steuerlich begünstigt. Das bedeutet: Ihr Unternehmen
              spart Lohnnebenkosten und Ihre Mitarbeitenden bekommen mehr netto vom Brutto.
              Eine echte Win-win-Situation.
            </p>

            <ul className="flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-brand-text">
                  <CheckCircle2
                    size={20}
                    className="text-brand-green shrink-0 mt-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: Visual card */}
          <ScrollReveal direction="right" delay={0.1} className="overflow-visible">
            <div className="relative overflow-visible">
              {/* Decorative circles – behind the card with parallax */}
              <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#E8F5E9] max-lg:-right-0 max-lg:-top-8" aria-hidden="true" />
              <div className="absolute -right-6 -top-6 w-40 h-40 rounded-full bg-[#E8F5E9] max-lg:right-8 max-lg:-top-4" aria-hidden="true" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-[#E8F5E9] max-lg:-left-0 max-lg:-bottom-6" aria-hidden="true" />

            <div className="bg-white rounded-4xl p-10 max-md:px-6 shadow-card-lg relative z-10">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#dbf0d8] mb-8">
                  <Euro size={26} className="text-brand-green" strokeWidth={1.75} />
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'Max. steuerfreier Betrag / Tag', value: '7,23 €', sub: 'je Mitarbeitendem' },
                    { label: 'Mögliche Ersparnis / Monat', value: '~ 144,60 €', sub: 'je Mitarbeitendem' },
                    { label: 'Ersparnis bei 100 MA / Jahr', value: '~ 173.520 €', sub: 'Steuern & Sozialabgaben' },
                  ].map(({ label, value, sub }) => (
                    <div key={label} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-body text-sm text-brand-text mb-0.5">{label}</p>
                        <p className="font-body text-xs text-brand-text">{sub}</p>
                      </div>
                      <span className="font-headline font-bold text-2xl max-md:text-[20px] text-brand-green">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-xs text-brand-text">
                  * Richtwerte gem. §8 Abs. 2 EStG. Individuelle steuerliche Beratung empfohlen.
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
