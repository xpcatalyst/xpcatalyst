import { ERRORS, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'
import { createGetUserUseCase } from './get-user'
import { createEmail } from '@/shared/email'
import { failure, success, type Result } from '@/shared/result'
import { createPassword } from '~/shared/password'

// With Domain-specific errors
// The repository can return a generic error or success result,
// while the use case interprets these results and translates them into more meaningful application-specific errors.
export const createAddUserUseCase = (repository: IAuthRepository) => ({
  execute: async (credentials: Credentials): Promise<Result<User>> => {
    const password = createPassword(credentials.password)
    if (!password.success) {
      return failure(password.error)
    }

    const email = createEmail(credentials.email)
    if (!email.success) {
      return failure(email.error)
    }

    const getUser = createGetUserUseCase(repository)
    const existingUser = await getUser.execute(email.value)
    if (existingUser.success) {
      return failure(ERRORS.USER_ALREADY_EXISTS)
    }

    const user = await repository.addUser({ ...credentials, email: email.value })
    if (!user.success) {
      return failure(ERRORS.USER_CREATION_FAILED)
    }

    return success(user.value)
  },
})

// export type AddUserUseCase = ReturnType<typeof createAddUserUseCase>
