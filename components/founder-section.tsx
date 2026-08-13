import Image from 'next/image'
import { WHATSAPP_CONSULTATION_URL } from '@/lib/constants'
import { BookOpen, Heart, Target, Compass } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-ujo-blue/20 to-ujo-white" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-4">
            Meet Our Founder & Lead Tutor
          </h2>
          <p className="text-lg text-ujo-text-light">
            The heart and vision behind Uncle Jay's Academy
          </p>
        </div>

        <div className="bg-ujo-white rounded-3xl shadow-xl overflow-hidden border border-ujo-blue/20">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Portrait */}
            <div className="md:col-span-2 bg-gradient-to-br from-ujo-purple/10 to-ujo-gold/10 flex items-center justify-center p-12">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-ujo-blue">
                <Image
                  src="/tutors/uncle-jay-founder.png"
                  alt="Babajide Oduga, founder of Uncle Jay's Academy"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-12">
              <h3 className="font-serif text-2xl font-bold text-ujo-text mb-2">
                Babajide Oduga
              </h3>
              <p className="text-ujo-purple font-semibold text-lg mb-6">
                Founder & Lead Tutor
              </p>

              {/* Biography */}
              <p className="text-ujo-text-light leading-relaxed mb-6">
                Babajide Oduga, affectionately known as Uncle Jay, is a passionate educator with over 9 years of experience in online tutoring and student mentorship. His journey began with a simple desire to help African children excel academically while staying connected to their cultural roots.His genuine passion for helping children grow academically led to the founding of Uncle Jay's Academy in 2020, with the vision to build a leading learning community that inspires lasting excellence in every student.
              </p>

              {/* Philosophy */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-ujo-blue/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-ujo-purple" />
                    <h4 className="font-semibold text-ujo-text">Educational Philosophy</h4>
                  </div>
                  <p className="text-sm text-ujo-text-light leading-relaxed">
                    Every child deserves personalized attention, cultural celebration, and the confidence to pursue their dreams. Teaching combines rigorous academics with emotional intelligence and cultural pride.
                  </p>
                </div>

                <div className="bg-ujo-blue/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-ujo-pink" />
                    <h4 className="font-semibold text-ujo-text">Personal Mission</h4>
                  </div>
                  <p className="text-sm text-ujo-text-light leading-relaxed">
                    To create a world where African children see education as their pathway to excellence and cultural leadership, empowering each learner to reach their full potential.
                  </p>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-ujo-blue/20 rounded-xl p-4">
                  <Target className="w-6 h-6 text-ujo-purple mx-auto mb-2" />
                  <div className="text-2xl font-serif font-bold text-ujo-purple">1000+</div>
                  <div className="text-xs text-ujo-text-light">Students Mentored</div>
                </div>
                <div className="text-center bg-ujo-blue/20 rounded-xl p-4">
                  <Compass className="w-6 h-6 text-ujo-gold mx-auto mb-2" />
                  <div className="text-2xl font-serif font-bold text-ujo-gold">9+</div>
                  <div className="text-xs text-ujo-text-light">Years Experience</div>
                </div>
                <div className="text-center bg-ujo-blue/20 rounded-xl p-4">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="text-2xl font-serif font-bold text-ujo-pink">12</div>
                  <div className="text-xs text-ujo-text-light">Countries Served</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ujo-purple hover:bg-indigo-700 text-ujo-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                <span>📅</span>
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
