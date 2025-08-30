import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, Social Media & PPC | Sparkdim",
  description: "Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, and analytics. Grow your business online with proven strategies.",
  keywords: ["digital marketing", "SEO", "social media marketing", "PPC", "content marketing", "online advertising"],
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility and ranking on search engines to drive organic traffic and increase conversions.",
    features: ["Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO"],
    icon: "🔍"
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Strategic paid advertising campaigns on Google Ads, Facebook, and other platforms to maximize your ROI.",
    features: ["Campaign Setup", "Ad Creation", "Bid Management", "Performance Tracking"],
    icon: "💰"
  },
  {
    title: "Social Media Marketing",
    description: "Build and engage your audience across social media platforms with compelling content and strategic campaigns.",
    features: ["Content Creation", "Community Management", "Paid Social Ads", "Influencer Outreach"],
    icon: "📱"
  },
  {
    title: "Content Marketing",
    description: "Create valuable, relevant content that attracts and engages your target audience while driving profitable actions.",
    features: ["Blog Writing", "Video Content", "Infographics", "Email Campaigns"],
    icon: "✍️"
  },
  {
    title: "Marketing Analytics",
    description: "Data-driven insights and reporting to measure performance and optimize your marketing strategies for better results.",
    features: ["Google Analytics", "Conversion Tracking", "ROI Analysis", "Performance Reports"],
    icon: "📊"
  },
  {
    title: "Email Marketing",
    description: "Build and nurture customer relationships through targeted email campaigns that drive engagement and sales.",
    features: ["Campaign Design", "List Management", "Automation", "A/B Testing"],
    icon: "📧"
  },
];

const caseStudies = [
  {
    title: "E-commerce Growth Success",
    description: "450% increase in organic traffic and 280% boost in online sales",
    results: ["450% traffic increase", "280% sales boost", "65% lower CPA"],
    industry: "E-commerce"
  },
  {
    title: "SaaS Lead Generation",
    description: "Generated 500+ qualified leads per month through multi-channel campaigns",
    results: ["500+ monthly leads", "35% conversion rate", "40% cost reduction"],
    industry: "SaaS"
  },
  {
    title: "Local Business Expansion",
    description: "Helped local restaurant chain expand to 15 new locations",
    results: ["300% local visibility", "150% foot traffic", "15 new locations"],
    industry: "Restaurant"
  },
];

const marketingProcess = [
  {
    step: "1",
    title: "Strategy Development",
    description: "We analyze your business, competitors, and target audience to create a comprehensive marketing strategy."
  },
  {
    step: "2", 
    title: "Campaign Creation",
    description: "Our team creates compelling campaigns across multiple channels tailored to your audience and goals."
  },
  {
    step: "3",
    title: "Implementation & Launch",
    description: "We execute campaigns across all selected channels with careful monitoring and optimization."
  },
  {
    step: "4",
    title: "Analysis & Optimization",
    description: "Continuous monitoring, analysis, and optimization to maximize performance and ROI."
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Grow Your Business with <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reach more customers, increase brand awareness, and drive sales with our comprehensive 
                digital marketing strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Link href="#contact">Get Marketing Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2214ee12-c118-4e82-856b-2dfae9425a34.png"
                  alt="Digital marketing analytics dashboard showing growth metrics and performance data"
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
              Our Digital Marketing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Marketing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A proven methodology that delivers consistent results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingProcess.map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real results from our digital marketing campaigns across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-200">
                <CardContent className="p-8">
                  <div className="text-sm text-purple-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Let's create a custom digital marketing strategy that drives real results for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free marketing audit worth $500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Custom strategy roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>30-day performance guarantee</span>
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