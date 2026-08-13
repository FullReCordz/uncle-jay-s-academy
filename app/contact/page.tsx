import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ujo-blue to-ujo-blue-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ujo-text mb-6">
              Get in Touch
            </h1>

            <p className="text-lg text-ujo-text-light max-w-2xl">
              Have questions about our programs? Want to schedule a consultation? We&apos;re here to help and would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-4 gap-8 mb-16">

              {/* Email */}
              <div className="bg-ujo-blue rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-ujo-purple rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-ujo-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-ujo-text mb-2">
                  Email
                </h3>

                <a
                  href="mailto:unclejaysacademy@gmail.com"
                  className="text-ujo-text-light hover:text-ujo-purple transition-colors break-all"
                >
                  unclejaysacademy@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-ujo-blue rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-ujo-gold rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-ujo-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-ujo-text mb-2">
                  Phone
                </h3>

                <a
                  href="tel:+2349058324190"
                  className="text-ujo-text-light hover:text-ujo-gold transition-colors"
                >
                  +234 (0) 905-832-4190
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-ujo-blue rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">◉</span>
                  </div>
                </div>

                <h3 className="font-semibold text-ujo-text mb-2">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/2349058324190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ujo-text-light hover:text-green-600 transition-colors"
                >
                  Start a Chat
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-ujo-blue rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-ujo-pink rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-ujo-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-ujo-text mb-2">
                  Office Hours
                </h3>

                <p className="text-sm text-ujo-text-light">
                  Mon–Fri: 8AM–8PM
                  <br />
                  Sat: 10AM–6PM
                  <br />
                  Sun: 2PM–6PM
                </p>
              </div>

            </div>

            {/* Contact Form + FAQ */}
            <div className="grid md:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-ujo-text mb-6">
                  Send us a Message
                </h2>

                <iframe
                  src="https://tally.so/embed/dW1x5y"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                  className="rounded-lg"
                />
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-ujo-text mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: 'What is the first step to get started?',
                      a: "Simply contact us via email, phone, or WhatsApp to schedule a free consultation. Our team will discuss your child's needs and recommend the best program.",
                    },
                    {
                      q: 'Are there trial lessons available?',
                      a: 'Yes! We offer a free consultation and can arrange a trial session for your child to experience our teaching style.',
                    },
                    {
                      q: 'What time zones do you cover?',
                      a: 'We serve students across multiple time zones from Europe to Asia. We have flexible scheduling to accommodate different regions.',
                    },
                    {
                      q: 'How often should my child have lessons?',
                      a: "This depends on your goals. We typically recommend 2-4 sessions per week, but we customize the frequency based on your child's needs.",
                    },
                    {
                      q: 'What if I have more questions?',
                      a: 'Feel free to reach out anytime. Our team is here to answer all your questions. You can contact us via email, phone, or WhatsApp.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-ujo-blue rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-ujo-text mb-2">
                        {item.q}
                      </h3>

                      <p className="text-sm text-ujo-text-light leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-ujo-blue/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-ujo-text mb-8 text-center">
              Serving Students Worldwide
            </h2>

            <div className="bg-gray-300 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>

                <p className="text-gray-600 font-medium">
                  Interactive map coming soon
                  <br />
                  <span className="text-sm">
                    Serving 12+ countries across Africa and the diaspora
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-ujo-purple via-ujo-gold to-ujo-pink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ujo-white mb-6">
              Ready to Start Your Journey?
            </h2>

            <p className="text-ujo-white mb-8 text-lg">
              Reach out today and let&apos;s discuss how Uncle Jay&apos;s Academy can help your child succeed.
            </p>

            <a
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay%27s%20Academy,%20I%20have%20questions%20and%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ujo-white text-ujo-purple hover:bg-ujo-blue font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Book Your Free Consultation
            </a>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}