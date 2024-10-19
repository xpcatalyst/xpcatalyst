import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import { failure } from '~/shared/result'

export const createInMemoryRepository = (): INewsletterRepository => {
  const subscribe = async (_email: Email) => {
    return failure('NO')
  }

  return {
    subscribe,
  }
}
