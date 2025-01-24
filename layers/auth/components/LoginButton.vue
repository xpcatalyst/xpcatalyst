<script setup lang="ts">
import type { BaseButtonProps } from '@/components/ui/button'

interface Props extends BaseButtonProps {
  loading: boolean
  label: string
}

const props = defineProps<Props>()
const emit = defineEmits(['login'])

const iconSizeClass = computed(() => {
  if (props.size === 'sm') return 'h-3 w-3'
  if (props.size === 'lg') return 'h-6 w-6'
  else return 'h-4 w-4'
})
const sizeClass = computed(() => props.size ? `text-${props.size}` : 'text-base')

const handleClick = () => {
  if (!props.loading) {
    emit('login')
  }
}
</script>

<template>
  <Button
    :disabled="loading"
    :class="[
      'flex items-center rounded-full',
      sizeClass,
      props.class,
    ]"

    :size="size"
    :variant="variant"
    @click="handleClick"
  >
    <Icon
      :name="loading ? 'ph:circle-notch-bold' : 'ph:github-logo'"
      :class="[loading ? 'animate-spin' : '', iconSizeClass]"
    />
    {{ label }}
  </Button>
</template>
