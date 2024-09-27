import { describe, expect, it, vi } from 'vitest'
import { useLogin } from '@@/layers/auth'
import { success } from '~/shared'

describe('useLogin', () => {
  const mockLoginUseCase = {
    execute: vi.fn().mockResolvedValue({ id: '1', email: 'test@example.com' }),
  }

  it('should initialize with default values', () => {
    const { error, isLoading, user } = useLogin(mockLoginUseCase)
    expect(error.value).toBe(null)
    expect(isLoading.value).toBe(false)
    expect(user.value).toBe(null)
  })

  it('should handle successful login', async () => {
    const mockLoginUseCase = {
      execute: vi.fn().mockResolvedValue(success({ id: '1', email: 'test@example.com' })),
    }
    const { login, user, error, isLoading } = useLogin(mockLoginUseCase)

    await login({ email: 'test@example.com', password: 'password123' })

    expect(mockLoginUseCase.execute).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' })

    expect(user.value).toEqual({ id: '1', email: 'test@example.com' })
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })
  it.todo('should handle login failure')
})
