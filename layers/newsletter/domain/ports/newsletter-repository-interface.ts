// Repository Interfaces: Output Ports
// Defined in the domain layer but implemented by the infrastructure layer
// Focus on pure data retrieval and manipulation

import type { Subscriber } from '../entities/subscriber'

export interface INewsletterRepository {
  subscribe: (email: Email) => Promise<Result<Subscriber>>
}
