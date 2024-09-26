import { type IAuthRepository, type User, type Credentials, ERRORS } from '@@/layers/auth'
import { failure, success, type Result } from '@/shared/result'
import type { Email } from '@/shared/email'

export const createInMemoryRepository = (): IAuthRepository => {
  const users: User[] = []

  const addUser = async (credentials: Credentials): Promise<Result<User>> => {
    const existingUser = users.find(user => user.email === credentials.email)

    if (existingUser) {
      return failure(ERRORS.USER_ALREADY_EXISTS)
    }

    const newUser: User = { id: String(users.length + 1), email: credentials.email }
    users.push(newUser)
    return success(newUser)
  }

  const getUserByEmail = async (email: Email): Promise<Result<User>> => {
    const user = users.find(user => user.email === email) || null
    return user ? success(user) : failure(ERRORS.USER_NOT_FOUND)
  }

  return {
    addUser,
    getUserByEmail,
  }
}
