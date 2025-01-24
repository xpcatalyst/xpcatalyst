export default defineNuxtRouteMiddleware((_to, _from) => {
  const session = useSupabaseSession()

  if (!session.value) {
    return navigateTo('/login')
  }
})
