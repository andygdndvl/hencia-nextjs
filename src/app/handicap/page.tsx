'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import HandicapPage from '@/components/pages/HandicapPage'

export default function HandicapRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <HandicapPage onBack={handleBack} />
}