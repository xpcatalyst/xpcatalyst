import { describe, it, expect } from 'vitest'
import { createInMemoryRepository, createLoginUseCase } from '@@/layers/auth/'
import { success } from '@/shared/result'

describe('Login', () => {
  it('should log in successfully with valid email and password', async () => {
    const repository = createInMemoryRepository()
    const loginUseCase = createLoginUseCase(repository)
    await repository.addUser({ email: 'test@example.com', password: 'ValidPassword1!' })

    const result = await loginUseCase.execute({ email: 'test@example.com', password: 'ValidPassword1!' })
    expect(result).toEqual(success({ id: '1', email: 'test@example.com' }))
  })
})
