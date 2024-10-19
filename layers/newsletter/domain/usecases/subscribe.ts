import type { Subscriber } from '../entities/subscriber'
import type { INewsletterRepository } from '../ports/newsletter-repository-interface'

// Input Ports (Use Case Interface): implemented by use cases
// Ports define the interfaces that the application core expects to interact with.
export interface ISubscribeUseCase {
  execute(email: Email): Promise<Result<Subscriber>>
}

// ReturnType<typeof createSubscribeUseCase>

// Use Case
export const createSubscribeUseCase = (repository: INewsletterRepository): ISubscribeUseCase => ({
  execute: async (email: Email) => {
    return await repository.subscribe(email)
    // return failure('Failed to create subscription')
  },
})
