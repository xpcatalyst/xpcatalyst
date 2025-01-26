<script setup lang="ts">
import type { BaseButtonProps } from '@/components/ui/button'

interface Props extends BaseButtonProps {
  to: string
}

const props = defineProps<Props>()

const sizeClass = computed(() => props.size ? `text-${props.size}` : 'text-base')
</script>

<template>
  <NuxtLink :to="to">
    <Button
      :class="[
        'rounded-full',
        sizeClass,
        props.class,
      ]"
      :variant="variant"
      :size="size"
      :disabled="disabled"
    >
      <slot />
    </Button>
  </NuxtLink>
</template>
