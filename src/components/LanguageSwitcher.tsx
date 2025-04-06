'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function switchLanguage(locale: 'en' | 'ka') {
    startTransition(() => {
      // Basic logic: if the first segment is a locale, replace it; otherwise, add it.
      const segments = pathname.split('/').filter(Boolean)
      if (segments[0] === 'en' || segments[0] === 'ka') {
        segments[0] = locale
      } else {
        segments.unshift(locale)
      }
      router.replace('/' + segments.join('/'))
    })
  }

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => switchLanguage('ka')}
        className="px-3 py-1 rounded text-sm font-medium bg-gray-100 hover:bg-gray-200"
      >
        ქართული
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className="px-3 py-1 rounded text-sm font-medium bg-gray-100 hover:bg-gray-200"
      >
        English
      </button>
    </div>
  )
}
