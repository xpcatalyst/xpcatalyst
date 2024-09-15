import type { ICredentials, IUser } from '@@/layers/auth'

export interface IRepository {
  login: (credentials: ICredentials) => Promise<IUser>
  loginWithProvider: (provider: string) => Promise<void>
  logout: () => Promise<void>
}
