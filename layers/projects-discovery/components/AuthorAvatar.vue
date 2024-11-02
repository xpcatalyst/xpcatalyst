<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { User } from '~~/db'

const props = defineProps<{ author: User | undefined }>()
const initials = computed(() =>
  (props.author?.firstName?.charAt(0) || '') + (props.author?.lastName?.charAt(0) || ''),
)
</script>

<template>
  <div class="flex items-center gap-2">
    <Avatar>
      <AvatarFallback>{{ initials }}</AvatarFallback>
    </Avatar>
    <div class="flex flex-col text-sm leading-tight">
      <span>{{ author?.firstName }}</span>
      <span>{{ author?.lastName }}</span>
    </div>
  </div>
</template>
