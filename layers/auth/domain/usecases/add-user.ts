import { USECASE_ERRORS, validateCredentials, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'
import { failure, success, type Result } from '@/shared'

export const createAddUserUseCase = (repository: IAuthRepository) => ({
  execute: async (credentials: Credentials): Promise<Result<User>> => {
    const validatedCredentials = validateCredentials(credentials)
    if (!validatedCredentials.success) {
      return validatedCredentials
    }

    const validatedEmail = validatedCredentials.value.email

    const existingUser = await repository.getUserByEmail(validatedEmail)
    if (existingUser.success) {
      return failure(USECASE_ERRORS.USER_ALREADY_EXISTS)
    }

    const user = await repository.addUser({ ...credentials, email: validatedEmail })
    if (!user.success) {
      return failure(USECASE_ERRORS.USER_CREATION_FAILED)
    }

    return success(user.value)
  },
})
