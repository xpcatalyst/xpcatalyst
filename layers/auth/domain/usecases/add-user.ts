import { ERRORS, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'

export const createAddUserUseCase = (repository: IAuthRepository) => ({
  execute: async (credentials: Credentials): Promise<User | null> => {
    const existingUser = await repository.getUserByEmail(credentials.email)
    if (existingUser) {
      throw new Error(ERRORS.USER_ALREADY_EXISTS)
    }
    return repository.addUser(credentials)
  },
})

export type AddUserUseCase = ReturnType<typeof createAddUserUseCase>
