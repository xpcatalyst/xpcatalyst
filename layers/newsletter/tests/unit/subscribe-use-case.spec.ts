import { beforeEach, describe, expect, it } from 'vitest'
import { createSubscribeUseCase, ERRORS, type ISubscribeUseCase } from '../../domain/usecases/subscribe-use-case'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createInMemoryRepository } from '../../repositories/in-memory-repository'
import { success, failure } from '~/shared/result'

describe('Subscribe To Newsletter Use Case', () => {
  let repository: INewsletterRepository
  let usecase: ISubscribeUseCase

  beforeEach(() => {
    repository = createInMemoryRepository()
    usecase = createSubscribeUseCase(repository)
  })

  it('should successfully subscribe with correct email', async () => {
    const result = await usecase.execute('test@example.com')
    expect(result).toEqual(success({ id: '1', email: 'test@example.com' }))
  })

  it('should return failure when email is invalid', async () => {
    const result = await usecase.execute('invalid-email')
    expect(result).toEqual(failure(ERRORS.INVALID_EMAIL))
  })

  it('should return failure when the email is already registered', async () => {
    await usecase.execute('test@example.com')
    const result = await usecase.execute('test@example.com')
    expect(result).toEqual(failure(ERRORS.ALREADY_EXISTS))
  })

  // test: subscription failed?
})
