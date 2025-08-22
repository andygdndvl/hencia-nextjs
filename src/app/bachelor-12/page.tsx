'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Bachelor12Page from '@/components/pages/Bachelor12Page'

export default function Bachelor12Route() {
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
    "name": "Bachelor 1 & 2 Marketing Digital",
    "description": "Formation Bac+2 en marketing digital, communication opérationnelle et gestion de projets digitaux",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "HENCIA Business School",
      "url": "https://hencia.fr"
    },
    "educationalCredentialAwarded": "Bachelor",
    "educationalLevel": "Bac+2",
    "timeRequired": "P2Y",
    "courseMode": "blended",
    "inLanguage": "fr",
    "availableLanguage": "fr",
    "teaches": [
      "Marketing digital",
      "Communication digitale", 
      "Gestion de projets",
      "SEO/SEA",
      "Social media",
      "Content marketing",
      "Analytics"
    ],
    "occupationalCategory": [
      "Assistant marketing digital",
      "Community manager",
      "Chargé de communication digitale",
      "Chef de projet digital junior"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Bachelor12Page 
        onBack={handleBack} 
        onNavigateToFormation={handleNavigateToFormation}
      />
    </>
  )
}