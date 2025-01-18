<script lang="ts" setup>
import type { BaseButtonProps } from '~/components/ui/button'

const { user, avatarUrl, loading, signInWithGithub, logout } = useAuth()

const { label = 'Login', ...buttonProps } = defineProps<{ label?: string } & BaseButtonProps>()
</script>

<template>
  <UserNav
    v-if="user"
    :avatar-url="avatarUrl"
    @logout="logout"
  />
  <Button
    v-else
    v-bind="buttonProps"
    class="rounded-full text-lg font-light"
    :disabled="loading"
    @click="signInWithGithub"
  >
    {{ loading ? 'Loading...' : label }}
    <Icon
      v-if="loading || !user"
      :name="loading ? 'ph:circle-notch-bold' : 'ph:github-logo-fill'"
      :class="loading ? 'animate-spin' : ''"
      class="ms-1"
    />
  </Button>
</template>
