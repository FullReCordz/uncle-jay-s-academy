import { ChevronRight } from 'lucide-react'

interface TutorProfileProps {
  name: string
  role: string
  bio: string
  image?: string
  reversed?: boolean
  emoji: string
}

export default function TutorProfile({
  name,
  role,
  bio,
  reversed = false,
  emoji,
}: TutorProfileProps) {
  return (
    <section className="py-16 bg-ujo-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>
          {/* Image/Illustration */}
          <div className={reversed ? 'md:order-2' : ''}>
            <div className="bg-gradient-to-br from-ujo-purple/20 to-ujo-gold/20 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-9xl">{emoji}</div>
            </div>
          </div>

          {/* Content */}
          <div className={reversed ? 'md:order-1' : ''}>
            <h3 className="font-serif text-4xl font-bold text-ujo-text mb-2">{name}</h3>
            <p className="text-ujo-purple font-semibold text-lg mb-6">{role}</p>
            <p className="text-ujo-text-light text-lg leading-relaxed mb-8 font-sans">
              {bio}
            </p>
            <div className="flex items-center text-ujo-purple font-semibold">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
