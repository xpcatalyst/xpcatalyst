<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
// import { type BadgeVariants, badgeVariants } from '.'
import { cn } from '@/lib/utils'

const props = defineProps<{
  rating: number;
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex items-center gap-1 text-xs', props.class)">
    <Icon name="fe:star" />{{ rating }}
  </div>
</template>
