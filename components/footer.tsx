'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Play } from 'lucide-react'
import { YOUTUBE_CHANNEL_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-ujo-blue py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="/uja-logo.png"
              alt="Uncle Jay's Academy"
              width={180}
              height={80}
              sizes="180px"
              className="h-16 w-auto object-contain object-left mb-4"
            />
            <p className="text-ujo-text-light text-sm">
              Excellence through guided learning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-ujo-text mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-ujo-text-light hover:text-ujo-text">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ujo-text-light hover:text-ujo-text">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-ujo-text-light hover:text-ujo-text">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="text-ujo-text-light hover:text-ujo-text">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-ujo-text-light hover:text-ujo-text">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-ujo-text-light hover:text-ujo-text">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ujo-text-light hover:text-ujo-text">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-ujo-text mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-ujo-text-light">
                <Phone className="w-4 h-4" />
                <a href="tel:+2348031659857" className="hover:text-ujo-text">
                  +234 803 165 9857
                </a>
              </div>
              <div className="flex items-center gap-2 text-ujo-text-light">
                <Mail className="w-4 h-4" />
                <a href="mailto:unclejaysacademy@gmail.com" className="hover:text-ujo-text">
                  unclejaysacademy@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-ujo-text mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-ujo-text hover:text-ujo-purple transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <span className="w-5 h-5 inline-flex items-center justify-center rounded-sm border border-current text-xs font-bold" aria-hidden="true">
                  in
                </span>
              </a>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ujo-text hover:text-ujo-purple transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <span className="w-5 h-5 inline-flex items-center justify-center rounded-sm border border-current" aria-hidden="true">
                  <Play className="w-3 h-3 fill-current" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ujo-blue-dark pt-8">
          <p className="text-center text-sm text-ujo-text-light">
            © 2024 Uncle Jay's Academy. All rights reserved. Excellence through guided learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
