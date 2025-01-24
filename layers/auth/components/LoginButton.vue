<script setup lang="ts">
const props = defineProps<{ loading: boolean, label: string, classes?: string, size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined }>()
const emit = defineEmits(['login'])

const handleClick = () => {
  if (!props.loading) {
    emit('login')
  }
}
</script>

<template>
  <Button
    :disabled="loading"
    class="flex items-center rounded-full"
    :class="classes"
    :size="size"
    @click="handleClick"
  >
    <Icon
      :name="loading ? 'ph:circle-notch-bold' : 'ph:github-logo'"
      class="h-4 w-4"
      :class="loading ? 'animate-spin' : ''"
    />
    {{ label }}
  </Button>
</template>
