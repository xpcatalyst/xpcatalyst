import { beforeEach, describe, expect, it } from 'vitest'
import { createSubscribeUseCase, type ISubscribeUseCase } from '../../domain/usecases/subscribe'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createInMemoryRepository } from '../../gateways/in-memory-repository'
import { failure } from '~/shared/result'

describe('Subscribe To Newsletter Use Case', () => {
  let repository: INewsletterRepository
  let subscribe: ISubscribeUseCase

  beforeEach(() => {
    repository = createInMemoryRepository()
    subscribe = createSubscribeUseCase(repository)
  })

  it ('should successfully subscribe with correct email', async () => {
    const result = await subscribe.execute('test@example.com')
    expect(result).toEqual(failure('NO'))
  })
})
