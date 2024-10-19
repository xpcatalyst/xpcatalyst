import { describe, it, expect, beforeEach } from 'vitest'
import { createInMemoryRepository } from '../../gateways/in-memory-repository'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { success } from '~/shared/result'

describe('InMemoryRepository', () => {
  let repository: INewsletterRepository

  beforeEach(() => {
    repository = createInMemoryRepository()
  })

  it('should add a new subscriber', async () => {
    const result = await repository.addSubscriber('test@example.com')
    expect(result).toEqual(success({ id: 1, email: 'test@example.com' }))
  })

  it('should fail if subscriber already exists', async () => {
    await repository.addSubscriber('test@example.com')
    const result = await repository.addSubscriber('test@example.com')
    expect(result.success).toBe(false)
  })
})

/*

it('should prevent adding duplicate subscribers', async () => {
    await repository.addSubscriber('test@example.com');
    const result = await repository.addSubscriber('test@example.com');
    expect(result.success).toBe(false);
    expect(result.error).toBe('Subscriber already exists');
  });

  it('should retrieve a subscriber by email', async () => {
    await repository.addSubscriber('test@example.com');
    const result = await repository.getSubscriberByEmail('test@example.com');
    expect(result.success).toBe(true);
    expect(result.value.email).toBe('test@example.com');
  });

  it('should return an error when trying to retrieve a non-existent subscriber', async () => {
    const result = await repository.getSubscriberByEmail('nonexistent@example.com');
    expect(result.success).toBe(false);
    expect(result.error).toBe('Subscriber not found');
  });
*/
