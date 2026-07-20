'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

const programs = [
  {
    name: 'Early Years (Ages 4-6)',
    color: 'from-ujo-blue to-ujo-blue-dark',
    icon: '🌱',
    description: 'Foundation learning through play and discovery',
    subjects: ['Reading Readiness', 'Early Numeracy', 'Language Development', 'Motor Skills'],
    outcomes: [
      'Build confidence in learning',
      'Develop love for reading',
      'Master basic numbers',
      'Cultivate curiosity',
    ],
    highlights: [
      'Playful, interactive lessons',
      'Focus on foundational skills',
      'Parent involvement encouraged',
    ],
  },
  {
    name: 'Primary Level (Ages 7-11)',
    color: 'from-ujo-purple to-ujo-pink',
    icon: '📚',
    description: 'Build strong academic foundations across all subjects',
    subjects: ['Mathematics', 'English', 'Science', 'Social Studies', 'Creative Arts'],
    outcomes: [
      'Excel in core academic subjects',
      'Develop critical thinking',
      'Build research skills',
      'Foster creativity',
    ],
    highlights: [
      'Comprehensive curriculum',
      'Interactive project-based learning',
      'Regular progress assessments',
    ],
  },
  {
    name: 'Secondary Level (Ages 12-18)',
    color: 'from-ujo-gold to-orange-500',
    icon: '🎓',
    description: 'Prepare for exams and university with expert guidance',
    subjects: [
      'Mathematics',
      'English Language & Literature',
      'Sciences',
      'History & Geography',
      'Languages',
    ],
    outcomes: [
      'Achieve top grades',
      'Prepare for standardized exams',
      'Build university-ready skills',
      'Develop leadership',
    ],
    highlights: [
      'Exam-focused strategies',
      'University preparation',
      'Subject specialization',
    ],
  },
  {
    name: 'Homework Support',
    color: 'from-blue-400 to-cyan-400',
    icon: '✏️',
    description: 'Daily homework help and assignment support',
    subjects: ['All Subjects', 'Assignment Guidance', 'Project Support', 'Exam Prep'],
    outcomes: [
      'Complete homework confidently',
      'Improve assignment quality',
      'Strengthen understanding',
      'Reduce study anxiety',
    ],
    highlights: [
      'Flexible scheduling',
      'Subject-specific help',
      'Quick turnaround',
    ],
  },
  {
    name: 'Exam Preparation',
    color: 'from-red-400 to-rose-400',
    icon: '🏆',
    description: 'Targeted prep for major exams and assessments',
    subjects: [
      'WAEC',
      'NECO',
      'JAMB',
      'SAT',
      'IGCSE',
      'IB',
      'A-Levels',
    ],
    outcomes: [
      'Achieve target grades',
      'Build exam confidence',
      'Master test strategies',
      'Score competitively',
    ],
    highlights: [
      'Past exam papers',
      'Timed practice tests',
      'Personalized weak areas focus',
    ],
  },
  {
    name: 'Public Speaking & Confidence',
    color: 'from-purple-400 to-fuchsia-400',
    icon: '🎤',
    description: 'Develop communication skills and self-confidence',
    subjects: [
      'Public Speaking',
      'Presentation Skills',
      'Communication',
      'Leadership',
    ],
    outcomes: [
      'Overcome speaking anxiety',
      'Deliver powerful presentations',
      'Build leadership presence',
      'Improve communication',
    ],
    highlights: [
      'Practical practice sessions',
      'Confidence coaching',
      'Real-world scenarios',
    ],
  },
  {
    name: 'Specialized Tutoring',
    color: 'from-green-400 to-emerald-400',
    icon: '🔬',
    description: 'One-on-one support for challenging subjects',
    subjects: [
      'Advanced Mathematics',
      'Sciences',
      'Languages',
      'Coding',
    ],
    outcomes: [
      'Master difficult concepts',
      'Improve grades significantly',
      'Build subject mastery',
      'Develop specialized skills',
    ],
    highlights: [
      'Expert tutors',
      'Customized pace',
      'Deep topic mastery',
    ],
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Our Programs & Courses
            </h1>
            <p className="text-lg text-ujo-text-light max-w-2xl">
              Comprehensive educational programs designed for every age and academic level. From early childhood development to university preparation, we have the right program for your child.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-ujo-white"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${program.color} p-6`}>
                    <div className="text-4xl mb-3">{program.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-ujo-white">
                      {program.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-ujo-text-light mb-6 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    {/* Subjects */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-ujo-text mb-3">
                        Subjects Offered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="inline-block bg-ujo-blue text-ujo-text text-xs px-3 py-1 rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-ujo-text mb-3">
                        Learning Outcomes:
                      </h4>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-2 text-xs text-ujo-text-light">
                            <span className="text-ujo-purple mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-ujo-text mb-3">
                        Program Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-ujo-text-light"
                          >
                            <span className="text-ujo-gold">★</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              How Our Programs Work
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: '1',
                  title: 'Free Consultation',
                  description: 'We start with a personalized consultation to understand your child\'s needs and goals.',
                },
                {
                  number: '2',
                  title: 'Assessment',
                  description: 'Our tutors assess your child\'s current level and identify areas for growth.',
                },
                {
                  number: '3',
                  title: 'Customized Plan',
                  description: 'We create a tailored learning plan with specific goals and timelines.',
                },
                {
                  number: '4',
                  title: 'Regular Progress',
                  description: 'Weekly sessions with monthly progress reports shared with parents.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-ujo-purple to-ujo-pink flex items-center justify-center text-2xl font-serif font-bold text-ujo-white">
                    {item.number}
                  </div>
                  <h3 className="font-semibold text-ujo-text mb-2">{item.title}</h3>
                  <p className="text-sm text-ujo-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Options */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-text mb-12 text-center">
              Flexible Learning Options
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'One-on-One Sessions',
                  description:
                    'Personalized 1:1 tutoring for maximum attention and customized learning',
                  icon: '👨‍🏫',
                },
                {
                  title: 'Small Group Classes',
                  description:
                    'Collaborative learning in small groups (2-4 students) with peer interaction',
                  icon: '👥',
                },
                {
                  title: 'Flexible Scheduling',
                  description:
                    'Sessions available across all time zones with flexible booking options',
                  icon: '⏰',
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-ujo-white border-2 border-ujo-blue rounded-xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-ujo-text mb-3">
                    {option.title}
                  </h3>
                  <p className="text-ujo-text-light">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Find the Perfect Program for Your Child
            </h2>
            <p className="text-ujo-white mb-8 text-lg">
              Book a free consultation to discuss which program best suits your child's needs.
            </p>
            <a
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I'd%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20programs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ujo-white text-ujo-purple hover:bg-ujo-blue font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Schedule Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
