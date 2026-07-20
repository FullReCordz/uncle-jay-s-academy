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
              Join hundreds of students already achieving academic excellence at Uncle Jay's Academy. The enrollment process is simple and takes just a few minutes.
            </p>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Our Enrollment Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  title: 'Student Profile',
                  description: "Complete your child's student profile with learning preferences and goals.",
                  time: 'Before first session',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-ujo-blue/30" />
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
                    "You'll receive a detailed learning plan outlining your child's goals, curriculum, and expected outcomes.",
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
                    "Monthly progress reports keep you informed about your child's advancement and areas needing attention.",
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

        {/* Step 1-3: Initial Consultation via WhatsApp */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-2 text-center">
              Steps 1-3: Book Your Consultation
            </h2>
            <p className="text-center text-ujo-text-light mb-8">
              Start your journey with a free 30-minute consultation. Click the button below to chat with our team on WhatsApp and schedule your consultation today.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20my%20child"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-12 py-4 rounded-lg transition-colors flex items-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23c-1.524.846-2.859 2.04-3.852 3.476-.993 1.437-1.585 3.09-1.744 4.806-.159 1.716.13 3.433.95 5.009 1.62 3.12 5.082 5.241 8.927 5.241 1.35 0 2.663-.257 3.916-.76 1.253-.503 2.383-1.233 3.29-2.16.906-.927 1.608-2.026 2.064-3.255.456-1.229.669-2.544.602-3.85-.067-1.306-.357-2.582-.835-3.78-.478-1.198-1.152-2.296-2.002-3.23-.85-.934-1.878-1.696-3.03-2.24-1.152-.544-2.405-.832-3.68-.826z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-center text-ujo-text-light text-sm">
              During this consultation, we'll discuss your child's needs, learning goals, and find the perfect program fit. Our team will also provide a brief assessment and personalized recommendations.
            </p>
          </div>
        </section>

        {/* Step 4: Student Profile Form */}
        <section className="py-16 md:py-24 bg-ujo-blue/10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-2 text-center">
              Step 4: Complete Your Child's Student Profile
            </h2>
            <p className="text-center text-ujo-text-light mb-8">
              After your consultation, complete this form to build your child's personalized student profile and learning preferences. This ensures we tailor the best experience for your child.
            </p>

            <iframe
              src="https://forms.gle/tMZzTXTXq4mupFpg9"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Student Profile Onboarding Form"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Enrollment Requirements */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              What You'll Need
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📌',
                  title: "Child's Information",
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
              Your Child's Success Journey Starts Now
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Don't wait! Schedule your free consultation today and take the first step toward academic excellence.
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
