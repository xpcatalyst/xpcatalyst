import type { Credentials, User } from '@@/layers/auth'
import type { Result, Email } from '~/shared'

// Output Ports (Repository Interfaces):
// These are also defined in the domain layer but implemented by the infrastructure layer
// Focus on pure data retrieval and manipulation
export interface IAuthRepository {
  addUser: (credentials: Credentials) => Promise<Result<User>>
  getUserByEmail: (email: Email) => Promise<Result<User>>
  login: (credentials: Credentials) => Promise<Result<User>>
  logout: () => Promise<Result<void>>
  loginWithProvider: (provider: string) => Promise<Result<User>>
  getCurrentUser: () => Promise<Result<User | null>>
}

// LATER
// getCurrentUser: () => Promise<User | null>
