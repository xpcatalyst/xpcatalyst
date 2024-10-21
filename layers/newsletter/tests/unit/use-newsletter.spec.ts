import { beforeEach, describe, expect, vi, it } from 'vitest'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createSubscribeUseCase, type ISubscribeUseCase } from '../../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../../repositories/in-memory-repository'
import { useNewsletter } from '../../composables/useNewsletter'

describe('useNewsletter', () => {
  let inMemoryRepository: INewsletterRepository
  let subscribeUseCase: ISubscribeUseCase
  // let newsletter: ReturnType<typeof useNewsletter>

  beforeEach(() => {
    inMemoryRepository = createInMemoryRepository()
    subscribeUseCase = createSubscribeUseCase(inMemoryRepository)
    // newsletter = useNewsletter(subscribeUseCase)
  })

  it('should successfully subscribe with a valid email', async () => {
    const { email, subscribe, success } = useNewsletter(subscribeUseCase)
    email.value = 'valid@email.com'
    await subscribe()
    expect(success.value).toBe(true)
    /*
    const validEmail = 'test@example.com'
    subscribeUseCase.execute = vi.fn().mockResolvedValue({ success: false })

    newsletter.email.value = validEmail
    await newsletter.subscribe()

    expect(subscribeUseCase.execute).toHaveBeenCalledWith(validEmail)
    // expect(result.success).toBe(true)
  */
  })
})
