<script setup lang="ts">
defineProps<{ progress: number }>()
</script>

<template>
  <div>
    <p>{{ progress }}% completed</p>
    <div class="w-40 bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        class="h-full bg-green-500 rounded-full transition-all duration-300"
        :style="{ width: progress + '%' }"
      />
    </div>
  </div>
</template>
