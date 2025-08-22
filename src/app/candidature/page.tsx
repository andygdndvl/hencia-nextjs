'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CandidaturePage from '@/components/pages/CandidaturePage'

export default function CandidatureRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Candidature en ligne HENCIA Business School",
    "description": "Formulaire de candidature pour intégrer HENCIA Business School, école de commerce spécialisée en marketing digital",
    "url": "https://hencia.fr/candidature",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "HENCIA Business School"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://hencia.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Candidature",
          "item": "https://hencia.fr/candidature"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CandidaturePage onBack={handleBack} />
    </>
  )
}