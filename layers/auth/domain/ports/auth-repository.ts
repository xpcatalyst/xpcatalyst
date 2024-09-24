import type { Credentials, User } from '@@/layers/auth'

export interface IAuthRepository {
  addUser: (credentials: Credentials) => Promise<User>
  getUserByEmail: (email: string) => Promise<User | null>

  // login: (credentials: Credentials) => Promise<User>
  // logout: () => Promise<void>
  // getCurrentUser: () => Promise<User | null>
  // loginWithProvider: (provider: string) => Promise<IUser>
}
