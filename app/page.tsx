import Image from 'next/image'
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

      <section className="bg-ujo-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
            Meet Babajide Oduga (Uncle Jay)
          </h2>
          <div className="bg-ujo-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/tutors/babajide-oduga.png"
                  alt="Babajide Oduga, also known as Uncle Jay"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-ujo-text mb-4">
                  Founder &amp; Lead Tutor
                </h3>
                <p className="text-ujo-text-light mb-4 leading-relaxed">
                  Babajide Oduga, affectionately known as Uncle Jay, is a passionate educator with over 9 years of experience in online tutoring and student mentorship. His journey began with a simple desire to help African children excel academically while staying connected to their cultural roots.
                </p>
                <p className="text-ujo-text-light mb-4 leading-relaxed">
                  Uncle Jay holds a deep commitment to transforming education in the diaspora. He believes that every child deserves personalized attention, cultural celebration, and the confidence to pursue their dreams. His teaching methodology combines rigorous academics with emotional intelligence and cultural pride.
                </p>
                <p className="text-ujo-text-light leading-relaxed">
                  When he&apos;s not tutoring, Uncle Jay is developing curriculum innovations, mentoring new educators, or connecting with the global diaspora community. His vision is to create a world where African children see education as their pathway to excellence and cultural leadership. His genuine passion for helping children grow academically led to the founding of Uncle Jay&apos;s Academy in 2020, with the vision to build a leading learning community that inspires lasting excellence in every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
