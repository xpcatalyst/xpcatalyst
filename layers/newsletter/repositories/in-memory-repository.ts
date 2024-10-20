// Repositories (Secondary Adapters)
// They adapt external resources (databases, APIs) into your domain

import type { INewsletterRepository } from '../domain/ports/newsletter-repository-interface'
import { createSubscriber, type Subscriber } from '../domain/entities/subscriber'
import { failure, success } from '~/shared/result'

export const ERRORS = {
  SUBSCRIBER_NOT_FOUND: 'Subscriber not found in the database',
  // DATABASE_ERROR: 'A database error occurred',
  DUPLICATE_EMAIL: 'Email already exists in the database',
  // CONNECTION_FAILED: 'Failed to connect to the database',
  // QUERY_FAILED: 'Database query failed',
  // TRANSACTION_FAILED: 'Database transaction failed',
} as const

export const createInMemoryRepository = (): INewsletterRepository => {
  const subscribers: Subscriber[] = []
  let currentId = 1

  const addSubscriber = async (subscriber: Subscriber) => {
    // No domain-specific validation like email verification => Use Case
    const existingSubscriber = await getSubscriberByEmail(subscriber.email)
    if (existingSubscriber.success) {
      return failure(ERRORS.DUPLICATE_EMAIL)
    }
    // assume that the inputs it receives are valid?

    // const newSubscriber: Subscriber = { id: currentId++, email }
    const newSubscriberResult = createSubscriber(subscriber.email, String(currentId++))

    subscribers.push(newSubscriberResult)
    return success(newSubscriberResult)
  }

  const getSubscriberByEmail = async (email: Email): Promise<Result<Subscriber>> => {
    const subscriber = subscribers.find(subscriber => subscriber.email === email) || null
    return subscriber ? success(subscriber) : failure(ERRORS.SUBSCRIBER_NOT_FOUND)
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
