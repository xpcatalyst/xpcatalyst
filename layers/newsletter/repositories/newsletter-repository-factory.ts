import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import { createInMemoryRepository } from './in-memory-newsletter-repository'
// import { createSupabaseNewsletterRepository } from './supabase-newsletter-repository'

export const createNewsletterRepository = (): INewsletterRepository => {
  // if (process.env.NODE_ENV === 'development') {
  //   return createInMemoryRepository()
  // }

  // For unit tests, still use in-memory
  if (process.env.VITEST) {
    return createInMemoryRepository()
  }
  // return createSupabaseNewsletterRepository() // env.production + env.development
  return createInMemoryRepository()
}
