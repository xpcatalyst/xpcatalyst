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

  it('should successfully subscribe with a valid email', async () => {
    const { email, subscribe, success } = useNewsletter(subscribeUseCase)
    email.value = 'valid@email.com'
    await subscribe()
    expect(success.value).toBe(true)
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
})

/*
4. `it('should set loading state during subscription process')`
5. `it('should reset error when subscription is called')`

#### **Button State and Behavior**
6. `it('should disable the subscribe button when email is empty')`
7. `it('should disable the subscribe button when loading')`
8. `it('should render the correct text on subscribe button with loading state')`

#### **Computed Properties**
9. `it('should update isSubmitDisabled when email changes')`
10. `it('should update isSubmitDisabled when loading state changes')`

*/
