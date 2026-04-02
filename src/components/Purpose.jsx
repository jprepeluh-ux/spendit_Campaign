import { Heart, TrendingUp, Users, Smile } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    icon: Heart,
    title: 'Mitarbeiter glücklich machen',
    description: (
      <>Ein täglicher Essenszuschuss gehört zu den beliebtesten Benefits. Mit <strong>Lunchit</strong> ist er digital, flexibel und sofort einsetzbar.</>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Attraktiver Arbeitgeber werden',
    description: 'Employer Branding beginnt im Alltag. Wer seinen Mitarbeitenden das Mittagessen erleichtert, bleibt in Erinnerung.',
  },
  {
    icon: Users,
    title: 'Bindung & Zufriedenheit steigern',
    description: <>Regelmäßige Wertschätzung senkt die Fluktuation. <strong>Lunchit</strong> ist das kleine Plus, das einen großen Unterschied macht.</>,
  },
  {
    icon: Smile,
    title: 'Einfach im HR-Alltag',
    description: <>Keine Papierbelege, kein Aufwand. <strong>Lunchit</strong> integriert sich nahtlos in bestehende HR-Prozesse und Abrechnungssysteme.</>,
  },
]

export default function Purpose() {
  return (
    <section id="vorteile" className="bg-brand-bg py-24 md:py-32 relative overflow-hidden">
      {/* Decorative circle – large, centered behind cards */}
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full bg-[#E8F5E9] pointer-events-none"
        style={{ bottom: '-1000px', left: '50%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Warum Lunchit?
          </p>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-brand-text text-balance leading-tight">
            Mehr als ein Benefit –<br className="hidden sm:block" /> ein echtes Zeichen
          </h2>
          <p className="mt-5 font-body text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            Lunchit by Spendit ist der smarte Weg, Mitarbeiterzufriedenheit zu steigern –
            steueroptimiert, digital und einfach zu verwalten.
          </p>
        </ScrollReveal>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={0.1 * i} className="flex flex-col">
              <div className="bg-white flex flex-col items-center gap-10 p-8 max-md:px-6 rounded-[32px] shadow-[0px_4px_33px_0px_rgba(27,58,18,0.06)] flex-1">

                {/* Icon badge */}
                <div className="w-16 h-16 rounded-[24px] bg-[#dbf0d8] flex items-center justify-center shrink-0">
                  <Icon size={32} className="text-brand-green" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-6 w-full">
                  <h3 className="font-headline font-extrabold text-[24px] leading-7 text-brand-text">
                    {title}
                  </h3>
                  <p className="font-body text-[16px] text-brand-text" style={{ lineHeight: '26px' }}>
                    {description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
