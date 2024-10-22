import { beforeEach, describe, expect, vi, it } from 'vitest'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createSubscribeUseCase, type ISubscribeUseCase } from '../../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../../repositories/in-memory-repository'
import { useNewsletter, ERRORS } from '../../composables/useNewsletter'
import { createSubscriber } from '../../domain/entities/subscriber'

describe('useNewsletter', () => {
  let inMemoryRepository: INewsletterRepository
  let subscribeUseCase: ISubscribeUseCase

  beforeEach(() => {
    inMemoryRepository = createInMemoryRepository()
    subscribeUseCase = createSubscribeUseCase(inMemoryRepository)
  })

  describe('Subscription Logic', () => {
    it('should successfully subscribe with a valid email', async () => {
      const { email, subscribe, success, error } = useNewsletter(subscribeUseCase)
      email.value = 'valid@email.com'
      await subscribe()
      expect(success.value).toBe(true)
      expect(error.value).toBeNull()
    })

    // Duplicates use case (Email verification ?)
    it('should not attempt subscribe if email is empty', async () => {
      subscribeUseCase.execute = vi.fn()
      const { email, subscribe, success, error } = useNewsletter(subscribeUseCase)
      email.value = ''

      await subscribe()

      expect(subscribeUseCase.execute).not.toHaveBeenCalled()
      expect(success.value).toBeNull()
      expect(error.value).toBe(ERRORS.REQUIRED)
    })

    it('should fail with an existing email', async () => {
      await inMemoryRepository.add(createSubscriber('test@example.com'))
      const { email, subscribe, success, error } = useNewsletter(subscribeUseCase)
      email.value = 'test@example.com'

      await subscribe()

      expect(success.value).toBe(false)
      expect(error.value).not.toBeNull()
    })

    it('should set loading state during login process', async () => {
      const { email, subscribe, loading } = useNewsletter(subscribeUseCase)
      email.value = 'not empty'

      subscribe()

      expect(loading.value).toBe(true)

      await nextTick()

      expect(loading.value).toBe(false)
    })

    it('should reset error when subscription is called', async () => {
      const { email, subscribe, error } = useNewsletter(subscribeUseCase)

      email.value = 'invalid-email'
      await subscribe()
      expect(error.value).not.toBeNull() // error.value = "anything" (readonly)

      email.value = 'valid@email.com'
      await subscribe()
      expect(error.value).toBeNull()
    })
  })

  describe('Button State and Behavior', () => {
    it('should disable the subscribe button when email is empty')
    it('should disable the subscribe button when loading')
    it('should render the correct text on subscribe button with loading state')
    it('should update isSubmitDisabled when email changes')
    it('should update isSubmitDisabled when loading state changes')
  })
})
