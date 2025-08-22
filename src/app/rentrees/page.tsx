'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import RentreesPage from '@/components/pages/RentreesPage'

export default function RentreesRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <RentreesPage onBack={handleBack} />
}