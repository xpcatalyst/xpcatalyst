import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useLogin } from '@@/layers/auth'
import { failure, success } from '@/shared'

// Test the useLogin composable with a mocked LoginUseCase.

const mockLoginUseCase = { execute: vi.fn() }

describe('useLogin', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should initialize with default values', () => {
    const { email, password, error, isLoading, user, isFormValid } = useLogin(mockLoginUseCase)
    expect(email.value).toBe('')
    expect(password.value).toBe('')
    expect(error.value).toBe(null)
    expect(isLoading.value).toBe(false)
    expect(user.value).toBe(null)
    expect(isFormValid.value).toBe(false)
  })

  it('should update email and password values', () => {
    const { email, password } = useLogin(mockLoginUseCase)

    email.value = 'test@example.com'
    password.value = 'password123'

    expect(email.value).toBe('test@example.com')
    expect(password.value).toBe('password123')
  })

  it('should handle successful login', async () => {
    const credentials = { email: 'test@example.com', password: 'ValidPassword1!' }
    const mockUser = { id: '1', email: credentials.email }
    mockLoginUseCase.execute.mockResolvedValue(success(mockUser))

    const { login, email, password, user, error, isLoading } = useLogin(mockLoginUseCase)

    email.value = credentials.email
    password.value = credentials.password
    await login()

    expect(mockLoginUseCase.execute).toHaveBeenCalledWith(credentials)
    // expect(user.value).toEqual(expect.objectContaining({ email: credentials.email }))
    expect(user.value).toEqual(mockUser)
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  //  The test is checking if the composable correctly handles and exposes an error when the login use case fails.
  it('should handle login failure', async () => {
    const credentials = { email: 'test@example.com', password: 'InvalidPassword123' }
    mockLoginUseCase.execute.mockResolvedValue(failure('Invalid credentials'))
    const { login, email, password, user, error, isLoading } = useLogin(mockLoginUseCase)

    email.value = credentials.email
    password.value = credentials.password

    await login()

    // ensures that it's correctly passing the provided credentials to the use case.
    expect(mockLoginUseCase.execute).toHaveBeenCalledWith(credentials)

    // It's verifying that the composable updates its internal state correctly after a failed login attempt
    expect(user.value).toBeNull()
    expect(error.value).toBe('Invalid credentials')
    expect(isLoading.value).toBe(false)
  })

  it('should set loading state during login process', async () => {
    const { login, email, password, isLoading } = useLogin(mockLoginUseCase)
    let loadingDuringExecution = false

    mockLoginUseCase.execute.mockImplementation(async () => {
      loadingDuringExecution = isLoading.value
      return success({ id: '1', email: 'test@example.com' })
    })

    email.value = 'test@example.com'
    password.value = 'password123'

    const loginPromise = login()
    expect(isLoading.value).toBe(true)

    await loginPromise
    expect(loadingDuringExecution).toBe(true)
    expect(isLoading.value).toBe(false)
  })

  it('should not attempt login if email or password is empty', async () => {
    const { login, email, password } = useLogin(mockLoginUseCase)

    email.value = ''
    password.value = 'password123'
    await login()
    expect(mockLoginUseCase.execute).not.toHaveBeenCalled()

    email.value = 'test@example.com'
    password.value = ''
    await login()
    expect(mockLoginUseCase.execute).not.toHaveBeenCalled()
  })
})

/*

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useLogin } from '@@/layers/auth'

describe('useLogin', () => {
  const mockLoginUseCase = {
    execute: vi.fn(),
  }

  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should initialize with default values', () => {
    const { email, password, user, error, isLoading } = useLogin(mockLoginUseCase)
    expect(email.value).toBe('')
    expect(password.value).toBe('')
    expect(user.value).toBeNull()
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  it('should validate email and password', () => {
    const { email, password, emailError, passwordError, isFormValid } = useLogin(mockLoginUseCase)

    email.value = 'invalid-email'
    password.value = 'short'
    expect(emailError.value).toBeTruthy()
    expect(passwordError.value).toBeTruthy()
    expect(isFormValid.value).toBe(false)

    email.value = 'valid@email.com'
    password.value = 'ValidPassword1!'
    expect(emailError.value).toBeNull()
    expect(passwordError.value).toBeNull()
    expect(isFormValid.value).toBe(true)
  })

  it('should handle successful login', async () => {
    const { email, password, user, error, isLoading, login } = useLogin(mockLoginUseCase)
    const mockUser = { id: '1', email: 'test@example.com' }
    mockLoginUseCase.execute.mockResolvedValue({ success: true, value: mockUser })

    email.value = 'test@example.com'
    password.value = 'ValidPassword1!'
    await login()

    expect(mockLoginUseCase.execute).toHaveBeenCalledWith({ email: 'test@example.com', password: 'ValidPassword1!' })
    expect(user.value).toEqual(mockUser)
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  it('should handle login failure', async () => {
    const { email, password, user, error, isLoading, login } = useLogin(mockLoginUseCase)
    mockLoginUseCase.execute.mockResolvedValue({ success: false, error: 'Invalid credentials' })

    email.value = 'test@example.com'
    password.value = 'InvalidPassword'
    await login()

    expect(mockLoginUseCase.execute).toHaveBeenCalledWith({ email: 'test@example.com', password: 'InvalidPassword' })
    expect(user.value).toBeNull()
    expect(error.value).toBe('Invalid credentials')
    expect(isLoading.value).toBe(false)
  })
})
*/
