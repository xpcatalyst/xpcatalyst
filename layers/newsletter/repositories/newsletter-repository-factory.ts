import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import { createInMemoryRepository } from './in-memory-repository'

export const createNewsletterRepository = (): INewsletterRepository => {
  if (process.env.NODE_ENV === 'development') {
    return createInMemoryRepository()
  }
  return createInMemoryRepository()
}
