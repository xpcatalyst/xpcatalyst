export function useAuth() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const user = useSupabaseUser()
  const avatarUrl = computed(() => user?.value?.user_metadata?.avatar_url)

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw new Error(error.message)
      await navigateTo('/')
    }
    catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const signInWithGithub = async () => {
    loading.value = true
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' })
      if (error) throw new Error(error.message)
    }
    catch (error) {
      console.error('GitHub sign-in failed:', error)
    }
    finally {
      loading.value = false
    }
  }

  return {
    user,
    avatarUrl,
    loading,
    signInWithGithub,
    logout,
  }
}
