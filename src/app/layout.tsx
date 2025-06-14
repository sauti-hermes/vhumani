import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { VhumaniLogo } from "../../public/assets/images/images";
import { ThemeProvider } from "@/components/theme-provider";
import VhumaniFooter from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vhumani.com'),
  title: {
    default: 'Vhumani | Bridging Brands and Influencers',
    template: '%s | Vhumani',
  },
  description: 'Vhumani connects businesses with influencers and marketers to create powerful, targeted marketing campaigns. Empower your brand with authentic engagement.',
  keywords: [
    'influencer marketing',
    'brand collaboration',
    'digital marketing',
    'marketing platform',
    'social media influencers',
    'business growth',
    'brand awareness',
    'Vhumani',
  ],
  authors: [{ name: 'Vhumani' }],
  creator: 'Vhumani',
  publisher: 'Vhumani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vhumani.com',
    siteName: 'Vhumani',
    title: 'Vhumani - Bridging Brands and Influencers',
    description: 'Discover Vhumani, a platform connecting businesses with influencers to drive real engagement and impactful marketing campaigns.',
    images: [
      {
        url: VhumaniLogo.src,
        width: 1200,
        height: 630,
        alt: 'Vhumani Logo',
      },
    ],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <VhumaniFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}