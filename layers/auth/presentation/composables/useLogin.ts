import type { Credentials, ILoginUseCase } from '@@/layers/auth'
import { createLoginUseCase, createAuthRepository } from '@@/layers/auth'

export const useLogin = (customLoginUseCase?: ILoginUseCase) => {
  const loginUseCase = customLoginUseCase || createLoginUseCase(createAuthRepository())

  const email = ref('')
  const password = ref('')
  const error = ref('')
  const success = ref(false)
  const loading = ref(false)

  const isFormEmpty = computed(() => email.value.trim() === '' || password.value.trim() === '')

  const isSubmitDisabled = computed(() => loading.value || isFormEmpty.value)

  const login = async () => {
    if (isFormEmpty.value) {
      return
    }

    loading.value = true
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

    loading.value = false
  }

  return {
    email,
    password,
    loading: readonly(loading),
    error: readonly(error),
    success: readonly(success),
    isSubmitDisabled: readonly(isSubmitDisabled),
    login,
  }
}
