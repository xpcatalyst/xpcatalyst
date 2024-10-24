import { createSubscribeUseCase, type ISubscribeUseCase } from '../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../repositories/in-memory-repository'

export const BUTTON_TEXT = {
  SUBSCRIBE: 'Stay Updated',
  LOADING: 'Loading...',
}

export const SUCCESS = 'Thank you for subscribing! 🎉 You’re now on the list to receive our latest updates, exclusive offers, and exciting news. Stay tuned for your first newsletter!'

export const useNewsletter = (customSubscribeUseCase?: ISubscribeUseCase) => {
  const subscribeUseCase = customSubscribeUseCase || createSubscribeUseCase(createInMemoryRepository())

  const email = ref('')
  const message = ref<string | null>(null)
  const success = ref<boolean | null>(null)
  const loading = ref(false)

  const isEmpty = computed(() => {
    return email == null || email.value.trim() === ''
  })

  const isButtonDisabled = computed(() => {
    return loading.value || isEmpty.value
  })

  const buttonText = computed(() => loading.value ? BUTTON_TEXT.LOADING : BUTTON_TEXT.SUBSCRIBE)

  const subscribe = async () => {
    message.value = null
    loading.value = true

    const result = await subscribeUseCase.execute(email.value)
    if (result.success) {
      success.value = true
      message.value = SUCCESS
      email.value = '' // Reset
    }
    else {
      success.value = false
      if (result.error instanceof Error) {
        message.value = result.error.message
      }
      else message.value = result.error // pass through errors
    }
    loading.value = false
  }

  return {
    email,
    subscribe,
    loading: readonly(loading),
    message: readonly(message),
    success: readonly(success),
    isButtonDisabled: readonly(isButtonDisabled),
    buttonText: readonly(buttonText),
  }
}
