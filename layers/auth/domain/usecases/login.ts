import { ERRORS, type Credentials, type IAuthRepository, type User } from '@@/layers/auth'
import { createGetUserUseCase } from './get-user'
import { createEmail } from '@/shared/email'
import { failure, success, type Result } from '@/shared/result'
import { createPassword, ERRORS as ERRORS_PASSWORD } from '~/shared/password'

// Login Use Case Implementation
export const createLoginUseCase = (repository: IAuthRepository) => ({
  execute: async (credentials: Credentials): Promise<Result<User>> => {
    const email = createEmail(credentials.email)
    if (!email.success) {
      return failure(email.error)
    }

    const getUser = createGetUserUseCase(repository)
    const user = await getUser.execute(email.value)
    if (!user.success) {
      return failure(ERRORS.USER_NOT_FOUND)
    }

    const password = createPassword(credentials.password)
    if (!password.success) { //  || password.value !== user.value.password
      return failure(ERRORS_PASSWORD.INVALID)
    }

    return success(user.value)
  },
})

// export type LoginUseCase = ReturnType<typeof createLoginUseCase>
