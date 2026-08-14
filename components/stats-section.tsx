'use client'

import { useEffect, useState } from 'react'

export default function StatsSection() {
  const [counts, setCounts] = useState({ lessons: 0, confidence: 0, grades: 0, countries: 0 })

  useEffect(() => {
    const targets = { lessons: 1000, confidence: 95, grades: 90, countries: 12 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        lessons: Math.floor(targets.lessons * progress),
        confidence: Math.floor(targets.confidence * progress),
        grades: Math.floor(targets.grades * progress),
        countries: Math.floor(targets.countries * progress),
      })
      if (step === steps) clearInterval(interval)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-ujo-purple to-indigo-700 text-ujo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-purple-100">
            Transforming lives through excellent education
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold mb-2 whitespace-nowrap">{counts.lessons}+</div>
            <p className="text-purple-100">Lessons Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold mb-2">{counts.confidence}%</div>
            <p className="text-purple-100">Parents Report Improved Confidence</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold mb-2">{counts.grades}%</div>
            <p className="text-purple-100">Students Improved Grades Within a Term</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold mb-2">{counts.countries}</div>
            <p className="text-purple-100">Countries Represented</p>
          </div>
        </div>
      </div>
    </section>
  )
}
