'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExploreOpen, setIsExploreOpen] = useState(false)

  const exploreItems = [
    { label: 'About Us', href: '#about', description: 'Our story, mission, and values' },
    { label: 'Programs/Courses', href: '#programs', description: 'Explore all subjects and learning tracks' },
    { label: 'Enroll', href: '#enroll', description: "Start your child's learning journey" },
    { label: 'Tutors', href: '/tutors', description: 'Meet the educators behind UJA' },
    { label: 'Testimonials', href: '#testimonials', description: 'Hear from our parents and students' },
    { label: 'FAQ', href: '#faq', description: 'Answers to common questions' },
    { label: 'Contact', href: '#contact', description: 'Get in touch with our team' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-ujo-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-xl font-serif font-bold text-ujo-text">
                Uncle Jay&apos;s
              </div>
              <div className="text-xl font-serif font-bold">
                <span className="text-ujo-purple">A</span>
                <span className="text-ujo-gold">c</span>
                <span className="text-ujo-pink">a</span>
                <span className="text-ujo-purple">d</span>
                <span className="text-ujo-gold">e</span>
                <span className="text-ujo-pink">m</span>
                <span className="text-ujo-purple">y</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-ujo-text font-medium hover:text-ujo-blue-dark">
                Home
              </Link>

              {/* Explore Mega Menu */}
              <div className="relative group">
                <button className="text-ujo-text font-medium hover:text-ujo-blue-dark py-2">
                  Explore
                </button>
                <div className="absolute left-0 mt-0 w-96 bg-ujo-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 border border-gray-100">
                  <div className="grid gap-3">
                    {exploreItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-3 hover:bg-ujo-blue rounded-lg transition-colors"
                      >
                        <div className="font-medium text-ujo-text text-sm">{item.label}</div>
                        <div className="text-xs text-ujo-text-light">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button className="bg-ujo-blue hover:bg-ujo-blue-dark text-ujo-text font-medium px-6 py-2 rounded-lg transition-colors">
                Book a Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-ujo-text" />
              ) : (
                <Menu className="w-6 h-6 text-ujo-text" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <Link href="/" className="block py-2 text-ujo-text font-medium">
                Home
              </Link>
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="w-full text-left py-2 text-ujo-text font-medium flex justify-between items-center"
              >
                Explore
              </button>
              {isExploreOpen && (
                <div className="pl-4 space-y-2">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-sm text-ujo-text-light"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              <button className="w-full mt-4 bg-ujo-blue hover:bg-ujo-blue-dark text-ujo-text font-medium px-6 py-2 rounded-lg transition-colors">
                Book a Free Consultation
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905-832-4190"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23c-1.524.846-2.859 2.04-3.852 3.476-.993 1.437-1.585 3.09-1.744 4.806-.159 1.716.13 3.433.95 5.009 1.62 3.12 5.082 5.241 8.927 5.241 1.35 0 2.663-.257 3.916-.76 1.253-.503 2.383-1.233 3.29-2.16.906-.927 1.608-2.026 2.064-3.255.456-1.229.669-2.544.602-3.85-.067-1.306-.357-2.582-.835-3.78-.478-1.198-1.152-2.296-2.002-3.23-.85-.934-1.878-1.696-3.03-2.24-1.152-.544-2.405-.832-3.68-.826zm11.212-1.664h-1.875v-4.25h1.875v4.25zm-2.812-4.25c-.412 0-.744.336-.744.751 0 .414.332.75.744.75s.744-.336.744-.75c0-.415-.332-.751-.744-.751z" />
        </svg>
      </a>
    </>
  )
}
