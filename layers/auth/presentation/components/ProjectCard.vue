<script lang="ts" setup>
defineProps<{ name: string, description: string }>()
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
