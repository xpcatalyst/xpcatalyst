import type { Credentials, ILoginUseCase, User } from '@@/layers/auth'

//  manages the state and provides an interface to the use case.
export const useLogin = (loginUseCase: ILoginUseCase) => {
  const email = ref('')
  const password = ref('')
  const user = ref<User | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const isFormValid = computed(() => email.value.trim() !== '' && password.value.trim() !== '')

  const login = async () => {
    if (!isFormValid.value) return
    isLoading.value = true
    error.value = null

    const credentials: Credentials = { email: email.value, password: password.value }
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

  return {
    email,
    password,
    user,
    error,
    isLoading,
    login,
    isFormValid,
  }
}

/*

import { ref, computed } from 'vue'
import type { Credentials, ILoginUseCase, User } from '@@/layers/auth'
import { validateEmail, validatePassword } from '@/shared'

export const useLogin = (loginUseCase: ILoginUseCase) => {
  const email = ref('')
  const password = ref('')
  const user = ref<User | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const emailError = computed(() => {
    const result = validateEmail(email.value)
    return result.success ? null : result.error
  })

  const passwordError = computed(() => {
    const result = validatePassword(password.value)
    return result.success ? null : result.error
  })

  const isFormValid = computed(() => !emailError.value && !passwordError.value && email.value.trim() !== '' && password.value.trim() !== '')

  const login = async () => {
    if (!isFormValid.value) return

    isLoading.value = true
    error.value = null

    const result = await loginUseCase.execute({ email: email.value, password: password.value })
    if (result.success) {
      user.value = result.value
    }
    else {
      user.value = null
      error.value = result.error
    }
    isLoading.value = false
  }

  return {
    email,
    password,
    user,
    error,
    isLoading,
    login,
    emailError,
    passwordError,
    isFormValid
  }
}
  */
