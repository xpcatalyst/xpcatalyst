import { describe, it, expect, beforeEach } from 'vitest'
import { createAddUserUseCase, createInMemoryRepository, USECASE_ERRORS } from '@@/layers/auth/'
import { success, failure, PASSWORD_ERRORS, EMAIL_ERRORS } from '@/shared'

describe('AddUserUseCase', () => {
  let repository: ReturnType<typeof createInMemoryRepository>
  let addUserUseCase: ReturnType<typeof createAddUserUseCase>

  beforeEach(() => {
    repository = createInMemoryRepository()
    addUserUseCase = createAddUserUseCase(repository)
  })

  const validUser = {
    email: 'test@example.com',
    password: 'ValidPassword1!',
  }

  it('should add a new user successfully', async () => {
    const result = await addUserUseCase.execute(validUser)

    expect(result).toEqual(success({ id: '1', email: validUser.email }))
  })

  it('should return failure when user already exists', async () => {
    await addUserUseCase.execute(validUser)
    const result = await addUserUseCase.execute(validUser)

    expect(result).toEqual(failure(USECASE_ERRORS.USER_ALREADY_EXISTS))
  })

  it.each([
    { scenario: 'password is too short', input: { ...validUser, password: 'short' }, expectedError: PASSWORD_ERRORS.TOO_SHORT },
    { scenario: 'email is invalid', input: { ...validUser, email: 'invalid-email' }, expectedError: EMAIL_ERRORS.INVALID },
  ])('should return failure when $scenario', async ({ input, expectedError }) => {
    const result = await addUserUseCase.execute(input)

    expect(result).toEqual(failure(expectedError))
  })
})
