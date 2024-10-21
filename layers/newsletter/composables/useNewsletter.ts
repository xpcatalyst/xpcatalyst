import { createSubscribeUseCase, type ISubscribeUseCase } from '../domain/usecases/subscribe-use-case'
import { createInMemoryRepository } from '../repositories/in-memory-repository'

export const useNewsletter = (customSubscribeUseCase?: ISubscribeUseCase) => {
  const subscribeUseCase = customSubscribeUseCase || createSubscribeUseCase(createInMemoryRepository())

  const email = ref('')
  const error = ref('')
  const success = ref(false)
  const loading = ref(false)

  const subscribe = async () => {
    const result = await subscribeUseCase.execute(email.value)
    if (result.success) {
      success.value = true
    }
  }

  return {
    email,
    subscribe,
    loading: readonly(loading),
    error: readonly(error),
    success: readonly(success),
  }
}
