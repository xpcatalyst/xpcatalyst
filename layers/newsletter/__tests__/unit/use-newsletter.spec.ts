// @vitest-environment nuxt
// Use Nuxt environment for router.push
import { beforeEach, describe, expect, it } from 'vitest'
import type { INewsletterRepository } from '../../domain/ports/newsletter-repository-interface'
import { createSubscribeUseCase, type ISubscribeUseCase } from '../../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../../repositories/in-memory-newsletter-repository'
import { useNewsletter, BUTTON_TEXT } from '../../composables/useNewsletter'
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
      const { email, subscribe, success, message } = useNewsletter(subscribeUseCase)
      email.value = 'valid@email.com'

      await subscribe()

      expect(success.value).toBe(true)
      expect(message.value).toBe('')

      // Mock the router?
    })

    it('should fail with an existing email', async () => {
      await inMemoryRepository.add(createSubscriber('test@example.com'))
      const { email, subscribe, success, message } = useNewsletter(subscribeUseCase)
      email.value = 'test@example.com'

      await subscribe()

      expect(success.value).toBe(false)
      expect(message.value).not.toBeNull()
    })

    it('should set loading state during login process', async () => {
      const { email, subscribe, loading } = useNewsletter(subscribeUseCase)
      email.value = 'not empty'

      const subscribePromise = subscribe()
      expect(loading.value).toBe(true)

      await subscribePromise
      expect(loading.value).toBe(false)

      // Or this method
      // subscribe()
      // expect(loading.value).toBe(true)
      // await nextTick()
      // expect(loading.value).toBe(false)
    })

    it('should reset email when subscription is called', async () => {
      const { email, subscribe } = useNewsletter(subscribeUseCase)

      // Extra steps needed to set a value to error (readonly)
      email.value = 'invalid-email'
      await subscribe()

      email.value = 'valid@email.com'
      await subscribe()
      expect(email.value).toBe('')
    })
  })

  describe('Button State and Behavior', () => {
    it('should disable the subscribe button when email is empty', () => {
      const { email, isButtonDisabled } = useNewsletter(subscribeUseCase)
      email.value = ''
      expect(isButtonDisabled.value).toBe(true)
    })

    it('should disable the subscribe button when loading', async () => {
      const { email, isButtonDisabled, loading, subscribe } = useNewsletter(subscribeUseCase)
      email.value = 'not empty'

      subscribe()
      expect(loading.value).toBe(true)
      expect(isButtonDisabled.value).toBe(true)

      await nextTick()
      expect(loading.value).toBe(false)
      expect(isButtonDisabled.value).toBe(false)
    })

    it('should update isButtonDisabled when email changes', () => {
      const { email, isButtonDisabled } = useNewsletter(subscribeUseCase)
      email.value = 'not empty'
      expect(isButtonDisabled.value).toBe(false)

      email.value = ''
      expect(isButtonDisabled.value).toBe(true)
    })

    it('should render the correct text on subscribe button with loading state', async () => {
      const { email, subscribe, loading, buttonText } = useNewsletter(subscribeUseCase)
      email.value = 'not empty'

      subscribe()
      expect(loading.value).toBe(true)
      expect(buttonText.value).toBe(BUTTON_TEXT.LOADING)

      await nextTick()
      expect(loading.value).toBe(false)
      expect(buttonText.value).toBe(BUTTON_TEXT.SUBSCRIBE)
    })
  })
})
