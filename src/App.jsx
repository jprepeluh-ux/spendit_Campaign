import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Purpose from './components/Purpose'
import Mission from './components/Mission'
import TaxBenefit from './components/TaxBenefit'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Purpose />
        <Mission />
        <TaxBenefit />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
