import { useAuthStore } from '../../store/authStore'
import { success, failure } from '~/shared/result'

type Credentials = {
  email: string
  password: string
}

async function fakeLogin(email: string, password: string): Promise<Result<Credentials>> {
  await new Promise(resolve => setTimeout(resolve, 2000))

  if (email === 'user@example.com' && password === 'ValidPassword1!') {
    return success({ email, password })
  }
  else {
    return failure('Invalid credentials')
  }
}

export const useLogin = () => {
  const router = useRouter()
  const authStore = useAuthStore()

  const email = ref('user@example.com')
  const password = ref('ValidPassword1!')
  const error = ref('')
  const successBool = ref(false)
  const loading = ref(false)

  const isFormEmpty = computed(() => email.value.trim() === '' || password.value.trim() === '')
  const isSubmitDisabled = computed(() => loading.value || isFormEmpty.value)
  const submitButtonText = computed(() => loading.value ? 'Loading...' : 'Login')

  const login = async () => {
    if (isSubmitDisabled.value) {
      return
    }

    loading.value = true
    error.value = ''
    const result = await fakeLogin(email.value, password.value)

    if (result.success) {
      successBool.value = true
      authStore.loginStatus = true
      await router.push('/')
    }
    else {
      successBool.value = false
      error.value = result.error as string // Warning Error type
    }

    loading.value = false
  }

  return {
    email,
    password,
    submitButtonText: readonly(submitButtonText),
    loading: readonly(loading),
    error: readonly(error),
    successBool: readonly(successBool),
    isSubmitDisabled: readonly(isSubmitDisabled),
    login,
  }
}
