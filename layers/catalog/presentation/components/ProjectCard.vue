<script lang="ts" setup>
defineProps<{ name: string, description: string }>()
</script>

<template>
  <div class="border p-8 rounded-xl bg-white">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
