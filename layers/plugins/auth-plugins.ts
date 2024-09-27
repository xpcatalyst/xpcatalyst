import { createLoginUseCase, createAuthRepository } from '@@/layers/auth'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const authRepository = createAuthRepository()
  const loginUseCase = createLoginUseCase(authRepository)

  return {
    provide: {
      loginUseCase,
    },
  }
})
