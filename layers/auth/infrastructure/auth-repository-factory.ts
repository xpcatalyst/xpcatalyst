import { type IAuthRepository, createSupabaseRepository, createInMemoryRepository } from '@@/layers/auth'

export const createAuthRepository = (): IAuthRepository => {
  if (process.env.NODE_ENV === 'test') {
    return createInMemoryRepository()
  }
  return createSupabaseRepository()
}
