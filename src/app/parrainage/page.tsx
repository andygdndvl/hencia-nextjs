'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ParrainagePage from '@/components/pages/ParrainagePage'

export default function ParrainageRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <ParrainagePage onBack={handleBack} />
}