'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle, Calendar, Users, BookOpen } from 'lucide-react'

export default function EnrollPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Enroll Your Child Today
            </h1>
            <p className="text-lg text-ujo-text-light max-w-2xl">
              Join hundreds of students already achieving academic excellence at Uncle Jay&apos;s Academy. The enrollment process is simple and takes just a few minutes.
            </p>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Our Enrollment Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  description: 'Schedule a 30-minute free consultation with Uncle Jay or one of our tutors.',
                  time: '30 minutes',
                },
                {
                  step: '2',
                  title: 'Assessment',
                  description: 'Your child takes a brief assessment to identify their current level and learning style.',
                  time: 'During consultation',
                },
                {
                  step: '3',
                  title: 'Program Selection',
                  description: 'We recommend the best program and schedule based on your needs and preferences.',
                  time: 'During consultation',
                },
                {
                  step: '4',
                  title: 'Start Learning',
                  description: 'Begin your first session! Your customized learning journey starts here.',
                  time: 'Within 48 hours',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-ujo-blue/30" />
                  )}

                  <div className="relative z-10 bg-ujo-white rounded-xl p-6 border-2 border-ujo-blue hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ujo-purple to-ujo-pink flex items-center justify-center text-white font-serif font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-ujo-text mb-2">{item.title}</h3>
                    <p className="text-sm text-ujo-text-light mb-3">{item.description}</p>
                    <p className="text-xs text-ujo-blue font-medium">⏱️ {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Happens After */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              What Happens After You Enroll
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: '📋',
                  title: 'Personalized Learning Plan',
                  description:
                    'You&apos;ll receive a detailed learning plan outlining your child&apos;s goals, curriculum, and expected outcomes.',
                  items: [
                    'Custom curriculum for your child',
                    'Clear learning milestones',
                    'Expected timeline',
                    'Performance benchmarks',
                  ],
                },
                {
                  icon: '🗓️',
                  title: 'Regular Sessions Begin',
                  description:
                    'Weekly tutoring sessions scheduled at times convenient for your family. Your tutor remains consistent for continuity.',
                  items: [
                    'Consistent tutor assignment',
                    'Flexible scheduling options',
                    'Reminder notifications',
                    'Session recordings available',
                  ],
                },
                {
                  icon: '📊',
                  title: 'Progress Monitoring',
                  description:
                    'Monthly progress reports keep you informed about your child&apos;s advancement and areas needing attention.',
                  items: [
                    'Monthly progress reports',
                    'Academic milestones tracked',
                    'Strength & growth areas identified',
                    'Quarterly parent-tutor meetings',
                  ],
                },
                {
                  icon: '💬',
                  title: 'Continuous Communication',
                  description:
                    'Open communication between parents, tutors, and students ensures everyone stays aligned on progress and goals.',
                  items: [
                    'Quick response to questions',
                    'Direct tutor access',
                    'Weekly feedback updates',
                    'Flexible adjustments to plan',
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="bg-ujo-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-ujo-text mb-3">{item.title}</h3>
                  <p className="text-ujo-text-light mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((subitem, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ujo-text-light">
                        <CheckCircle className="w-5 h-5 text-ujo-purple flex-shrink-0 mt-0.5" />
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-8 text-center">
              Start Your Enrollment
            </h2>

            <div className="bg-gradient-to-br from-ujo-blue to-ujo-blue/50 rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-serif font-bold text-ujo-text mb-2">
                  Registration Form
                </h3>
                <p className="text-ujo-text-light">
                  Complete this form to get started with Uncle Jay&apos;s Academy
                </p>
              </div>

              <div className="bg-ujo-white rounded-lg p-6 mb-6">
                <p className="text-center text-ujo-text-light mb-4">
                  Our enrollment form will be available shortly. In the meantime, you can:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/2349058324190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23c-1.524.846-2.859 2.04-3.852 3.476-.993 1.437-1.585 3.09-1.744 4.806-.159 1.716.13 3.433.95 5.009 1.62 3.12 5.082 5.241 8.927 5.241 1.35 0 2.663-.257 3.916-.76 1.253-.503 2.383-1.233 3.29-2.16.906-.927 1.608-2.026 2.064-3.255.456-1.229.669-2.544.602-3.85-.067-1.306-.357-2.582-.835-3.78-.478-1.198-1.152-2.296-2.002-3.23-.85-.934-1.878-1.696-3.03-2.24-1.152-.544-2.405-.832-3.68-.826zm11.212-1.664h-1.875v-4.25h1.875v4.25zm-2.812-4.25c-.412 0-.744.336-.744.751 0 .414.332.75.744.75s.744-.336.744-.75c0-.415-.332-.751-.744-.751z" />
                    </svg>
                    Chat with us on WhatsApp
                  </a>

                  <a
                    href="mailto:unclejaysacademy@gmail.com"
                    className="w-full flex items-center justify-center gap-3 bg-ujo-purple hover:bg-ujo-purple/80 text-ujo-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email us Your Details
                  </a>

                  <a
                    href="tel:+2349058324190"
                    className="w-full flex items-center justify-center gap-3 bg-ujo-gold hover:bg-ujo-gold/80 text-ujo-text font-semibold py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call us Today
                  </a>
                </div>
              </div>

              <p className="text-center text-sm text-ujo-text-light">
                Our team will guide you through the enrollment process and answer any questions you have.
              </p>
            </div>
          </div>
        </section>

        {/* Enrollment Requirements */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              What You&apos;ll Need
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📌',
                  title: 'Child&apos;s Information',
                  items: ['Full name', 'Age & grade level', 'School (if applicable)', 'Subjects of interest'],
                },
                {
                  icon: '👨‍👩‍👧',
                  title: 'Parent/Guardian Details',
                  items: ['Full name', 'Email address', 'Phone number', 'Preferred contact method'],
                },
                {
                  icon: '⏰',
                  title: 'Availability',
                  items: ['Your time zone', 'Preferred days & times', 'Number of sessions per week', 'Session duration'],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-ujo-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-ujo-text mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((subitem, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ujo-text-light">
                        <CheckCircle className="w-4 h-4 text-ujo-purple flex-shrink-0 mt-0.5" />
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Your Child&apos;s Success Journey Starts Now
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Don&apos;t wait! Schedule your free consultation today and take the first step toward academic excellence.
            </p>
            <button className="bg-ujo-white text-ujo-purple hover:bg-ujo-blue font-semibold px-8 py-3 rounded-lg transition-colors">
              Book Your Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
