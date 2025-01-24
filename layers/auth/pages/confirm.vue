<script setup lang="ts">
const { confirmAuth } = useAuth()

onMounted(() => {
  confirmAuth()
})
</script>

<template>
  <div class="grid items-center justify-center h-full text-xl animate-pulse">
    Waiting for login...
  </div>
</template>
