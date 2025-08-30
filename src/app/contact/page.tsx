import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Sparkdim - Get in Touch for IT Services & Digital Solutions",
  description: "Contact Sparkdim for professional IT services, website development, digital marketing, and app development. Get your free consultation today and transform your business.",
  keywords: ["contact sparkdim", "IT services consultation", "website development quote", "digital marketing contact"],
};

const contactInfo = [
  {
    title: "Phone",
    value: "+1 (555) SPARKDIM",
    description: "Call us for immediate assistance",
    icon: "📞"
  },
  {
    title: "Email",
    value: "hello@sparkdim.com",
    description: "Send us your project details",
    icon: "✉️"
  },
  {
    title: "Address",
    value: "123 Tech Street, Digital City, DC 12345",
    description: "Visit our modern office space",
    icon: "📍"
  },
  {
    title: "Hours",
    value: "Mon-Fri: 9AM-6PM EST",
    description: "We're here when you need us",
    icon: "🕐"
  },
];

const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer: "Most website projects take 4-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support to keep your digital assets running smoothly."
  },
  {
    question: "Can you work with our existing team and systems?",
    answer: "Absolutely. We're experienced in collaborating with internal teams and integrating with existing systems, APIs, and workflows to enhance rather than disrupt your current operations."
  },
  {
    question: "What's included in your digital marketing services?",
    answer: "Our digital marketing services include SEO, PPC advertising, social media marketing, content creation, email campaigns, and detailed analytics reporting with monthly strategy reviews."
  },
  {
    question: "Do you offer fixed-price or hourly billing?",
    answer: "We offer both models depending on project scope. Fixed-price for well-defined projects, and hourly for ongoing work or projects with evolving requirements. We'll recommend the best approach for your needs."
  },
];

const offices = [
  {
    city: "New York",
    address: "123 Tech Street, Digital City, DC 12345",
    phone: "+1 (555) 123-4567",
    email: "ny@sparkdim.com"
  },
  {
    city: "San Francisco",
    address: "456 Innovation Ave, Silicon Valley, CA 94105",
    phone: "+1 (555) 987-6543", 
    email: "sf@sparkdim.com"
  },
  {
    city: "London",
    address: "789 Technology Lane, London, UK EC1A 1BB",
    phone: "+44 20 7123 4567",
    email: "london@sparkdim.com"
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to transform your business with innovative digital solutions? 
              Get in touch with our expert team for a free consultation and discover 
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We'd love to hear about your project. Choose the best way to reach us and 
                  we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                    <CardContent className="p-6">
                      <div className="text-2xl mb-3">{info.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <div className="text-blue-600 font-medium mb-2">{info.value}</div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">10+ years of proven experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">500+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">24/7 ongoing support and maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Transparent pricing and communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With offices around the world, we're always close by to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.city} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 mt-1">📍</span>
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">📞</span>
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">✉️</span>
                      <span>{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quick answers to questions you might have about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to meet you in person. Schedule a visit to our main office.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-500">123 Tech Street, Digital City, DC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}