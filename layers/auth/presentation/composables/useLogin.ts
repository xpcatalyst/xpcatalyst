import type { Credentials, ILoginUseCase, User } from '@@/layers/auth'

export const useLogin = (loginUseCase: ILoginUseCase) => {
  const user = ref<User | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const login = async (credentials: Credentials) => {
    isLoading.value = true
    error.value = null

    try {
      const result = await loginUseCase.execute(credentials)
      user.value = result.success ? result.value : null
      error.value = result.success ? null : result.error
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'An error occurred'
    }
    finally {
      isLoading.value = false
    }
  }

  return { user, error, isLoading, login }
}
