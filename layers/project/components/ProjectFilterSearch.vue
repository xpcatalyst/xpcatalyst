<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'

defineProps<{ placeholder?: string }>()

const emit = defineEmits(['update:search'])

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('update:search', input.value)
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input @input="handleInput" id="search" type="text" :placeholder="placeholder" class="pl-10" />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
</template>