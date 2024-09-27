// Domain/Entities
export { type Credentials, validateCredentials } from './domain/entities/credentials'
export type { User } from './domain/entities/user'

// Domain/Ports
export type { IAuthRepository } from './domain/ports/auth-repository'

// Domain/Use cases
export { createAddUserUseCase } from './domain/usecases/add-user'
export { createLoginUseCase } from './domain/usecases/login'

// Domain/Errors
export { ERRORS, REPOSITORY_ERRORS, USECASE_ERRORS } from './domain/errors'

// Adapters (repositories)
export { createInMemoryRepository } from './adapters/in-memory-repository'
