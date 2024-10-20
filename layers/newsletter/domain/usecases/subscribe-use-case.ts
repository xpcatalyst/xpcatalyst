// Use Case:
// Responsible for business logic and coordinating the flow of data
import { createSubscriber, type Subscriber } from '../entities/subscriber'
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
  INVALID_EMAIL: 'Invalid email address',
  ALREADY_EXISTS: 'Subscriber already exists',
  ADD_SUBSCRIBER_FAILED: 'Adding the subscriber failed',
} as const

// Use Case
export const createSubscribeUseCase = (repository: INewsletterRepository): ISubscribeUseCase => ({
  execute: async (email: Email) => {
    // Handle the Email verification
    const emailResult = createEmail(email)
    if (!emailResult.success) {
      return failure(ERRORS.INVALID_EMAIL) // Generic error for the user
    }

    // Check if subscriber exists
    const existingSubscriber = await repository.getSubscriberByEmail(emailResult.value)
    if (existingSubscriber.success) {
      return failure(ERRORS.ALREADY_EXISTS)
    }

    const newSubscriber = createSubscriber(emailResult.value)

    // Reformat errors from repository to something more meaningful, which is useful for providing user-friendly feedback.
    const subscriberResult = await repository.addSubscriber(newSubscriber)
    return subscriberResult.success
      ? success(subscriberResult.value)
      : failure(ERRORS.ADD_SUBSCRIBER_FAILED)

    // or return await repository.addSubscriber(emailResult.value) ?
  },
})
