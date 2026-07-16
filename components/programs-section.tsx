import Link from 'next/link'

export default function ProgramsSection() {
  const programs = [
    { name: 'Early Years', emoji: '🎨', color: 'from-pink-100 to-pink-50' },
    { name: 'Primary School', emoji: '📖', color: 'from-blue-100 to-blue-50' },
    { name: 'Junior Secondary', emoji: '🔬', color: 'from-purple-100 to-purple-50' },
    { name: 'Senior Secondary', emoji: '🎓', color: 'from-yellow-100 to-yellow-50' },
    { name: 'Homework Support', emoji: '✏️', color: 'from-green-100 to-green-50' },
    { name: 'Exam Preparation', emoji: '📝', color: 'from-red-100 to-red-50' },
    { name: 'Public Speaking', emoji: '🎤', color: 'from-orange-100 to-orange-50' },
  ]

  return (
    <section id="programs" className="py-20 bg-ujo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-4">Our Programs</h2>
          <p className="text-lg text-ujo-text-light">
            Comprehensive learning paths for every stage of your child&apos;s journey
          </p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${program.color} rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <div className="text-4xl mb-3">{program.emoji}</div>
              <p className="font-semibold text-ujo-text text-sm">{program.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-ujo-purple hover:bg-indigo-700 text-ujo-white font-semibold px-10 py-3 rounded-lg transition-colors"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
