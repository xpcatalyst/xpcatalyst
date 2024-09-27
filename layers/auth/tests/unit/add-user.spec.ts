import { describe, it, expect } from 'vitest'
import { createAddUserUseCase, createInMemoryRepository, USECASE_ERRORS } from '@@/layers/auth/'
import { success, failure, PASSWORD_ERRORS, EMAIL_ERRORS } from '@/shared'

describe('AddUserUseCase', () => {
  it('should add a new user successfully', async () => {
    const repository = createInMemoryRepository()
    const addUserUseCase = createAddUserUseCase(repository)

    const result = await addUserUseCase.execute({ email: 'test@example.com', password: 'ValidPassword1!' })
    expect(result).toEqual(success({ id: '1', email: 'test@example.com' }))
  })

  it('should return failure when user already exists', async () => {
    const repository = createInMemoryRepository()
    const addUserUseCase = createAddUserUseCase(repository)

    await addUserUseCase.execute({ email: 'test@example.com', password: 'ValidPassword1!' })
    const result = await addUserUseCase.execute({ email: 'test@example.com', password: 'ValidPassword1!' })

    expect(result).toEqual(failure(USECASE_ERRORS.USER_ALREADY_EXISTS))
  })

  it('should return failure when password is invalid', async () => {
    const repository = createInMemoryRepository()
    const addUserUseCase = createAddUserUseCase(repository)

    const result = await addUserUseCase.execute({ email: 'test@example.com', password: 'short' })

    expect(result).toEqual(failure(PASSWORD_ERRORS.TOO_SHORT))
  })

  it('should return failure when email is invalid', async () => {
    const repository = createInMemoryRepository()
    const addUserUseCase = createAddUserUseCase(repository)

    const result = await addUserUseCase.execute({ email: 'invalid-email', password: 'ValidPassword1!' })
    expect(result).toEqual(failure(EMAIL_ERRORS.INVALID))
  })
})
