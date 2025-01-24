import { createUser, type User } from '../domain/entities/User'

export const BUTTON_TEXT = {
  LOGIN: 'Login',
  LOGIN_GITHUB: 'Login with GitHub',
  LOADING: 'Loading...',
}

const user = ref<User | null> (null)
const loading = ref(true)
const isAuthenticated = computed(() => !!user.value)
const loginText = computed(() => loading.value && !isAuthenticated.value ? BUTTON_TEXT.LOADING : BUTTON_TEXT.LOGIN)
const loginGithubText = computed(() => loading.value && !isAuthenticated.value ? BUTTON_TEXT.LOADING : BUTTON_TEXT.LOGIN_GITHUB)

export const useAuth = () => {
  const checkAuth = async () => {
    loading.value = true
    try {
      const client = useSupabaseUser()
      user.value = client.value ? createUser(client.value) : null
    }
    finally {
      loading.value = false
    }
  }

  const signIn = async () => {
    loading.value = true
    const client = useSupabaseClient()
    const { error } = await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `/confirm`,
      },
    })
    if (error) throw error
  }

  const signOut = async () => {
    const client = useSupabaseClient()
    await client.auth.signOut()
    user.value = null
  }

  const confirmAuth = async () => {
    await checkAuth()
    if (isAuthenticated) {
      navigateTo('/', { replace: true })
    }
  }

  return {
    loading,
    isAuthenticated,
    user,
    loginText,
    loginGithubText,
    signIn,
    signOut,
    confirmAuth,
    checkAuth,
  }
}
