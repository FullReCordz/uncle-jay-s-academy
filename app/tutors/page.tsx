import Header from '@/components/header'
import Footer from '@/components/footer'
import TutorProfile from '@/components/tutor-profile'

export default function TutorsPage() {
  return (
    <main>
      <Header />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-ujo-blue to-ujo-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-ujo-text mb-4">Meet Your Tutors</h1>
          <p className="text-lg text-ujo-text-light font-sans">
            Passionate educators who mentor as much as they teach
          </p>
        </div>
      </section>

      {/* Tutor Profiles */}
      <TutorProfile
        name="Babajide Oduga"
        role="Uncle Jay – Mathematics"
        image="/tutors/babajide-oduga.png"
        bio="Math tutor extraordinaire. An adaptable and fun educator with years of teaching and tutoring experience. Demonstrates strong communication, empathy, and a passion that enables him to connect with learners of diverse abilities and backgrounds. Driven by patience, professionalism, and a genuine passion for student growth."
      />

      <TutorProfile
        name="Abigeal Ogunlaja"
        role="Miss Abby – Mathematics"
        image="/tutors/abigeal-ogunlaja.png"
        reversed
        bio="A First-Class final-year Mathematics student with a strong passion for teaching and academic excellence. Has years of experience tutoring younger learners, helping them build a clear understanding of mathematical concepts. Her goal is to make mathematics simple, logical, and engaging while fostering confidence and a genuine interest in the subject."
      />

      <TutorProfile
        name="Deborah Adesile"
        role="Miss Queen – English"
        image="/tutors/deborah-adesile.png"
        bio="An English educator with over 10 years of experience teaching learners from preschool through advanced exams like SAT and IELTS. Her philosophy is simple: 'every student can thrive when learning is personal, practical, and inspiring.' She creates lessons that build fluency, confidence, and mastery, forming strong personal connections with every student to help them unlock their strengths."
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ujo-gold to-ujo-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-6">
            Ready to meet your child&apos;s tutor?
          </h2>
          <button className="bg-ujo-purple hover:bg-indigo-700 text-ujo-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors">
            Book a Trial Lesson
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
