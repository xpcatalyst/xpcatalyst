// Repository Interfaces: Output Ports
// Defined in the domain layer but implemented by the infrastructure layer
// Focus on pure data retrieval and manipulation

import type { Subscriber } from '../entities/subscriber'

export interface INewsletterRepository {
  add: (subscriber: Subscriber) => Promise<Result<Subscriber>>
  getByEmail: (email: Email) => Promise<Result<Subscriber>>
}
