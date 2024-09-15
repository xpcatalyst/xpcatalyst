import type { ICredentials, IRepository, IUser } from '@@/layers/auth'

export const createLoginUseCase = (repository: IRepository) => ({
  execute: (credentials: ICredentials): Promise<IUser> => repository.login(credentials),
})

export type LoginUseCase = ReturnType<typeof createLoginUseCase>
