import { ERRORS, type IAuthRepository, type User } from '@@/layers/auth'
import { failure, success, type Result } from '@/shared'

export const createLoginWithProviderUseCase = (repository: IAuthRepository) => ({
  execute: async (provider: string): Promise<Result<User>> => {
    const result = await repository.loginWithProvider(provider)
    if (!result.success) {
      return failure(ERRORS.LOGIN_FAILED)
    }
    return success(result.value)
  },
})
