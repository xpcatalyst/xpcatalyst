// Domain/Entities
export type { Credentials } from './domain/entities/credentials'
export type { User } from './domain/entities/user'

// Domain/Ports
export type { IAuthRepository } from './domain/ports/auth-repository'

// Domain/Use cases
export { createAddUserUseCase } from './domain/usecases/add-user'

// Domain/Errors
export { ERRORS } from './domain/errors'

// Adapters (repositories)
export { createInMemoryRepository } from './adapters/in-memory-repository'