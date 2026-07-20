'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    type: 'parent',
    name: 'Ameena Hassan',
    location: 'London, UK',
    image: '👩‍🦱',
    title: 'Parent of Zain (Age 13)',
    rating: 5,
    quote:
      'Uncle Jay has been transformative for my son. Not only has his Math grades improved from a C to an A, but he\'s also gained so much confidence. The personalized approach and cultural awareness make a real difference.',
    impact: '35% grade improvement',
  },
  {
    type: 'student',
    name: 'Zainab Okafor',
    location: 'Toronto, Canada',
    image: '👧',
    title: 'Secondary Student (Age 15)',
    rating: 5,
    quote:
      'I used to dread English lessons, but Uncle Jay made it fun and actually interesting! He explains things in a way that makes sense, and he celebrates every win. Now I\'m excited for my lessons.',
    impact: 'Confidence boost',
  },
  {
    type: 'parent',
    name: 'Dr. Kwame Mensah',
    location: 'New York, USA',
    image: '👨‍💼',
    title: 'Parent of Ama & Kofi (Ages 10 & 8)',
    rating: 5,
    quote:
      'As a busy parent working in healthcare, finding quality tutoring was challenging. Uncle Jay\'s Academy is reliable, flexible, and truly invested in my children\'s success. They look forward to every session.',
    impact: 'Both children excelling',
  },
  {
    type: 'student',
    name: 'Chisom Ezeoke',
    location: 'Lagos, Nigeria',
    image: '👦',
    title: 'Secondary Student (Age 16)',
    rating: 5,
    quote:
      'The JAMB prep with Uncle Jay gave me strategies I actually use. His focus on understanding rather than just memorizing made my score jump by 150 points. Highly recommend!',
    impact: '150+ point JAMB increase',
  },
  {
    type: 'parent',
    name: 'Nadia Diallo',
    location: 'Berlin, Germany',
    image: '👩',
    title: 'Parent of Aïssatou (Age 12)',
    rating: 5,
    quote:
      'My daughter struggled with homesickness and school anxiety. Uncle Jay didn\'t just tutor her—he became a mentor and mentor figure who truly understands the diaspora experience. She\'s thriving now.',
    impact: 'Emotional resilience',
  },
  {
    type: 'parent',
    name: 'Ahmed Ibrahim',
    location: 'Dubai, UAE',
    image: '👨',
    title: 'Parent of Leah (Age 9)',
    rating: 5,
    quote:
      'The curriculum is rigorous but adapted to my daughter\'s learning pace. Regular progress updates keep me informed, and Uncle Jay genuinely cares about her development beyond academics.',
    impact: 'Top of class placement',
  },
  {
    type: 'student',
    name: 'Kobi Johnson',
    location: 'Atlanta, USA',
    image: '👦',
    title: 'Primary Student (Age 7)',
    rating: 5,
    quote:
      'Uncle Jay makes learning so fun! I didn\'t like reading before, but now I\'m reading books and actually enjoying them. My teacher says I\'ve improved so much!',
    impact: 'Love of reading',
  },
  {
    type: 'parent',
    name: 'Amina Khan',
    location: 'Manchester, UK',
    image: '👩',
    title: 'Parent of Jamal (Age 17)',
    rating: 5,
    quote:
      'A-Level prep felt overwhelming for my son, but Uncle Jay broke everything down into manageable chunks. His structured approach and encouragement helped him secure an A* in Mathematics.',
    impact: 'A* grade achieved',
  },
  {
    type: 'student',
    name: 'Precious Osei',
    location: 'Cape Town, South Africa',
    image: '👧',
    title: 'Secondary Student (Age 14)',
    rating: 5,
    quote:
      'Public speaking used to terrify me, but Uncle Jay\'s coaching gave me tools to manage anxiety. Now I present confidently in class and actually enjoy it. This changed my life!',
    impact: 'Speaking confidence',
  },
  {
    type: 'parent',
    name: 'Marcus Thompson',
    location: 'Washington DC, USA',
    image: '👨‍🦱',
    title: 'Parent of Trinity (Age 11)',
    rating: 5,
    quote:
      'As an African parent living abroad, I wanted my daughter to stay connected to her roots. Uncle Jay integrates culture beautifully into education. She\'s proud of her heritage and excelling academically.',
    impact: 'Cultural pride',
  },
  {
    type: 'student',
    name: 'Tunde Adeyemi',
    location: 'Houston, USA',
    image: '👦',
    title: 'Primary Student (Age 9)',
    rating: 5,
    quote:
      'I used to struggle with homework and felt really behind. Now I understand everything better and finish my work without stress. Uncle Jay is the best teacher ever!',
    impact: 'Homework confidence',
  },
  {
    type: 'parent',
    name: 'Fatima Al-Rashid',
    location: 'Paris, France',
    image: '👩',
    title: 'Parent of Amira (Age 13)',
    rating: 5,
    quote:
      'Finding quality tutoring for both academics and cultural connection was impossible—until Uncle Jay\'s Academy. My daughter is thriving, and I finally feel supported as an African parent abroad.',
    impact: 'Holistic development',
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
                <div className="text-4xl font-serif font-bold text-ujo-white mb-2">250+</div>
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
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I%20loved%20the%20testimonials.%20I'd%20like%20to%20book%20a%20free%20consultation"
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
