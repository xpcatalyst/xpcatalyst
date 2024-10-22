import { createSubscribeUseCase, type ISubscribeUseCase } from '../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../repositories/in-memory-repository'

export const ERRORS = {
  REQUIRED: 'Email address is required',
} as const

export const BUTTON_TEXT = {
  SUBSCRIBE: 'Stay Updated',
  LOADING: 'Loading...',
}

export const useNewsletter = (customSubscribeUseCase?: ISubscribeUseCase) => {
  const subscribeUseCase = customSubscribeUseCase || createSubscribeUseCase(createInMemoryRepository())

  const email = ref('')
  const error = ref<string | null>(null)
  const success = ref<boolean | null>(null)
  const loading = ref(false)

  const isEmpty = computed(() => {
    return email == null || email.value.trim() === ''
  })

  const isButtonDisabled = computed(() => {
    return loading.value || isEmpty.value
  })

  const buttonText = computed(() => loading.value ? BUTTON_TEXT.LOADING : BUTTON_TEXT.SUBSCRIBE)

  const setError = (_error: string | Error | null) => {
    if (typeof _error === 'string') {
      error.value = _error
    }
    else if (_error instanceof Error) {
      error.value = _error.message
    }
    else {
      error.value = null
    }
  }

  const subscribe = async () => {
    if (isEmpty.value) {
      setError(ERRORS.REQUIRED)
      return
    }

    loading.value = true

    const result = await subscribeUseCase.execute(email.value) // handle Email verification
    if (result.success) {
      success.value = true
      email.value = ''
      setError(null)
    }
    else {
      success.value = false
      setError(result.error)
    }
    loading.value = false
  }

  return {
    email,
    subscribe,
    loading: readonly(loading),
    error: readonly(error),
    success: readonly(success),
    isButtonDisabled: readonly(isButtonDisabled),
    buttonText: readonly(buttonText),
  }
}
