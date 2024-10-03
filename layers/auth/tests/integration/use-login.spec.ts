import { beforeEach, describe, expect, it } from 'vitest'
import { createInMemoryRepository, createLoginUseCase, USECASE_ERRORS, useLogin, type IAuthRepository, type ILoginUseCase } from '@@/layers/auth'

describe('useLogin', () => {
  let inMemoryRepository: IAuthRepository
  let loginUseCase: ILoginUseCase

  beforeEach(async () => {
    inMemoryRepository = createInMemoryRepository()
    loginUseCase = createLoginUseCase(inMemoryRepository)

    await inMemoryRepository.addUser({
      email: 'test@example.com',
      password: 'ValidPassword1!',
    })
  })

  it('initializes with default values', () => {
    const { email, password, error, success } = useLogin(loginUseCase)

    expect(email.value).toBe('')
    expect(password.value).toBe('')
    expect(error.value).toBe('')
    expect(success.value).toBe(false)
  })

  it('successfully logs in with correct credentials', async () => {
    const { email, password, success, login } = useLogin(loginUseCase)
    email.value = 'test@example.com'
    password.value = 'ValidPassword1!'

    await login()

    expect(success.value).toBe(true)
  })

  it('fails to log in with non-existent user', async () => {
    const { login, email, password, success, error } = useLogin(loginUseCase)
    email.value = 'nonexistent@example.com'
    password.value = 'password123'

    await login()

    expect(success.value).toBe(false)
    expect(error.value).toBe(USECASE_ERRORS.INVALID_CREDENTIALS)
  })
})
