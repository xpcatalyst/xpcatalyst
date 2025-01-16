<script lang="ts" setup>
const supabase = useSupabaseClient()

const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  console.log(data)
  if (error) console.log(error)
}
</script>

<template>
  <Button
    class="rounded-full text-lg font-light"
    @click="signInWithGithub"
  >
    Login
    <Icon
      name="ph:github-logo-fill"
      class="ms-2"
    />
  </Button>
</template>
