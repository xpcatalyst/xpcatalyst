import type { Credentials, IAuthRepository, User } from '@@/layers/auth'

export const createInMemoryRepository = (): IAuthRepository => {
  const users: User[] = []

  const addUser = async (credentials: Credentials): Promise<User> => {
    const newUser: User = { id: String(users.length + 1), email: credentials.email }
    users.push(newUser)
    return newUser
  }

  const getUserByEmail = async (email: string): Promise<User | null> => {
    return users.find(user => user.email === email) || null
  }

  return {
    addUser, getUserByEmail,

  }
}

/*
const login = async (credentials: Credentials): Promise<User> => {
    const user = users.find(u => u.email === credentials.email)
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  const logout = async (): Promise<void> => {
    // No action needed for in-memory repository
  }

  const getCurrentUser = async (): Promise<User | null> => {
    return users.length > 0 ? users[users.length - 1] : null
  }
*/
