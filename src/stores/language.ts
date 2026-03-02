import { atom, computed } from 'nanostores'
import { translations, type Lang } from '@/lib/translations'

export const language = atom<Lang>('th')
export const t = computed(language, (lang) => translations[lang])

export function toggleLanguage() {
  const next = language.get() === 'th' ? 'en' : 'th'
  language.set(next)
}

let initialized = false
export function initLanguage() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true
  try {
    const stored = localStorage.getItem('bp-lang') as Lang | null
    if (stored === 'th' || stored === 'en') language.set(stored)
  } catch { /* ignore */ }
  language.subscribe((lang) => {
    try { localStorage.setItem('bp-lang', lang) } catch { /* ignore */ }
  })
}
