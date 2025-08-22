'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import QuiSommesNousPage from '@/components/pages/QuiSommesNousPage'

export default function QuiSommesNousRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de HENCIA Business School",
    "description": "Histoire et présentation de HENCIA Business School, école de commerce spécialisée en marketing digital",
    "url": "https://hencia.fr/qui-sommes-nous",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "HENCIA Business School",
      "foundingDate": "2020",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Groupe ABSSIA"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification Qualiopi"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuiSommesNousPage onBack={handleBack} />
    </>
  )
}