'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqCategories = [
  {
    title: 'About Uncle Jay\'s Academy',
    items: [
      {
        q: 'What is Uncle Jay\'s Academy?',
        a: 'Uncle Jay\'s Academy is a virtual tutoring platform specializing in personalized education for African children in the diaspora. We combine rigorous academics with cultural awareness and confidence-building to help students excel.',
      },
      {
        q: 'Who is Uncle Jay?',
        a: 'Uncle Jay (Babajide Oduga) is our founder and lead tutor with over 9 years of experience in online tutoring. He\'s passionate about empowering African youth and helping them succeed academically.',
      },
      {
        q: 'Where are you located?',
        a: 'We operate globally and serve students across 12+ countries. All lessons are conducted online via video conferencing, making us accessible from anywhere in the world.',
      },
      {
        q: 'Is the academy accredited?',
        a: 'Our tutoring complements formal schooling and prepares students for international exams. We follow global curriculum standards and prepare students for WAEC, NECO, JAMB, SAT, IGCSE, IELTS, and A-Levels.',
      },
    ],
  },
  {
    title: 'Lessons & Classes',
    items: [
      {
        q: 'What age groups do you serve?',
        a: 'We work with children aged 4 to 18, covering early years, primary, secondary, and exam preparation levels. We have specialized programs for each age group.',
      },
      {
        q: 'What subjects do you offer?',
        a: 'We offer tutoring in Mathematics, English, Sciences (Physics, Chemistry, Biology), Social Studies, Languages, and more. Each program can be customized based on your child\'s needs.',
      },
      {
        q: 'How long are the lessons?',
        a: 'Standard lessons are 60 minutes, though we can arrange 45-minute or 90-minute sessions based on your preference. Trial lessons are 15 minutes.',
      },
      {
        q: 'How often should my child have lessons?',
        a: 'We recommend 2-4 sessions per week depending on your child\'s goals and level. The frequency can be adjusted based on progress and needs.',
      },
      {
        q: 'What is your teaching method?',
        a: 'We use a student-centered approach combining personalized curriculum, interactive activities, real-world problem-solving, and consistent feedback. Each lesson is tailored to the individual learner.',
      },
    ],
  },
  {
    title: 'Pricing & Payments',
    items: [
      {
        q: 'How much does tutoring cost?',
        a: 'Pricing varies depending on the program, tutor level, and frequency of sessions. We offer competitive rates and flexible packages. Contact us for specific pricing details.',
      },
      {
        q: 'Is there a discount for multiple sessions per week?',
        a: 'Yes! We offer package discounts for students booking multiple sessions per week. Longer-term commitments also receive special rates.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept online payment and or bank transfer to the designated official account. Details will be provided during enrollment.',
      },
      {
        q: 'Is there a cancellation or refund policy?',
        a: 'We have a flexible cancellation policy. Sessions cancelled 24 hours in advance can be rescheduled. Please contact us for full details about our refund policy.',
      },
    ],
  },
  {
    title: 'Scheduling & Technology',
    items: [
      {
        q: 'What time zones do you cover?',
        a: 'We serve students across multiple time zones from Europe to Asia. Our scheduling is flexible to accommodate different regions.',
      },
      {
        q: 'What technology do we use for lessons?',
        a: 'We use secure video conferencing platforms like Zoom or Google Meet. All you need is a reliable internet connection and a device (laptop, tablet, or phone).',
      },
      {
        q: 'What if I have internet connection issues?',
        a: 'We reschedule the session at no charge if connection issues prevent the lesson from proceeding. We\'re flexible and work with you to ensure continuity.',
      },
      {
        q: 'Can I reschedule a lesson?',
        a: 'Yes! We offer flexible rescheduling. We ask for 24 hours notice when possible, but we\'re usually accommodating for unexpected circumstances.',
      },
    ],
},
  {
    title: 'Enrollment & Getting Started',
    items: [
      {
        q: 'What is the first step to get started?',
        a: 'Contact us to schedule a free 30-minute consultation. During this call, we\'ll discuss your child\'s needs, learning style, and goals, then recommend the best program.',
      },
      {
        q: 'Is there a trial lesson?',
        a: 'Yes! After your consultation, we can arrange a trial session so your child experiences our teaching style before committing.',
      },
      {
        q: 'What do I need for enrollment?',
        a: 'You\'ll need your child\'s basic information (name, age, grade), your contact details, and preferred scheduling. We handle the rest!',
      },
      {
        q: 'How quickly can we start?',
        a: 'We typically can start within 48 hours of completing enrollment. For urgent requests, we\'ll do our best to accommodate faster scheduling.',
      },
      {
        q: 'Is there a minimum commitment period?',
        a: 'We recommend at least a 4-week commitment to see meaningful progress. However, we discuss the best timeline during your consultation.',
      },
    ],
  },
  {
    title: 'Academic Support',
    items: [
      {
        q: 'Can you help with exam preparation?',
        a: 'Absolutely! We specialize in exam prep for WAEC, NECO, JAMB, SAT, IGCSE, IELTS, and A-Levels. We provide focused strategies, past papers, and practice tests.',
      },
      {
        q: 'What if my child is falling behind?',
        a: 'We create a targeted plan to address learning gaps. Our tutors work at your child\'s pace and focus on building foundational understanding.',
      },
      {
        q: 'How is progress tracked?',
        a: 'We provide monthly progress reports, track academic milestones, and conduct quarterly parent-tutor meetings. Regular feedback keeps everyone informed.',
      },
      {
        q: 'Can tutoring help with confidence?',
        a: 'Yes! Building confidence is a core focus. Through personalized support, cultural celebration, and celebrating wins, students develop stronger self-belief.',
      },
      {
        q: 'What if my child needs special support?',
        a: 'We work with students at all levels, including those needing additional support. Please discuss any specific needs during your consultation.',
      },
    ],
  },
  {
    title: 'Parents & Communication',
    items: [
      {
        q: 'How often do parents get updates?',
        a: 'You receive monthly progress reports, weekly feedback updates, and have direct access to your tutor for questions. Quarterly meetings are also scheduled.',
      },
      {
        q: 'Can parents observe lessons?',
        a: 'Yes, parents can observe lessons if desired. Many parents choose to sit in occasionally to see their child in action.',
      },
      {
        q: 'How can I stay involved in my child\'s learning?',
        a: 'We encourage parent involvement! You can review lesson recordings, practice with your child, and work with our tutors to reinforce learning at home.',
      },
      {
        q: 'What if I have concerns about progress?',
        a: 'Please reach out immediately! We take concerns seriously and will work together to adjust the plan, approach, or goals as needed.',
      },
    ],
  },
]

function FAQAccordion({ item }: { item: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-start bg-ujo-white hover:bg-ujo-blue/5 transition-colors text-left"
      >
        <span className="font-semibold text-ujo-text pr-4">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-ujo-purple flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-ujo-blue/5 border-t border-gray-200">
          <p className="text-ujo-text-light leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-ujo-text-light max-w-2xl">
              Find answers to common questions about our programs, enrollment, and how we help students succeed.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-ujo-text mb-8 pb-4 border-b-2 border-ujo-blue">
                    {category.title}
                  </h2>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <FAQAccordion key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-6">
              Still Have Questions?
            </h2>
            <p className="text-ujo-text-light text-lg mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349058324190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23c-1.524.846-2.859 2.04-3.852 3.476-.993 1.437-1.585 3.09-1.744 4.806-.159 1.716.13 3.433.95 5.009 1.62 3.12 5.082 5.241 8.927 5.241 1.35 0 2.663-.257 3.916-.76 1.253-.503 2.383-1.233 3.29-2.16.906-.927 1.608-2.026 2.064-3.255.456-1.229.669-2.544.602-3.85-.067-1.306-.357-2.582-.835-3.78-.478-1.198-1.152-2.296-2.002-3.23-.85-.934-1.878-1.696-3.03-2.24-1.152-.544-2.405-.832-3.68-.826zm11.212-1.664h-1.875v-4.25h1.875v4.25zm-2.812-4.25c-.412 0-.744.336-.744.751 0 .414.332.75.744.75s.744-.336.744-.75c0-.415-.332-.751-.744-.751z" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href="mailto:unclejaysacademy@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-ujo-purple hover:bg-ujo-purple/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Book your free consultation today and let&apos;s discuss how we can help your child excel.
            </p>
            <a
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I%20have%20reviewed%20your%20FAQ%20and%20would%20like%20to%20book%20a%20free%20consultation"
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
