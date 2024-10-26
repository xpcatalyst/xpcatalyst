import { createSubscribeUseCase, type ISubscribeUseCase } from '../domain/usecases/subscribe-use-case'
import { createNewsletterRepository } from '../repositories/newsletter-repository-factory'

export const BUTTON_TEXT = {
  SUBSCRIBE: 'Stay Updated',
  LOADING: 'Loading...',
}

export const SUCCESS = 'Welcome to the XP Catalyst newsletter! Stay tuned for updates on our journey, new project opportunities, and ways to make a real impact together.'

export const useNewsletter = (customSubscribeUseCase?: ISubscribeUseCase) => {
  const subscribeUseCase = customSubscribeUseCase || createSubscribeUseCase(createNewsletterRepository())

  const email = ref('')
  const message = ref<string | null>(null)
  const success = ref<boolean | null>(null)
  const loading = ref(false)

  const router = useRouter()

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
      message.value = ''
      email.value = '' // Reset
      await router.push('/newsletter/success')
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
