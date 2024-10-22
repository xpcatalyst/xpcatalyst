// Use Case:
// Responsible for business logic and coordinating the flow of data
import { createSubscriber, type Subscriber } from '../entities/subscriber'
import type { INewsletterRepository } from '../ports/newsletter-repository-interface'
import { createEmail } from '~/shared/email'
import { success, failure } from '~/shared/result'

// Input Ports (Use Case Interface): implemented by use cases
// Ports define the interfaces that the application core expects to interact with.
// ReturnType<typeof createSubscribeUseCase>
export interface ISubscribeUseCase {
  execute(email: Email): Promise<Result<Subscriber>>
}

export const ERRORS = {
  INVALID_EMAIL: 'Invalid email address',
  ALREADY_EXISTS: 'Email address already exists',
  FAILED: 'Subscription failed',
} as const

// Use Case
export const createSubscribeUseCase = (repository: INewsletterRepository): ISubscribeUseCase => ({
  execute: async (email: Email) => {
    // Handle the Email verification
    const emailResult = createEmail(email)
    if (!emailResult.success) {
      return failure(ERRORS.INVALID_EMAIL) // Generic error or specific error?
    }

    // Check if subscriber exists
    const existingSubscriber = await repository.getByEmail(emailResult.value)
    if (existingSubscriber.success) {
      return failure(ERRORS.ALREADY_EXISTS)
    }

    const newSubscriber = createSubscriber(emailResult.value)

    // Reformat errors from repository to something more meaningful, which is useful for providing user-friendly feedback.
    const subscriberResult = await repository.add(newSubscriber)
    return subscriberResult.success
      ? success(subscriberResult.value)
      : failure(ERRORS.FAILED)
  },
})
