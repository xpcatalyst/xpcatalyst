<script setup lang="ts">
import type { BaseButtonProps } from '~/components/ui/button'

const { label = 'Login', ...buttonProps } = defineProps<{ label?: string, loading: boolean } & BaseButtonProps>()
defineEmits(['login'])
//      v-if="loading || !user"
</script>

<template>
  <Button
    v-bind="buttonProps"
    class="rounded-full text-lg font-light"
    :disabled="loading"
    @click="$emit('login')"
  >
    {{ loading ? 'Loading...' : label }}
    <Icon
      v-if="loading"
      :name="loading ? 'ph:circle-notch-bold' : 'ph:github-logo-fill'"
      :class="loading ? 'animate-spin' : ''"
      class="ms-1"
    />
  </Button>
</template>
