// Repository Interfaces: Output Ports
// Defined in the domain layer but implemented by the infrastructure layer
// Focus on pure data retrieval and manipulation

import type { Subscriber } from '../entities/subscriber'

export interface INewsletterRepository {
  addSubscriber: (subscriber: Subscriber) => Promise<Result<Subscriber>>
  getSubscriberByEmail: (email: Email) => Promise<Result<Subscriber>>
  subscribe: (email: Email) => Promise<Result<Subscriber>>
}
