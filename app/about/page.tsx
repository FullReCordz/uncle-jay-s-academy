'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Our Story
            </h1>
            <p className="text-lg text-ujo-text-light max-w-2xl">
              Uncle Jay&apos;s Academy was founded with a simple yet powerful mission: to empower African children in the diaspora with world-class education while maintaining cultural connection and confidence.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-ujo-blue rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ujo-purple rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-ujo-text">Mission</h2>
                </div>
                <p className="text-ujo-text-light leading-relaxed">
                  To create a calm and supportive learning space where every student feels encouraged and equipped to learn and excel.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-ujo-purple to-ujo-pink rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ujo-white rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-ujo-white">Vision</h2>
                </div>
                <p className="text-ujo-white leading-relaxed">
                  To build a leading learning community that inspires lasting excellence in every student.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="bg-gradient-to-b from-transparent to-ujo-blue/20 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Our Teaching Philosophy
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '👨‍🏫',
                  title: 'Student-Centered',
                  description: 'Every child learns differently. We tailor our approach to individual learning styles, pace, and needs.',
                },
                {
                  icon: '💪',
                  title: 'Confidence Building',
                  description: 'Beyond academics, we focus on developing self-esteem, resilience, and a growth mindset in every student.',
                },
                {
                  icon: '🌍',
                  title: 'Cultural Pride',
                  description: 'We celebrate African heritage and teach children to see their culture as a source of strength and pride.',
                },
                {
                  icon: '📚',
                  title: 'Excellence',
                  description: 'High standards combined with compassionate support ensure every student reaches their full potential.',
                },
                {
                  icon: '🤝',
                  title: 'Family Partnership',
                  description: 'We work closely with parents to create a supportive learning environment that extends beyond tutoring sessions.',
                },
                {
                  icon: '🎓',
                  title: 'Real-World Skills',
                  description: 'Education that prepares students not just for exams, but for success in university and beyond.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-ujo-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-ujo-text mb-3">{item.title}</h3>
                  <p className="text-ujo-text-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Why Families Choose Uncle Jay&apos;s Academy
            </h2>

            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Expert, Passionate Tutors',
                  description: 'Our educators are carefully selected and trained. They are not just teachers—they are mentors who genuinely care about your child&apos;s success.',
                },
                {
                  number: '2',
                  title: 'Personalized Learning Plans',
                  description: 'Every student receives a customized learning journey tailored to their strengths, challenges, and aspirations.',
                },
                {
                  number: '3',
                  title: 'Proven Results',
                  description: 'Our students consistently achieve grade improvements averaging 95% confidence boost and improved academic performance.',
                },
                {
                  number: '4',
                  title: 'Cultural Awareness',
                  description: 'We celebrate and integrate African culture into learning, helping children develop pride in their heritage.',
                },
                {
                  number: '5',
                  title: 'Flexible Scheduling',
                  description: 'Classes fit your family&apos;s busy schedule with flexible timing across multiple time zones.',
                },
                {
                  number: '6',
                  title: 'Supportive Community',
                  description: 'Join a network of African families dedicated to educational excellence and cultural connection.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-ujo-purple to-ujo-pink text-ujo-white font-serif font-bold">
                      {item.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ujo-text mb-2">{item.title}</h3>
                    <p className="text-ujo-text-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-ujo-blue py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Meet Babajide Oduga (Uncle Jay)
            </h2>

            <div className="bg-ujo-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-full bg-gradient-to-br from-ujo-purple to-ujo-pink rounded-xl h-64 md:h-80 flex items-center justify-center text-6xl">
                    👨‍🏫
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-ujo-text mb-4">
                    Founder & Lead Tutor
                  </h3>

                  <p className="text-ujo-text-light mb-4 leading-relaxed">
                    Babajide Oduga, affectionately known as Uncle Jay, is a passionate educator with over 9 years of experience in online tutoring and student mentorship. His journey began with a simple desire to help African children excel academically while staying connected to their cultural roots.
                  </p>

                  <p className="text-ujo-text-light mb-4 leading-relaxed">
                    Uncle Jay holds a deep commitment to transforming education in the diaspora. He believes that every child deserves personalized attention, cultural celebration, and the confidence to pursue their dreams. His teaching methodology combines rigorous academics with emotional intelligence and cultural pride.
                  </p>

                  <p className="text-ujo-text-light mb-6 leading-relaxed">
                    When he&apos;s not tutoring, Uncle Jay is developing curriculum innovations, mentoring new educators, or connecting with the global diaspora community. His vision is to create a world where African children see education as their pathway to excellence and cultural leadership.
                  </p>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="text-3xl font-serif font-bold text-ujo-purple">1000+</div>
                      <div className="text-sm text-ujo-text-light">Students Mentored</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-serif font-bold text-ujo-gold">9+</div>
                      <div className="text-sm text-ujo-text-light">Years Experience</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-serif font-bold text-ujo-pink">12</div>
                      <div className="text-sm text-ujo-text-light">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Book a free consultation with Uncle Jay and discover how we can help your child excel academically while celebrating their heritage.
            </p>
            <a
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20my%20child"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ujo-white text-ujo-purple hover:bg-ujo-blue font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Book a Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
