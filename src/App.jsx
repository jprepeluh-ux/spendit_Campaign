import { useState, useEffect } from 'react'
import { enableVisualEditing } from '@sanity/visual-editing'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Purpose from './components/Purpose'
import Mission from './components/Mission'
import TaxBenefit from './components/TaxBenefit'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { client } from '../sanity/lib/client'
import { landingPageQuery } from '../sanity/lib/queries'

const inPresentation = typeof window !== 'undefined' && window.parent !== window

export default function App() {
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    client.fetch(landingPageQuery)
      .then((data) => { if (data) setPageData(data) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (inPresentation) enableVisualEditing()
  }, [])

  const hero = pageData?.hero
  const purpose = pageData?.purpose
  const taxBenefit = pageData?.taxBenefit

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero
          headlineStart={hero?.headlineStart}
          headlineHighlight={hero?.headlineHighlight}
          subheadline={hero?.subheadline}
          ctaLabel={hero?.ctaLabel}
          ctaHref={hero?.ctaHref}
          backgroundImage={hero?.backgroundImage ?? null}
        />
        <TrustBar />
        <Purpose
          eyebrow={purpose?.eyebrow}
          headline={purpose?.headline}
          subtext={purpose?.subtext}
          benefits={purpose?.benefits}
        />
        <Mission />
        <TaxBenefit
          eyebrow={taxBenefit?.eyebrow}
          headline={taxBenefit?.headline}
          headlineHighlight={taxBenefit?.headlineHighlight}
          body={taxBenefit?.body}
          highlights={taxBenefit?.highlights}
          figures={taxBenefit?.figures}
          disclaimer={taxBenefit?.disclaimer}
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
