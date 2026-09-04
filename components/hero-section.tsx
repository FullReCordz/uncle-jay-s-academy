import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_CONSULTATION_URL, YOUTUBE_CHANNEL_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-ujo-blue to-ujo-blue-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ujo-text mb-6 leading-tight">
              Raising Confident African Scholars for a Global Future
            </h1>
            <p className="text-lg text-ujo-text-light mb-2 leading-relaxed">
              Personalized virtual learning designed to help African children in the diaspora excel academically, build confidence, and stay connected to a culture of excellence.
            </p>
            <p className="text-lg font-semibold text-ujo-purple mb-8">
              Excellence through guided learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ujo-purple hover:bg-indigo-700 text-ujo-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                📅 Book a Free Consultation
              </a>
              <Link
                href="#programs"
                className="bg-ujo-gold hover:bg-amber-500 text-ujo-text font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                🎓 Enroll Your Child
              </Link>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ujo-purple font-semibold px-8 py-3 rounded-lg border-2 border-ujo-purple hover:bg-ujo-purple hover:text-ujo-white transition-colors text-center"
              >
                ▶️ Watch Testimonial
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 md:order-2">
            <div className="bg-ujo-white rounded-2xl shadow-2xl p-8 relative">
              <div className="aspect-video bg-gradient-to-br from-ujo-purple/20 to-ujo-gold/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/academy-entrance.jpeg"
                  alt="Children standing outside Uncle Jay's Academy"
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2 bg-ujo-blue rounded-full"></div>
                <div className="h-2 bg-ujo-blue rounded-full w-5/6"></div>
                <div className="h-2 bg-ujo-purple rounded-full w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
