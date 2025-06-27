// app/auth/callback/page.tsx

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/services/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (session) {
        router.push('/dashboard')
      } else {
        router.push('/') 
      }
    }

    getSession()
  }, [router])

  return
   <div className="p-10 text-center">Signing you in...</div>
}
