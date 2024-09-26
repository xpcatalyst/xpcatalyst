import type { Credentials, User } from '@@/layers/auth'
import type { Result } from '~/shared/result'

// Focus on pure data retrieval and manipulation
export interface IAuthRepository {
  addUser: (credentials: Credentials) => Promise<Result<User>>
  getUserByEmail: (email: string) => Promise<Result<User>>
}

// login: (credentials: Credentials) => Promise<User>
// logout: () => Promise<void>
// getCurrentUser: () => Promise<User | null>
// loginWithProvider: (provider: string) => Promise<IUser>
