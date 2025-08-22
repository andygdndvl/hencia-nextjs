import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HENCIA Business School - École de Commerce Spécialisée Marketing Digital | Formations Reconnues État Bac à Bac+5',
    template: '%s | HENCIA Business School - École Commerce Marketing Digital'
  },
  description: 'HENCIA Business School : École de commerce spécialisée marketing digital. Formations diplômantes reconnues État : BTS NDRC, Bachelor Marketing Digital, Mastère. 8 campus France. Alternance possible. Hors Parcoursup.',
  keywords: [
    'école de commerce marketing digital',
    'business school marketing digital',
    'formation marketing digital reconnue état',
    'BTS NDRC',
    'bachelor marketing digital',
    'mastère marketing digital',
    'école commerce digital',
    'formation alternance marketing',
    'école hors parcoursup',
    'formation SEO SEA',
    'école e-commerce',
    'formation social media',
    'école communication digitale',
    'formation data marketing',
    'école growth hacking',
    'campus paris lyon lille',
    'formation professionnalisante digital',
    'école certifiée qualiopi',
    'diplôme RNCP marketing',
    'formation marketing automation'
  ],
  authors: [{ name: 'HENCIA Business School' }],
  creator: 'HENCIA Business School',
  publisher: 'HENCIA Business School',
  category: 'Education',
  classification: 'Business School Marketing Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hencia.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: 'HENCIA Business School - École Commerce Marketing Digital | Formations Reconnues État',
    description: 'École de commerce spécialisée marketing digital. Formations diplômantes BTS NDRC, Bachelor, Mastère. 8 campus France. Alternance. Hors Parcoursup. Taux insertion 95%.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hencia.fr',
    siteName: 'HENCIA Business School',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/about/campus.png',
        width: 1200,
        height: 630,
        alt: 'HENCIA Business School - Campus et formations marketing digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HENCIA Business School - École Commerce Marketing Digital',
    description: 'Formations diplômantes marketing digital reconnues État. BTS NDRC, Bachelor, Mastère. 8 campus France.',
    images: ['/images/about/campus.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'FR',
    'geo.placename': 'France',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/about/favicon.png" />
        <link rel="apple-touch-icon" href="/images/about/favicon.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}