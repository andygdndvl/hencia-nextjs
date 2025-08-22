'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CommentIntegrerPage from '@/components/pages/CommentIntegrerPage'

export default function CommentIntegrerRoute() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  return <CommentIntegrerPage onBack={handleBack} />
}