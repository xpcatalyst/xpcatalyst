<script setup lang="ts">
defineProps<{ features: string[] }>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">
      Key Features
    </h2>
    <div
      v-for="feat in features"
      :key="feat"
      class="py-1"
    >
      ⚬ {{ feat }}
    </div>
  </div>
</template>
