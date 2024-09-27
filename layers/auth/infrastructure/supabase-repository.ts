import { type IAuthRepository, type User, type Credentials, REPOSITORY_ERRORS } from '@@/layers/auth'
import { failure, success, type Result, type Email } from '@/shared'

export const createSupabaseRepository = (): IAuthRepository => {
  const users: User[] = []
  let currentUser: User | null = null

  const addUser = async (credentials: Credentials): Promise<Result<User>> => {
    const existingUser = users.find(user => user.email === credentials.email)

    if (existingUser) {
      return failure(REPOSITORY_ERRORS.DUPLICATE_EMAIL)
    }

    const newUser: User = { id: String(users.length + 1), email: credentials.email }
    users.push(newUser)
    return success(newUser)
  }

  const getUserByEmail = async (email: Email): Promise<Result<User>> => {
    const user = users.find(user => user.email === email) || null
    return user ? success(user) : failure(REPOSITORY_ERRORS.USER_NOT_FOUND)
  }

  const login = async (credentials: Credentials): Promise<Result<User>> => {
    const user = users.find(u => u.email === credentials.email)
    if (user) {
      // In a real implementation, you'd check the password here
      currentUser = user
      return success(user)
    }
    return failure(REPOSITORY_ERRORS.USER_NOT_FOUND)
  }

  const logout = async (): Promise<Result<void>> => {
    currentUser = null
    return success(undefined)
  }

  const loginWithProvider = async (provider: string): Promise<Result<User>> => {
    // This is a mock implementation
    const user: User = { id: String(users.length + 1), email: `${provider}User@example.com` }
    users.push(user)
    currentUser = user
    return success(user)
  }

  const getCurrentUser = async (): Promise<Result<User | null>> => {
    return success(currentUser)
  }

  return {
    addUser,
    getUserByEmail,
    login,
    logout,
    loginWithProvider,
    getCurrentUser,
  }
}
