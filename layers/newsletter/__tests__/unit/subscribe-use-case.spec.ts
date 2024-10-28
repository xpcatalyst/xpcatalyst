import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createSubscribeUseCase, SUBSCRIBE_ERRORS, type ISubscribeUseCase } from '../../domain/usecases/subscribe-use-case'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createInMemoryRepository } from '../../repositories/in-memory-newsletter-repository'
import { success, failure } from '~/shared/result'
import { EMAIL_ERRORS } from '~/shared/email'

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

  it('should return failure with invalid email', async () => {
    const result = await usecase.execute('invalid-email')
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })

  it('should return failure when the email is already registered', async () => {
    await usecase.execute('test@example.com')
    const result = await usecase.execute('test@example.com')
    expect(result).toEqual(failure(SUBSCRIBE_ERRORS.ALREADY_EXISTS))
  })

  it('should not attempt call the repository if email is invalid', async () => {
    repository.getByEmail = vi.fn()
    repository.add = vi.fn()

    usecase = createSubscribeUseCase(repository)

    await usecase.execute('invalid-email')
    expect(repository.add).not.toHaveBeenCalled()
    expect(repository.getByEmail).not.toHaveBeenCalled()
  })

  // test: subscription failed?
})
