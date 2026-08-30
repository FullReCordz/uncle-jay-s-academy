'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        'J.A did amazing in maths in his exams this term. Ah, God bless you people oh. Nothing like seeing amazing report cards',
      name: 'Mrs Barbara',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
    },
    {
      quote:
        "Good morning! Just wanted to say a huge thanks for the great impact you've had on my boys maths. He totally exceeded his target this term!",
      name: 'Mrs Ngejuru',
      country: 'United Kingdom',
      flag: '🇬🇧',
    },
    {
      quote: 'My son is now working above target in Maths. Thank you so much Uncle Jay',
      name: 'Mrs Asoso',
      country: 'United Kingdom',
      flag: '🇬🇧',
    },
    {
      quote: 'Uncle Jay pushed me to go beyond my limit when I was preparing for my Loyola common entrance and for that I am truly grateful',
      name: 'Peter',
      country: 'Nigeria',
      flag: '🇳🇬',
    },
    {
      quote: "Uncle Jay and his team prepped Lila for her 11+ exams and I was really impressed with my daughter's result and overall improvement in school. A big thank you to the team",
      name: 'Mr Deji',
      country: 'Canada',
      flag: '🇨🇦',
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-ujo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-4">
            What Parents & Students Say
          </h2>
          <p className="text-lg text-ujo-text-light">
            Real stories from families whose lives have been transformed
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark rounded-2xl p-12 text-center">
            <div className="text-ujo-text mb-6">
              <p className="text-xl leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
            </div>
            <div className="text-4xl mb-3">{testimonials[currentIndex].flag}</div>
            <div className="font-semibold text-ujo-text">
              {testimonials[currentIndex].name}
            </div>
            <div className="text-ujo-text-light text-sm">
              {testimonials[currentIndex].country}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 bg-ujo-purple hover:bg-indigo-700 text-ujo-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-16 bg-ujo-purple hover:bg-indigo-700 text-ujo-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-ujo-purple w-8' : 'bg-ujo-blue'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
