import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.springstarusa.com"),
  
  title: {
    default: "Spring Star",
    template: "%s | Spring Star HVAC",
  },
  
  description: "Spring Star HVAC provides professional HVAC, mechanical, and utility solutions for commercial, industrial, and regulated facilities. Specialized in Pharmaceutical HVAC systems and energy optimization with 15+ years of experience.",
  
  keywords: [
    "Spring Star HVAC", 
    "Pharmaceutical HVAC", 
    "Cleanroom HVAC Solutions", 
    "Industrial Utility Solutions", 
    "Mechanical Project Management", 
    "HVAC Upgrading Works", 
    "Energy Optimization Services"
  ],

  alternates: {
    canonical: "/", 
  },

  icons: {
    icon: "/SpingstarCircle.png", 
    apple: "/SpingstarCircle.png", 
    shortcut: "/SpingstarCircle.png",
  },

  openGraph: {
    title: "Spring Star HVAC / Built on Engineering Expertise",
    description: "Reliable, energy-efficient, and quality-focused HVAC services tailored to mission-critical operations.",
    url: "https://www.springstarusa.com",
    siteName: "Spring Star HVAC",
    images: [
      {
        url: "https://spring-star-hvac.vercel.app/Spingstar.png",
        width: 1200,
        height: 630,
        alt: "Spring Star HVAC Services Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Spring Star HVAC",
              "image": "https://www.springstarusa.com/Spingstar.png",
              "description": "Professional HVAC, mechanical, and utility solutions for commercial and industrial facilities.",
              "url": "https://www.springstarusa.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "us"
              }
            }),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-slate-900"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
         <GoogleAnalytics gaId="G-L8K95X6T1R" />
      </body>
     
    </html>
  );
}