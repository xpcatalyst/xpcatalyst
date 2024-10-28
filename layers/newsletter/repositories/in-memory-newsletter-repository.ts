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

  const add = async (subscriber: Subscriber) => {
    // Assume that the inputs are valid

    const existingSubscriber = await getByEmail(subscriber.email)
    if (existingSubscriber.success) {
      return failure(ERRORS.DUPLICATE_EMAIL)
    }

    const newSubscriberResult = createSubscriber(subscriber.email, String(currentId++))

    subscribers.push(newSubscriberResult)
    return success(newSubscriberResult)
  }

  const getByEmail = async (email: Email): Promise<Result<Subscriber>> => {
    const subscriber = subscribers.find(subscriber => subscriber.email === email) || null
    return subscriber ? success(subscriber) : failure(ERRORS.SUBSCRIBER_NOT_FOUND)
  }

  return {
    add,
    getByEmail,
  }
}
