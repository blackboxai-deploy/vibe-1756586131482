import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Game Development Services - Mobile & Web Games | Sparkdim",
  description: "Professional game development services for mobile, web, and PC platforms. Create engaging games with stunning graphics and immersive gameplay experiences.",
  keywords: ["game development", "mobile games", "web games", "Unity", "game design", "2D games", "3D games"],
};

const services = [
  {
    title: "Mobile Game Development",
    description: "Engaging mobile games for iOS and Android with addictive gameplay and monetization strategies.",
    features: ["iOS & Android", "In-App Purchases", "Ad Integration", "Social Features"],
    icon: "🎮"
  },
  {
    title: "Web-Based Games", 
    description: "Browser-based games using HTML5, WebGL, and modern web technologies for cross-platform play.",
    features: ["HTML5/WebGL", "Cross-Browser", "Responsive Design", "Real-time Multiplayer"],
    icon: "🌐"
  },
  {
    title: "2D Game Development",
    description: "Beautiful 2D games with stunning artwork, smooth animations, and engaging gameplay mechanics.",
    features: ["Custom Art Assets", "Smooth Animations", "Physics Integration", "Level Design"],
    icon: "🎨"
  },
  {
    title: "3D Game Development",
    description: "Immersive 3D gaming experiences with realistic graphics and advanced gameplay systems.",
    features: ["3D Modeling", "Advanced Physics", "Lighting Systems", "Character Animation"],
    icon: "🕹️"
  },
];

export default function GameDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Create Amazing <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Games</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bring your game ideas to life with our expert game development team. 
                From concept to launch, we create engaging experiences that players love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white">
                  <Link href="#contact">Start Your Game</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9e56643-443a-4408-b7d6-c480ef82b7aa.png"
                alt="Game development process showing mobile and web gaming interface"
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
              Our Game Development <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3"></div>
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

      <section id="contact" className="py-20 bg-gradient-to-br from-pink-900 via-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Create Your Game?
              </h2>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Let's bring your gaming vision to life with professional game development services.
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