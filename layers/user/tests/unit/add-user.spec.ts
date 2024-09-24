import { createAddUserUseCase, createInMemoryRepository, ERRORS } from '@@/layers/auth'
import { describe, expect, it } from 'vitest'

describe('Add User Use Case', () => {
  it('should successfully login with valid credentials', async () => {
    const authRepository = createInMemoryRepository()
    const addUser = createAddUserUseCase(authRepository)

    const result = await addUser.execute({ email: 'user@example.com', password: 'password' })

    expect(result).toStrictEqual({ id: '1', email: 'user@example.com' })
  })

  it('should throw an error when the user already exists', async () => {
    const authRepository = createInMemoryRepository()
    const addUser = createAddUserUseCase(authRepository)
    await authRepository.addUser({ email: 'user@example.com', password: 'password' })

    await expect(addUser.execute({ email: 'user@example.com', password: 'password' }))
      .rejects
      .toThrow(ERRORS.USER_ALREADY_EXISTS)
  })
})
