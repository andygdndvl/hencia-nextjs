'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DiplomesCertificationsPage from '@/components/pages/DiplomesCertificationsPage'

export default function DiplomesCertificationsRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <DiplomesCertificationsPage onBack={handleBack} />
}