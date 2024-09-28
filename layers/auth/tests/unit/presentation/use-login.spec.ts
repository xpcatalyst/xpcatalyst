import { describe, expect, it, beforeEach } from 'vitest'
import { useLogin, createLoginUseCase, createInMemoryRepository, type IAuthRepository } from '@@/layers/auth'

describe('useLogin', () => {
  let loginUseCase: ReturnType<typeof createLoginUseCase>
  let repository: IAuthRepository

  beforeEach(() => {
    repository = createInMemoryRepository()
    loginUseCase = createLoginUseCase(repository)
  })

  it('should initialize with default values', () => {
    const { error, isLoading, user } = useLogin(loginUseCase)
    expect(error.value).toBe(null)
    expect(isLoading.value).toBe(false)
    expect(user.value).toBe(null)
  })

  it('should handle successful login', async () => {
    const credentials = { email: 'test@example.com', password: 'ValidPassword1!' }
    const { login, user, error, isLoading } = useLogin(loginUseCase)
    await repository.addUser(credentials)

    await login(credentials)

    expect(user.value).toEqual(expect.objectContaining({ email: credentials.email }))
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  it('should handle login failure', async () => {
    const { login, user, error, isLoading } = useLogin(loginUseCase)
    const credentials = { email: 'nonexistent@example.com', password: 'InvalidPassword1!' }

    await login(credentials)

    expect(user.value).toBeNull()
    expect(error.value).toBeTruthy()
    expect(isLoading.value).toBe(false)
  })
})
