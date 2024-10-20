import { describe, it, expect, beforeEach } from 'vitest'
import { createInMemoryRepository, ERRORS } from '../../repositories/in-memory-repository'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { failure, success } from '~/shared/result'

describe('InMemoryRepository', () => {
  let repository: INewsletterRepository

  beforeEach(() => {
    repository = createInMemoryRepository()
  })

  it('should add new subscribers', async () => {
    const result1 = await repository.addSubscriber('test1@example.com')
    expect(result1).toEqual(success({ id: 1, email: 'test1@example.com' }))

    const result2 = await repository.addSubscriber('test2@example.com')
    expect(result2).toEqual(success({ id: 2, email: 'test2@example.com' }))
  })

  it('should prevent adding duplicate subscribers', async () => {
    await repository.addSubscriber('test@example.com')
    const result = await repository.addSubscriber('test@example.com')
    expect(result.success).toBe(false)
    expect(result).toEqual(failure(ERRORS.DUPLICATE_EMAIL))
  })

  it('should retrieve a subscriber by email', async () => {
    await repository.addSubscriber('test@example.com')
    const result = await repository.getSubscriberByEmail('test@example.com')
    expect(result).toEqual(success({ id: 1, email: 'test@example.com' }))
  })

  it('should return an error when trying to retrieve a non-existent subscriber', async () => {
    const result = await repository.getSubscriberByEmail('test@example.com')
    expect(result).toEqual(failure(ERRORS.SUBSCRIBER_NOT_FOUND))
  })
})
