import Background from '@/components/background/Background'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Background/>
    </main>
  )
}
