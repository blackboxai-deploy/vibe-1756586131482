import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services & Solutions - Cloud, Consulting & Support | Sparkdim",
  description: "Comprehensive IT services including cloud solutions, system maintenance, IT consulting, and 24/7 technical support. Optimize your business technology infrastructure.",
  keywords: ["IT services", "cloud solutions", "IT consulting", "system maintenance", "technical support", "infrastructure"],
};

const services = [
  {
    title: "Cloud Solutions",
    description: "Migrate to the cloud and optimize your infrastructure for scalability, security, and cost-effectiveness.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "Backup Solutions", "Scalability Planning"],
    icon: "☁️"
  },
  {
    title: "IT Consulting",
    description: "Strategic IT guidance to align technology with your business goals and drive digital transformation.",
    features: ["Technology Strategy", "Digital Transformation", "System Architecture", "Best Practices"],
    icon: "💼"
  },
  {
    title: "System Maintenance",
    description: "Proactive monitoring and maintenance to keep your systems running smoothly and securely.",
    features: ["Performance Monitoring", "Security Updates", "Preventive Maintenance", "System Optimization"],
    icon: "🔧"
  },
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock technical support to resolve issues quickly and minimize business disruption.",
    features: ["Help Desk Support", "Remote Assistance", "Emergency Response", "Issue Resolution"],
    icon: "🆘"
  },
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Optimize your business technology with our comprehensive IT services. 
                From cloud solutions to 24/7 support, we keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                  <Link href="#contact">Get IT Support</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d552e3a6-2732-4e2d-94b7-9f322cfc847c.png"
                alt="IT services including cloud computing and server management solutions"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our IT <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Need IT Support?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Get reliable IT services and support to optimize your business technology infrastructure.
              </p>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}