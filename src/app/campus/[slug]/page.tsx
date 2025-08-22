'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import CampusPage from '@/components/pages/CampusPage'

export default function CampusRoute() {
  const router = useRouter()
  const params = useParams()

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

  // Convertir le slug en nom de campus
  const getCampusName = (slug: string): string => {
    const campusMap: { [key: string]: string } = {
      'paris': 'Paris',
      'saint-quentin-en-yvelines': 'Saint-Quentin en Yvelines',
      'val-deurope': 'Val d\'Europe',
      'lille': 'Lille',
      'lyon': 'Lyon',
      'nice': 'Nice',
      'montpellier': 'Montpellier',
      'bordeaux': 'Bordeaux'
    }
    return campusMap[slug as string] || 'Paris'
  }

  const campusName = getCampusName(params.slug as string)

  return (
    <CampusPage 
      onBack={handleBack} 
      campusName={campusName}
      onNavigateToFormation={handleNavigateToFormation}
    />
  )
}