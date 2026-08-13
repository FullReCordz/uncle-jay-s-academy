'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Star } from 'lucide-react'
import { WHATSAPP_CONSULTATION_TESTIMONIALS_URL } from '@/lib/constants'

const testimonials = [
  {
    type: 'parent',
    name: 'Mrs Barbara',
    location: 'Saudi Arabia',
    image: '👩',
    title: 'Parent',
    rating: 5,
    quote:
      'J.A did amazing in maths in his exams this term. Ah, God bless you people oh. Nothing like seeing amazing report cards',
    impact: 'Amazing report cards',
  },
  {
    type: 'parent',
    name: 'Mrs Ngejuru',
    location: 'United Kingdom',
    image: '👩',
    title: 'Parent',
    rating: 5,
    quote:
      "Good morning! Just wanted to say a huge thanks for the great impact you've had on my boys maths. He totally exceeded his target this term!",
    impact: 'Exceeded his target',
  },
  {
    type: 'parent',
    name: 'Mrs Asoso',
    location: 'United Kingdom',
    image: '👩',
    title: 'Parent',
    rating: 5,
    quote:
      'My son is now working above target in Maths. Thank you so much Uncle Jay',
    impact: 'Working above target',
  },
  {
    type: 'parent',
    name: 'Peter',
    location: 'Nigeria',
    image: '👨',
    title: 'Parent',
    rating: 5,
    quote:
      'Uncle Jay pushed me to go beyond my limit when I was preparing for my Loyola common entrance and for that I am truly grateful',
    impact: 'Loyola common entrance preparation',
  },
  {
    type: 'parent',
    name: 'Mr Deji',
    location: 'Canada',
    image: '👨',
    title: 'Parent',
    rating: 5,
    quote:
      "Uncle Jay and his team prepped Lila for her 11+ exams and I was really impressed with my daughter's result and overall improvement in school. A big thank you to the team",
    impact: '11+ exam preparation',
  },
]

export default function TestimonialsPage() {
  const parents = testimonials.filter((t) => t.type === 'parent')
  const students = testimonials.filter((t) => t.type === 'student')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Success Stories
            </h1>
            <p className="text-lg text-ujo-text-light max-w-2xl">
              Hear from parents and students who have experienced the Uncle Jay's Academy difference. Real stories from real families achieving real results.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-gradient-to-r from-ujo-purple to-ujo-pink py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif font-bold text-ujo-white mb-2">1000+</div>
                <div className="text-ujo-white">Students Mentored</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-ujo-white mb-2">95%</div>
                <div className="text-ujo-white">Confidence Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-ujo-white mb-2">12+</div>
                <div className="text-ujo-white">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              What Parents Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parents.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-ujo-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-ujo-gold text-ujo-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-ujo-text-light mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Impact */}
                  <div className="bg-ujo-blue rounded-lg px-3 py-1 inline-block mb-4">
                    <p className="text-xs font-semibold text-ujo-purple">
                      {testimonial.impact}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div>
                        <p className="font-semibold text-ujo-text text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-ujo-text-light">
                          {testimonial.title}
                        </p>
                        <p className="text-xs text-ujo-gold font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Student Voices
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {students.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-ujo-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-ujo-purple text-ujo-purple"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-ujo-text-light mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-ujo-purple to-ujo-pink rounded-lg px-3 py-1 inline-block mb-4">
                    <p className="text-xs font-semibold text-ujo-white">
                      {testimonial.impact}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div>
                        <p className="font-semibold text-ujo-text text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-ujo-text-light">
                          {testimonial.title}
                        </p>
                        <p className="text-xs text-ujo-purple font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose UJA */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Common Success Themes
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '📈',
                  title: 'Grade Improvement',
                  description:
                    'Students consistently improve grades through personalized support, targeted strategies, and consistent practice.',
                },
                {
                  icon: '💪',
                  title: 'Confidence Building',
                  description:
                    'Beyond academics, students develop self-assurance, resilience, and a growth mindset that carries into all areas of life.',
                },
                {
                  icon: '🌍',
                  title: 'Cultural Pride',
                  description:
                    'Students connect with their African heritage while excelling academically, developing strong cultural identity.',
                },
                {
                  icon: '🎯',
                  title: 'Goal Achievement',
                  description:
                    'From exam success to university entry to mastering challenging subjects, students achieve their specific goals.',
                },
                {
                  icon: '🤝',
                  title: 'Personalized Support',
                  description:
                    'Each student receives customized attention, learning at their own pace with strategies tailored to their needs.',
                },
                {
                  icon: '❤️',
                  title: 'Genuine Care',
                  description:
                    'Students feel truly valued and supported. Uncle Jay and tutors genuinely invest in each child\'s success and wellbeing.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-ujo-blue to-ujo-blue/50 rounded-xl p-8"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-ujo-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ujo-text-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story Section */}
        <section className="py-16 md:py-24 bg-ujo-blue/10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-4 text-center">
              Share Your Story
            </h2>
            <p className="text-center text-ujo-text-light mb-8">
              Had a great experience with UJA? We'd love to hear about it. Submit your testimonial below and inspire other families.
            </p>

            <iframe
              src="https://tally.so/embed/dW1x5y"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Submit Your Testimonial"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Your Child's Success Story Starts Here
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Join hundreds of families achieving academic excellence and cultural pride. Let's write your child's success story.
            </p>
            <a
              href={WHATSAPP_CONSULTATION_TESTIMONIALS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ujo-white text-ujo-purple hover:bg-ujo-blue font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Book Your Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
