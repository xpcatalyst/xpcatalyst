<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <div class="grid items-center justify-center h-full text-xl animate-pulse">
    Waiting for login...
  </div>
</template>
