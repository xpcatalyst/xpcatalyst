import { validateCredentials, USECASE_ERRORS, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'
import { failure, success, type Result } from '@/shared'

export interface ILoginUseCase {
  execute(credentials: Credentials): Promise<Result<User>>
}

export const createLoginUseCase = (repository: IAuthRepository): ILoginUseCase => ({
  execute: async (credentials: Credentials): Promise<Result<User>> => {
    const validatedCredentials = validateCredentials(credentials)
    if (!validatedCredentials.success) {
      return failure(USECASE_ERRORS.INVALID_CREDENTIALS) // Generic error for the use
    }

    const existingUser = await repository.getUserByEmail(validatedCredentials.value.email)
    if (!existingUser.success) {
      return failure(USECASE_ERRORS.INVALID_CREDENTIALS)
    }

    const loginResult = await repository.login(validatedCredentials.value)
    if (!loginResult.success) {
      return failure(USECASE_ERRORS.LOGIN_FAILED)
    }

    return success(loginResult.value)
  },
})

// Use case == Interactor?
