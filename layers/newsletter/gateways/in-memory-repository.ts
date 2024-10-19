import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import type { Subscriber } from '../domain/entities/subscriber'
import { failure, success } from '~/shared/result'

export const REPOSITORY_ERRORS = {
  USER_NOT_FOUND: 'User not found in the database',
  DATABASE_ERROR: 'A database error occurred',
  DUPLICATE_EMAIL: 'Email already exists in the database',
  CONNECTION_FAILED: 'Failed to connect to the database',
  QUERY_FAILED: 'Database query failed',
  TRANSACTION_FAILED: 'Database transaction failed',
} as const

export const createInMemoryRepository = (): INewsletterRepository => {
  const subscribers: Subscriber[] = []

  const addSubscriber = async (email: Email) => {
    const existingSubscriber = subscribers.find(subscriber => subscriber.email === email)
    if (existingSubscriber) {
      return failure(REPOSITORY_ERRORS.DUPLICATE_EMAIL)
    }

    const newSubscriber: Subscriber = { id: subscribers.length + 1, email }
    subscribers.push(newSubscriber)
    return success(newSubscriber)
  }

  const getSubscriberByEmail = async (_email: Email): Promise<Result<Subscriber>> => {
    return failure('Not yet implemented')
  }

  const subscribe = async (_email: Email) => {
    return failure('Not yet implemented')
  }

  return {
    addSubscriber,
    getSubscriberByEmail,
    subscribe,

  }
}
