import { USECASE_ERRORS, type IAuthRepository, type User } from '@@/layers/auth'
import { failure, success, type Email, type Result } from '@/shared'

export const createGetUserUseCase = (repository: IAuthRepository) => ({
  execute: async (email: Email): Promise<Result<User>> => {
    const user = await repository.getUserByEmail(email)
    if (!user.success) {
      return failure(USECASE_ERRORS.USER_NOT_FOUND)
    }
    return success(user.value)
  },
})
