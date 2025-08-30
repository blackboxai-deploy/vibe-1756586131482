import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: React.ReactNode;
  color: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  href, 
  icon, 
  color 
}: ServiceCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
  };

  const bgColorClasses = {
    blue: "bg-blue-50 border-blue-100",
    purple: "bg-purple-50 border-purple-100", 
    indigo: "bg-indigo-50 border-indigo-100",
    pink: "bg-pink-50 border-pink-100",
    green: "bg-green-50 border-green-100",
  };

  return (
    <Link href={href} className="block group">
      <Card className={`h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${bgColorClasses[color as keyof typeof bgColorClasses]} hover:border-opacity-50`}>
        <CardContent className="p-8">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <div className="text-white text-2xl">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} mr-3 flex-shrink-0`}></div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <div className="flex items-center text-gray-700 group-hover:text-gray-900 font-medium">
            <span>Learn More</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}