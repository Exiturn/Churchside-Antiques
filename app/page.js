import About from '@/components/about/About'
import Background from '@/components/background/Background'
import Contact from '@/components/contact/Contact'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import PaymentBanner from '@/components/paymentBanner/PaymentBanner'
import Pricing from '@/components/pricing/Pricing'
import Reviews from '@/components/reviews/Reviews'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Background/>
      <About />
      <Reviews />
      <Pricing />
      <PaymentBanner />
      <Contact />
    </main>
  )
}
