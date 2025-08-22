'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import HorsParcoursupPage from '@/components/pages/HorsParcoursupPage'

export default function HorsParcoursupRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <HorsParcoursupPage onBack={handleBack} />
}