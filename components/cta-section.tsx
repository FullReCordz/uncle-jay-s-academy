import { LINKEDIN_URL } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-ujo-gold to-ujo-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl font-bold text-ujo-text mb-6">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-ujo-text mb-8 max-w-2xl mx-auto">
          Connect with us and become part of a growing network of families dedicated to academic excellence and cultural pride.
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ujo-purple hover:bg-indigo-700 text-ujo-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Link-Edu-In
        </a>
      </div>
    </section>
  )
}
