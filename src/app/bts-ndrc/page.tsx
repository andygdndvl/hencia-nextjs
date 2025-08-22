'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BTSNDRCPage from '@/components/pages/BTSNDRCPage'

export default function BTSNDRCRoute() {
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
    "name": "BTS NDRC",
    "description": "Formation BTS en Négociation et Digitalisation de la Relation Client",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "HENCIA Business School",
      "url": "https://hencia.fr"
    },
    "educationalCredentialAwarded": "BTS",
    "educationalLevel": "Bac+2",
    "timeRequired": "P2Y",
    "courseMode": "blended",
    "inLanguage": "fr",
    "teaches": [
      "Négociation commerciale",
      "Relation client digitale",
      "Animation réseaux commerciaux",
      "Outils CRM",
      "E-commerce",
      "Techniques de vente"
    ],
    "occupationalCategory": [
      "Commercial terrain",
      "Chargé de clientèle",
      "Conseiller commercial",
      "Responsable e-commerce"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BTSNDRCPage 
        onBack={handleBack} 
        onNavigateToFormation={handleNavigateToFormation}
      />
    </>
  )
}