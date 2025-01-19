export function useAuth() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const user = useSupabaseUser()

  const userData = computed(() => ({
    fullName: user?.value?.user_metadata?.full_name,
    avatarUrl: user?.value?.user_metadata?.avatar_url,
    email: user?.value?.email,
  }))

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
    userData,
    loading,
    signInWithGithub,
    logout,
  }
}
