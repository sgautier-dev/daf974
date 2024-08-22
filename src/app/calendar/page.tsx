'use client'

import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import CalendlyWidget from '@/components/CalendlyWidget'

export default function Calendar() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <CalendlyWidget />
    </SlimLayout>
  )
}
