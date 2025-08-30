import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Services - Custom Web Solutions | Sparkdim",
  description: "Professional website development services including responsive design, e-commerce solutions, CMS development, and modern web applications. Get your custom website built by experts.",
  keywords: ["website development", "web development", "responsive design", "e-commerce", "CMS", "web applications"],
};

const technologies = [
  { name: "React.js", description: "Modern frontend framework for dynamic user interfaces" },
  { name: "Next.js", description: "Full-stack React framework with SEO optimization" },
  { name: "Node.js", description: "Scalable backend development with JavaScript" },
  { name: "WordPress", description: "Flexible content management system" },
  { name: "Shopify", description: "E-commerce platform for online stores" },
  { name: "PHP", description: "Server-side scripting for web applications" },
];

const services = [
  {
    title: "Custom Website Development",
    description: "Tailor-made websites built from scratch to match your unique business requirements and brand identity.",
    features: ["Custom Design", "Scalable Architecture", "Performance Optimized", "SEO Ready"]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment gateways and inventory management systems.",
    features: ["Shopping Cart", "Payment Integration", "Inventory Management", "Order Tracking"]
  },
  {
    title: "Content Management Systems",
    description: "User-friendly CMS solutions that allow you to easily manage and update your website content.",
    features: ["Easy Content Updates", "User Management", "SEO Tools", "Multi-language Support"]
  },
  {
    title: "Web Applications",
    description: "Complex web applications with advanced functionality and database integration for your business needs.",
    features: ["Database Integration", "User Authentication", "API Development", "Real-time Features"]
  },
];

const portfolio = [
  {
    title: "E-commerce Fashion Store",
    description: "Modern online store with advanced filtering and payment integration",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfe5ebd2-1536-4dc4-9eb2-22b42c451561.png",
    tags: ["E-commerce", "React", "Stripe"]
  },
  {
    title: "Corporate Business Website",
    description: "Professional corporate website with CMS and blog functionality",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f02cbe21-acce-490e-88f6-5405e8f7ef5b.png",
    tags: ["Corporate", "WordPress", "SEO"]
  },
  {
    title: "SaaS Web Application",
    description: "Complex dashboard application with user management and analytics",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9abe2ab-4b53-4e76-be3c-c3141a4922a0.png",
    tags: ["SaaS", "Next.js", "Analytics"]
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your digital presence with custom websites that combine stunning design, 
                powerful functionality, and optimized performance to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Link href="#contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e44efdc3-c62e-4178-8268-8c5cc7e0e3b5.png"
                  alt="Professional website development process showcasing responsive design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Website Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From simple business websites to complex web applications, we deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technologies We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We use cutting-edge technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent Work</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore some of our latest website development projects and see the quality we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={project.image}
                    alt={project.description}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let's discuss your website development needs and create something amazing together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free consultation and project estimate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Custom design mockups included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>30-day post-launch support</span>
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