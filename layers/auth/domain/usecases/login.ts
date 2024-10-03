import { validateCredentials, USECASE_ERRORS, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'
import { failure, success, type Result } from '@/shared'

/*
// Use case == Interactor?

Ports define the interfaces that the application core expects to interact with. In our case, we have two main types of ports:
a. Input Ports (Use Case Interfaces):
These are defined in the domain layer and implemented by use cases. For example:
*/
export interface ILoginUseCase {
  execute(credentials: Credentials): Promise<Result<User>>
}

export const createLoginUseCase = (repository: IAuthRepository): ILoginUseCase => ({
  execute: async (credentials: Credentials): Promise<Result<User>> => {
    const validatedCredentials = validateCredentials(credentials)
    if (!validatedCredentials.success) {
      return failure(USECASE_ERRORS.INVALID_CREDENTIALS) // Generic error for the user
    }

    const existingUser = await repository.getUserByEmail(credentials.email)
    if (!existingUser.success) {
      return failure(USECASE_ERRORS.INVALID_CREDENTIALS)
    }

    const loginResult = await repository.login(credentials)
    if (!loginResult.success) {
      return failure(USECASE_ERRORS.LOGIN_FAILED)
    }

    return success(loginResult.value)
  },
})
