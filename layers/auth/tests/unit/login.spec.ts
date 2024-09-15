import { type IRepository, createLoginUseCase } from '@@/layers/auth'
import { describe, expect, it, vi } from 'vitest'

describe('Login Use Case', () => {
  it('should successfully login with valid credentials', async () => {
    // Arrange
    const mockAuthRepository: IRepository = {
      login: vi.fn().mockResolvedValue({ id: '1', email: 'user@example.com', name: 'John Doe' }),
      loginWithProvider: vi.fn(),
      logout: vi.fn(),
    }
    const loginUseCase = createLoginUseCase(mockAuthRepository)
    // Act
    const result = await loginUseCase.execute({ email: 'user@example.com', password: 'password' })
    // Assert
    expect(result).toStrictEqual({ id: '1', email: 'user@example.com', name: 'John Doe' })
    expect(mockAuthRepository.login).toHaveBeenCalledWith({ email: 'user@example.com', password: 'password' })
  })
})
