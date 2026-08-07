import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FounderSection from '@/components/founder-section'
import WhyUJASection from '@/components/why-uja-section'
import StatsSection from '@/components/stats-section'
import TestimonialsSection from '@/components/testimonials-section'
import ProgramsSection from '@/components/programs-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FounderSection />
      <WhyUJASection />
      <StatsSection />
      <TestimonialsSection />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
