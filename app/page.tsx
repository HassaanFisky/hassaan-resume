import Header from '@/components/Header'
import ParticleBackground from '@/components/ParticleBackground'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  )
}
