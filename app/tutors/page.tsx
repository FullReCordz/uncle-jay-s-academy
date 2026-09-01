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
          <h1 className="font-serif text-5xl font-bold text-ujo-text mb-4">Meet Our Lead Tutors</h1>
          <p className="text-lg text-ujo-text-light font-sans">
            Passionate educators who mentor as much as they teach
          </p>
        </div>
      </section>

      {/* Tutor Profiles */}
      <TutorProfile
        name="Babajide Oduga"
        role="Mathematics"
        image="/tutors/babajide-oduga.png"
        bio="Math tutor extraordinaire. An adaptable and fun educator with years of teaching and tutoring experience. Demonstrates strong communication, empathy, and a passion that enables him to connect with learners of diverse abilities and backgrounds. Driven by patience, professionalism, and a genuine passion for student growth."
      />

      <TutorProfile
        name="Deborah Adesile"
        role="English"
        image="/tutors/deborah-adesile.png"
        bio="An English educator with over 10 years of experience teaching learners from preschool through advanced exams like SAT and IELTS. Her philosophy is simple: 'every student can thrive when learning is personal, practical, and inspiring.' She creates lessons that build fluency, confidence, and mastery, forming strong personal connections with every student to help them unlock their strengths."
      />

      <TutorProfile
        name="Faleti Iretioluwa"
        role="Sciences"
        bio="Mr. Ireti is a seasoned Physics and Chemistry teacher with nearly 14 years of experience. He believes that digital technology is an effective medium for facilitating learning and is passionate about the teaching and learning process."
      />

      <TutorProfile
        name="Akinyemi Paul"
        role="Arts"
        reversed
        bio=""
      />

      <TutorProfile
        name="David Ajayi"
        role="Information & Technology"
        bio=""
      />

      <TutorProfile
        name="Ajose Deji"
        role="Architectural Design"
        reversed
        bio=""
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ujo-gold to-ujo-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-ujo-text mb-6">
            Ready to meet your child's tutor?
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
