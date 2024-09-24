<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const user = useSupabaseUser()
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Hello {{ user?.user_metadata.full_name }} </p>
    <pre>{{ user }}</pre>
  </div>
</template>
