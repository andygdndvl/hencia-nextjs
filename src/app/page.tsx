'use client'

import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Formations from '@/components/Formations'
import Campus from '@/components/Campus'
import Diplomes from '@/components/Diplomes'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

// JSON-LD pour la page d'accueil
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "HENCIA Business School",
  "alternateName": "HENCIA",
  "description": "École de commerce spécialisée en marketing digital. Formations diplômantes reconnues par l'État de Bac à Bac+5.",
  "url": "https://hencia.fr",
  "logo": "https://hencia.fr/images/about/logo.png",
  "image": "https://hencia.fr/images/about/campus.png",
  "telephone": "+33155432664",
  "email": "contact@hencia.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 Rue Claude Tillier",
    "addressLocality": "Paris",
    "postalCode": "75012",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8698,
    "longitude": 2.3075
  },
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "areaServed": "France",
  "educationalCredentialAwarded": [
    "BTS NDRC",
    "Bachelor Marketing Digital",
    "Mastère Marketing Digital"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Diplôme d'État",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Ministère de l'Éducation Nationale"
    }
  },
  "offers": [
    {
      "@type": "Course",
      "name": "BTS NDRC",
      "description": "Négociation et Digitalisation de la Relation Client",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "HENCIA Business School"
      },
      "educationalCredentialAwarded": "BTS",
      "timeRequired": "P2Y",
      "courseMode": "blended",
      "inLanguage": "fr"
    },
    {
      "@type": "Course", 
      "name": "Bachelor Marketing Digital",
      "description": "Spécialisation Marketing Digital et E-commerce",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "HENCIA Business School"
      },
      "educationalCredentialAwarded": "Bachelor",
      "timeRequired": "P3Y",
      "courseMode": "blended",
      "inLanguage": "fr"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/school/hencia",
    "https://www.facebook.com/hencia",
    "https://www.instagram.com/hencia"
  ]
}

export default function HomePage() {
  const router = useRouter()

  const handleNavigateToFormation = (formation: string) => {
    window.scrollTo(0, 0)
    router.push(`/${formation}`)
  }

  const handleNavigateToCampus = (campusName: string) => {
    window.scrollTo(0, 0)
    const hashName = campusName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')
    router.push(`/campus/${hashName}`)
  }

  const handleNavigateToCandidature = () => {
    window.scrollTo(0, 0)
    router.push('/candidature')
  }

  const handleNavigateToQuiSommesNous = () => {
    window.scrollTo(0, 0)
    router.push('/qui-sommes-nous')
  }

  const handleNavigateToDiplomesCertifications = () => {
    window.scrollTo(0, 0)
    router.push('/diplomes-certifications')
  }

  const handleNavigateToRentrees = () => {
    window.scrollTo(0, 0)
    router.push('/rentrees')
  }

  const handleNavigateToCommentIntegrer = () => {
    window.scrollTo(0, 0)
    router.push('/comment-integrer')
  }

  const handleNavigateToHorsParcoursup = () => {
    window.scrollTo(0, 0)
    router.push('/hors-parcoursup')
  }

  const handleNavigateToParrainage = () => {
    window.scrollTo(0, 0)
    router.push('/parrainage')
  }

  const handleNavigateToHandicap = () => {
    window.scrollTo(0, 0)
    router.push('/handicap')
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-800 dark:bg-white transition-colors duration-300">
        <Header 
          onNavigateToCandidature={handleNavigateToCandidature}
          onNavigateToFormation={handleNavigateToFormation}
          onNavigateToCampus={handleNavigateToCampus}
          onNavigateToQuiSommesNous={handleNavigateToQuiSommesNous}
          onNavigateToDiplomesCertifications={handleNavigateToDiplomesCertifications}
          onNavigateToRentrees={handleNavigateToRentrees}
          onNavigateToCommentIntegrer={handleNavigateToCommentIntegrer}
          onNavigateToHorsParcoursup={handleNavigateToHorsParcoursup}
          onNavigateToParrainage={handleNavigateToParrainage}
          onNavigateToHandicap={handleNavigateToHandicap}
        />
        <Hero onNavigateToCandidature={handleNavigateToCandidature} />
        <Formations onNavigateToFormation={handleNavigateToFormation} onNavigateToCandidature={handleNavigateToCandidature} />
        <Campus onNavigateToCampus={handleNavigateToCampus} />
        <Diplomes />
        <CTA onNavigateToCandidature={handleNavigateToCandidature} />
        <Footer />
      </div>
    </>
  )
}