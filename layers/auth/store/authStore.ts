import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const loginStatus = ref(true)

  return {
    loginStatus,
  }
})
