import ScrollReveal from './ScrollReveal'

/**
 * Placeholder images – swap out src values when final assets are ready.
 * Each constant maps 1:1 to a card.
 */
const CARD_IMAGES = {
  geniessen: '/Step_01_geniessen.jpg',
  scannen:   '/Step_02_scannen.jpg',
  freuen:    '/03_Freuen.jpg',
}

const steps = [
  {
    step: '01',
    imgKey: 'geniessen',
    title: 'Essen auswählen',
    description:
      'Mitarbeitende wählen täglich ihr Mittagessen – ob beim Lieblingsrestaurant, im Supermarkt oder in der Kantine.',
  },
  {
    step: '02',
    imgKey: 'scannen',
    title: 'Scannen',
    description:
      'Bon einfach mit der Lunchit-App scannen. Die KI erkennt den Beleg automatisch und ordnet ihn korrekt zu.',
  },
  {
    step: '03',
    imgKey: 'freuen',
    title: 'Freuen',
    description:
      'Der Zuschuss wird direkt aufs Konto gutgeschrieben. Steuerfrei, unkompliziert und sofort verfügbar.',
  },
]

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <p className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
            So funktioniert&apos;s
          </p>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-brand-text text-balance leading-tight">
            Drei Schritte zum täglichen{' '}
            <span className="text-brand-green-light">Plus</span>
          </h2>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {steps.map(({ step, imgKey, title, description }, i) => (
            <ScrollReveal key={title} delay={0.12 * i} direction="up" className="flex flex-col">
              {/* Card */}
              <div className="relative mt-8 flex flex-col flex-1">

                {/* Step badge – floats above the image */}
                <div className="absolute -top-6 left-5 z-10 w-16 h-16 flex items-center justify-center rounded-[24px] bg-brand-green shadow-[0px_4px_12.1px_0px_rgba(51,102,35,0.48)]">
                  <span className="font-body font-semibold text-lg text-white leading-none">
                    {step}
                  </span>
                </div>

                {/* Photo – fully rounded */}
                <div className="h-[257px] w-full overflow-hidden rounded-[32px] shrink-0">
                  <img
                    src={CARD_IMAGES[imgKey]}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text – free below image, no card wrapper */}
                <div className="pt-8 px-2 flex flex-col gap-6 flex-1">
                  <h3 className="font-headline font-extrabold text-[32px] leading-8 text-brand-text">
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
