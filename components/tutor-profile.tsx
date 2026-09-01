import Image from 'next/image'

interface TutorProfileProps {
  name: string
  role: string
  bio: string
  image?: string
  reversed?: boolean
}

export default function TutorProfile({
  name,
  role,
  bio,
  image,
  reversed = false,
}: TutorProfileProps) {
  return (
    <section className="py-16 bg-ujo-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>
          {/* Image */}
          <div className={reversed ? 'md:order-2' : ''}>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : null}
            </div>
          </div>

          {/* Content */}
          <div className={reversed ? 'md:order-1' : ''}>
            <h3 className="font-serif text-4xl font-bold text-ujo-text mb-2">{name}</h3>
            <p className="text-ujo-purple font-semibold text-lg mb-6">{role}</p>
            <p className="text-ujo-text-light text-lg leading-relaxed mb-8 font-sans">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
