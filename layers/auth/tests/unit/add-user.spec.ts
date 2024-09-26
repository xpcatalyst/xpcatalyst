import { describe, it, expect } from 'vitest'
import { createAddUserUseCase, createInMemoryRepository, ERRORS } from '@@/layers/auth/'
import { success, failure } from '@/shared/result'

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

    expect(result).toEqual(failure(ERRORS.USER_ALREADY_EXISTS))
  })

  it('should return failure when password is invalid', async () => {
    const repository = createInMemoryRepository()
    const addUserUseCase = createAddUserUseCase(repository)

    const result = await addUserUseCase.execute({ email: 'test@example.com', password: 'short' })

    expect(result.success).toBe(false)
  })
})
