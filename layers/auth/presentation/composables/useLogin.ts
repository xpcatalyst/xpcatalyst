import type { Credentials, ILoginUseCase, User } from '@@/layers/auth'

export const useLogin = (loginUseCase: ILoginUseCase) => {
  const user = ref<User | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const login = async (credentials: Credentials) => {
    isLoading.value = true
    error.value = null

    const result = await loginUseCase.execute(credentials)
    if (result.success) {
      user.value = result.value
    }
    else {
      user.value = null
      error.value = result.error
    }
    isLoading.value = false
  }

  return { user, error, isLoading, login }
}
