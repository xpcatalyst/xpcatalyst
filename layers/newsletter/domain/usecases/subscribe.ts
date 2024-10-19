import type { Subscriber } from '../entities/subscriber'
import type { INewsletterRepository } from '../ports/newsletter-repository-interface'
import { createEmail } from '~/shared/email'
import { success, failure } from '~/shared/result'

// Input Ports (Use Case Interface): implemented by use cases
// Ports define the interfaces that the application core expects to interact with.
export interface ISubscribeUseCase {
  execute(email: Email): Promise<Result<Subscriber>>
}

// ReturnType<typeof createSubscribeUseCase>

export const ERRORS = {
  INVALID: 'Invalid email address',
  ALREADY_EXISTS: 'Subscriber already exists',
  FAILED: 'Subscription failed',
} as const

// Use Case
export const createSubscribeUseCase = (repository: INewsletterRepository): ISubscribeUseCase => ({
  execute: async (email: Email) => {
    const emailResult = createEmail(email)
    if (!emailResult.success) {
      return failure(ERRORS.INVALID) // Generic error for the user
    }

    const existingSubscriber = await repository.getSubscriberByEmail(email)
    if (existingSubscriber.success) {
      return failure(ERRORS.ALREADY_EXISTS) //
    }
    // return await repository.subscribe(email)
    return success({ id: 1, email: emailResult.value, age: 20 })
  },
})
