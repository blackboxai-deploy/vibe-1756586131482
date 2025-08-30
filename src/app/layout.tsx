import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sparkdim.com'),
  title: {
    default: 'Sparkdim - Professional IT Services & Digital Solutions',
    template: '%s | Sparkdim'
  },
  description: 'Sparkdim offers comprehensive IT services including website development, digital marketing, mobile app development, game development, and enterprise solutions. Transform your business with our expert team.',
  keywords: [
    'IT services',
    'website development',
    'digital marketing',
    'app development',
    'game development',
    'web design',
    'SEO services',
    'mobile apps',
    'software development',
    'Sparkdim'
  ],
  authors: [{ name: 'Sparkdim Team' }],
  creator: 'Sparkdim',
  publisher: 'Sparkdim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sparkdim.com',
    siteName: 'Sparkdim',
    title: 'Sparkdim - Professional IT Services & Digital Solutions',
    description: 'Transform your business with our comprehensive IT services. Expert website development, digital marketing, app development, and innovative solutions.',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e497f78b-b0a7-419a-8632-e1ad31f66a8d.png',
        width: 1200,
        height: 630,
        alt: 'Sparkdim - Professional IT Services & Digital Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparkdim - Professional IT Services & Digital Solutions',
    description: 'Transform your business with our comprehensive IT services. Expert website development, digital marketing, app development, and innovative solutions.',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5838a3d-53f6-42e7-920c-a5163daf13cf.png'],
    creator: '@sparkdim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here', // Replace with actual Google verification token
    yandex: 'verification_token_here', // Replace with actual Yandex verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://sparkdim.com" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sparkdim",
              "url": "https://sparkdim.com",
              "logo": "https://sparkdim.com/logo.png",
              "description": "Professional IT services including website development, digital marketing, app development, and enterprise solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-SPARKDIM",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/sparkdim",
                "https://twitter.com/sparkdim",
                "https://facebook.com/sparkdim"
              ],
              "services": [
                "Website Development",
                "Digital Marketing",
                "Mobile App Development",
                "Game Development",
                "IT Consulting"
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}