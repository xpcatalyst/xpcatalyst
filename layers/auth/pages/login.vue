<script setup lang="ts">
import { Button } from '~/components/ui/button'

const supabase = useSupabaseClient()
// const user = useSupabaseUser()

const signInWithGithub = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  if (error) console.log(error)
}

// watch(user, () => {
//   if (user.value) {
//     // Redirect to protected page
//     console.log('user', user.value)
//     // return navigateTo('/')
//   }
// }, { immediate: true })
</script>

<template>
  <Button
    class="w-fit"
    @click="signInWithGithub"
  >
    Sign In with github
  </Button>
</template>
