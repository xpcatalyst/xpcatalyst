<script lang="ts" setup>
const supabase = useSupabaseClient()

const signInWithGithub = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  if (error) console.log(error)
}
</script>

<template>
  <div class="flex items-center border border-black ps-4 rounded-full overflow-hidden">
    <Icon
      name="ph:github-logo"
      class="me-2"
    />
    <Button
      class="rounded-none text-lg font-light"
      @click="signInWithGithub"
    >
      Sign In
    </Button>
  </div>
</template>
