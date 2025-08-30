import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS & Android Apps | Sparkdim",
  description: "Professional mobile app development for iOS and Android. Custom native and cross-platform apps with stunning UI/UX design. Transform your business idea into a powerful mobile app.",
  keywords: ["mobile app development", "iOS app development", "Android app development", "cross-platform apps", "React Native", "Flutter"],
};

const services = [
  {
    title: "Native iOS Development",
    description: "High-performance iOS apps built with Swift and Objective-C for optimal user experience on Apple devices.",
    features: ["Swift & Objective-C", "App Store Optimization", "iOS Design Guidelines", "Performance Optimization"],
    icon: "📱"
  },
  {
    title: "Native Android Development",
    description: "Feature-rich Android apps using Kotlin and Java that leverage the full power of the Android platform.",
    features: ["Kotlin & Java", "Material Design", "Google Play Store", "Multi-device Support"],
    icon: "🤖"
  },
  {
    title: "Cross-Platform Development",
    description: "Cost-effective apps that work seamlessly across iOS and Android using React Native and Flutter.",
    features: ["React Native", "Flutter", "Shared Codebase", "Faster Development"],
    icon: "🔄"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging mobile app designs that provide exceptional user experiences and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    icon: "🎨"
  },
];

const appTypes = [
  {
    category: "Business Apps",
    description: "Enterprise and business applications for productivity and efficiency",
    examples: ["CRM Apps", "Inventory Management", "Team Collaboration", "Project Management"]
  },
  {
    category: "E-commerce Apps", 
    description: "Shopping and marketplace applications with payment integration",
    examples: ["Online Stores", "Marketplace Apps", "Payment Systems", "Order Tracking"]
  },
  {
    category: "Social Apps",
    description: "Social networking and communication applications",
    examples: ["Chat Applications", "Social Networks", "Dating Apps", "Community Platforms"]
  },
  {
    category: "Entertainment Apps",
    description: "Media and entertainment applications for content consumption",
    examples: ["Streaming Apps", "Music Players", "Photo/Video Apps", "News Apps"]
  },
];

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Ideas into <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Mobile Apps</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create powerful mobile applications that engage users, drive business growth, 
                and deliver exceptional experiences across iOS and Android platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white">
                  <Link href="#contact">Start Your App</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9086f3cf-fc0c-46df-b39a-b66c3f56b6cc.png"
                  alt="Mobile app development process showing iOS and Android app design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our App Development <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to App Store, we deliver mobile applications that users love and businesses depend on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-indigo-200">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full mr-3"></div>
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

      {/* App Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Apps <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">We Build</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We specialize in various app categories to meet your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type) => (
              <Card key={type.category} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-indigo-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.category}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example) => (
                      <div key={example} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full mr-3"></div>
                        <span className="text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Development <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A proven methodology that ensures successful app delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery & Planning", description: "Understanding your requirements and creating a detailed project roadmap." },
              { step: "2", title: "Design & Prototyping", description: "Creating intuitive UI/UX designs and interactive prototypes." },
              { step: "3", title: "Development & Testing", description: "Building the app with rigorous testing at every stage." },
              { step: "4", title: "Launch & Support", description: "App store deployment and ongoing maintenance support." }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Your App?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Turn your app idea into reality with our expert development team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free app concept consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>UI/UX design mockups included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>App Store submission support</span>
                </div>
              </div>
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