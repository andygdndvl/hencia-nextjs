'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MasterePage from '@/components/pages/MasterePage'

export default function MastereRoute() {
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

  return (
    <MasterePage 
      onBack={handleBack} 
      onNavigateToFormation={handleNavigateToFormation}
    />
  )
}