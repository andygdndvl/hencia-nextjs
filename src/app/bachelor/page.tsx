'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BachelorPage from '@/components/pages/BachelorPage'

export default function BachelorRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  const handleNavigateToFormation = (formation: string) => {
    window.scrollTo(0, 0)
    router.push(`/${formation}`)
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor Marketing Digital",
    "description": "Formation Bac+3 spécialisée en marketing digital et e-commerce",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "HENCIA Business School",
      "url": "https://hencia.fr"
    },
    "educationalCredentialAwarded": "Bachelor",
    "educationalLevel": "Bac+3",
    "timeRequired": "P1Y",
    "courseMode": "blended",
    "inLanguage": "fr",
    "teaches": [
      "SEO/SEA avancé",
      "Social Media Marketing",
      "Google Analytics",
      "Marketing automation",
      "E-commerce",
      "Stratégie digitale"
    ],
    "occupationalCategory": [
      "Chef de projet digital",
      "Traffic manager",
      "Consultant SEO/SEA",
      "Responsable marketing digital"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BachelorPage 
        onBack={handleBack} 
        onNavigateToFormation={handleNavigateToFormation}
      />
    </>
  )
}