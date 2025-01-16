<script lang="ts" setup>
import type { BaseButtonProps } from '~/components/ui/button'

const supabase = useSupabaseClient()

const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  console.log(data)
  if (error) console.log(error)
}

const { label = 'Sign In', ...buttonProps } = defineProps<{ label?: string } & BaseButtonProps>()
</script>

<template>
  <Button
    v-bind="buttonProps"
    class="rounded-full text-lg font-light"
    @click="signInWithGithub"
  >
    {{ label }}
    <Icon
      name="ph:github-logo-fill"
      class="ms-1"
    />
  </Button>
</template>
