export default defineNuxtRouteMiddleware((_, to) => {
  const user = useSupabaseUser()
  if (!user.value) {
    return navigateTo(`/login?redirectTo=${to.path}`)
  }
})
