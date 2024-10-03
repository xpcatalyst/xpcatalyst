import type { Credentials, ILoginUseCase } from '@@/layers/auth'
import { createLoginUseCase, createAuthRepository } from '@@/layers/auth'

export const useLogin = (customLoginUseCase?: ILoginUseCase) => {
  const loginUseCase = customLoginUseCase || createLoginUseCase(createAuthRepository())

  const email = ref('')
  const password = ref('')
  const error = ref('')
  const success = ref(false)

  const login = async () => {
    const credentials: Credentials = { email: email.value, password: password.value }
    const result = await loginUseCase.execute(credentials)
    if (result.success) {
      success.value = true
      error.value = ''
    }
    else {
      success.value = false
      error.value = result.error
    }
  }

  return {
    email,
    password,
    error: readonly(error),
    success: readonly(success),
    login,
  }
}
