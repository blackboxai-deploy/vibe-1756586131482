import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Sparkdim - Leading IT Services & Digital Solutions Company",
  description: "Learn about Sparkdim's journey, mission, and the expert team behind our innovative IT services. Over 10 years of experience delivering digital solutions that transform businesses.",
  keywords: ["about sparkdim", "IT company", "digital solutions team", "company history", "mission vision"],
};

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years of experience in technology and business strategy.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cd308eb-7382-4fba-a8f2-05d2d5abd025.png",
    specialties: ["Business Strategy", "Technology Vision", "Leadership"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Technology expert specializing in scalable web applications and system architecture.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96f59145-ff90-4e3f-a00b-e8c2021b139b.png",
    specialties: ["System Architecture", "Full-Stack Development", "Team Leadership"]
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    description: "Creative director focused on user experience design and brand development.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88897869-d985-4ab0-be17-05c711c86606.png",
    specialties: ["UI/UX Design", "Brand Strategy", "Creative Direction"]
  },
  {
    name: "Emily Wang",
    role: "Marketing Director",
    description: "Digital marketing strategist with expertise in growth and customer acquisition.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5026ae9a-59f1-4c01-9acc-5ac522c730d0.png",
    specialties: ["Digital Marketing", "Growth Strategy", "Analytics"]
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    icon: "💡"
  },
  {
    title: "Quality",
    description: "Every project we deliver meets the highest standards of quality, performance, and user experience.",
    icon: "⭐"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring transparent communication throughout every project.",
    icon: "🤝"
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and helping our clients achieve sustainable business growth.",
    icon: "📈"
  },
];

const stats = [
  { number: "10+", label: "Years of Experience", description: "Serving clients worldwide" },
  { number: "500+", label: "Projects Completed", description: "Successful deliveries" },
  { number: "250+", label: "Happy Clients", description: "Long-term partnerships" },
  { number: "25+", label: "Team Members", description: "Expert professionals" },
];

const timeline = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology"
  },
  {
    year: "2016", 
    title: "First Major Client",
    description: "Successfully delivered our first enterprise-level web application"
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 15 team members and expanded service offerings"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Helped 100+ businesses adapt to digital-first strategies during pandemic"
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: "Recognized as Top IT Services Provider by industry publications"
  },
  {
    year: "2024",
    title: "Continued Innovation",
    description: "Leading the way with AI-powered solutions and modern web technologies"
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building the Future of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              For over a decade, Sparkdim has been at the forefront of digital transformation, 
              helping businesses navigate the ever-evolving technology landscape with innovative 
              solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting competitive advantages in 
                the digital marketplace.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in digital transformation, recognized for our 
                commitment to excellence, innovation, and the success of our clients.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/edd7a2d8-43e7-497e-baec-f31c3c51a72e.png"
                  alt="Sparkdim team collaborating on innovative digital solutions in modern office workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A decade of growth, innovation, and success stories.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                      <CardContent className="p-6">
                        <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The talented individuals who make our success possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-100">
                    <img
                      src={member.avatar}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty) => (
                      <div key={specialty} className="text-sm text-gray-500">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how Sparkdim can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}