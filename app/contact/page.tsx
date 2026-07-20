import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

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
              Have questions about our programs? Want to schedule a consultation? We're here to help and would love to hear from you.
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
                <h3 className="font-semibold text-ujo-text mb-2">Email</h3>
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
                <h3 className="font-semibold text-ujo-text mb-2">Phone</h3>
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
                    <svg className="w-6 h-6 text-ujo-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.23c-1.524.846-2.859 2.04-3.852 3.476-.993 1.437-1.585 3.09-1.744 4.806-.159 1.716.13 3.433.95 5.009 1.62 3.12 5.082 5.241 8.927 5.241 1.35 0 2.663-.257 3.916-.76 1.253-.503 2.383-1.233 3.29-2.16.906-.927 1.608-2.026 2.064-3.255.456-1.229.669-2.544.602-3.85-.067-1.306-.357-2.582-.835-3.78-.478-1.198-1.152-2.296-2.002-3.23-.85-.934-1.878-1.696-3.03-2.24-1.152-.544-2.405-.832-3.68-.826zm11.212-1.664h-1.875v-4.25h1.875v4.25zm-2.812-4.25c-.412 0-.744.336-.744.751 0 .414.332.75.744.75s.744-.336.744-.75c0-.415-.332-.751-.744-.751z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-ujo-text mb-2">WhatsApp</h3>
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
                <h3 className="font-semibold text-ujo-text mb-2">Office Hours</h3>
                <p className="text-sm text-ujo-text-light">
                  Mon-Fri: 3PM - 9PM WAT<br />
                  Sat: 10AM - 6PM WAT<br />
                  Sun: 2PM - 7PM WAT
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form - Tally Embed */}
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
                      q: 'Do you offer group classes?',
                      a: 'Yes! We offer both one-on-one tutoring and small group classes (2-4 students) depending on your preference.',
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
                      <h3 className="font-semibold text-ujo-text mb-2">{item.q}</h3>
                      <p className="text-sm text-ujo-text-light leading-relaxed">{item.a}</p>
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
                  Interactive map coming soon<br />
                  <span className="text-sm">Serving 12+ countries across Africa and the diaspora</span>
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
              Reach out today and let's discuss how Uncle Jay's Academy can help your child succeed.
            </p>
            <a
              href="https://wa.me/2349058324190?text=Hi%20Uncle%20Jay's%20Academy,%20I%20have%20questions%20and%20would%20like%20to%20book%20a%20free%20consultation"
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
