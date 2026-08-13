export default function WhyUJASection() {
  const benefits = [
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description:
        "Classes fit your family's schedule with flexible learning times across different time zones.",
    },
    {
      icon: '👩‍🏫',
      title: 'Expert Passionate Tutors',
      description:
        "Experienced educators who genuinely care about every child's academic success.",
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description:
        'Every learner receives a customized learning experience tailored to their strengths and goals.',
    },
    {
      icon: '🤝',
      title: 'Safe Supportive Environment',
      description:
        'Students learn in a calm, encouraging environment that builds confidence.',
    },
  ]

  return (
    <section className="py-20 bg-ujo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-4">
            Why Families Choose Uncle Jay's Academy
          </h2>
          <p className="text-lg text-ujo-text-light">
            We believe every child deserves excellence, confidence, and cultural connection
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-ujo-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-ujo-blue"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="font-serif font-bold text-lg text-ujo-text mb-3">{benefit.title}</h3>
              <p className="text-ujo-text-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
