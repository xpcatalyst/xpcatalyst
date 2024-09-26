import { ERRORS, type IAuthRepository, type User } from '@@/layers/auth'
import type { Email } from '@/shared/email'
import { failure, success, type Result } from '@/shared/result'

export const createGetUserUseCase = (repository: IAuthRepository) => ({
  execute: async (email: Email): Promise<Result<User>> => {
    const user = await repository.getUserByEmail(email)
    if (!user.success) {
      return failure(ERRORS.USER_NOT_FOUND)
    }
    return success(user.value)
  },
})
