import { describe, it, expect, beforeEach } from 'vitest'
import { createLoginUseCase, createInMemoryRepository, USECASE_ERRORS } from '@@/layers/auth/'
import { failure, success } from '@/shared/result'

describe('LoginUseCase', () => {
  let repository: ReturnType<typeof createInMemoryRepository>
  let loginUseCase: ReturnType<typeof createLoginUseCase>

  const validCredentials = {
    email: 'test@example.com',
    password: 'ValidPassword1!',
  }

  beforeEach(() => {
    repository = createInMemoryRepository()
    loginUseCase = createLoginUseCase(repository)
  })

  it('should log in successfully with valid credentials', async () => {
    await repository.addUser(validCredentials)

    const result = await loginUseCase.execute(validCredentials)

    expect(result).toEqual(success({ id: '1', email: validCredentials.email }))
  })

  it.each([
    { scenario: 'email does not exist', credentials: { ...validCredentials, email: 'nonexistent@example.com' } },
    { scenario: 'password is incorrect', credentials: { ...validCredentials, password: 'WrongPassword123' } },
    { scenario: 'input is invalid', credentials: { email: 'invalid-email', password: 'short' } },
  ])('should return failure when $scenario', async ({ credentials }) => {
    if (credentials.email === validCredentials.email) {
      await repository.addUser(validCredentials)
    }

    const result = await loginUseCase.execute(credentials)

    expect(result).toEqual(failure(USECASE_ERRORS.INVALID_CREDENTIALS))
  })
})
