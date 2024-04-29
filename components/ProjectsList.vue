<script setup lang="ts">
const { data } = await useFetch("/api/projects");
console.log(data);
</script>

<template>
  <ul v-for="project in data?.data">
    <li>{{ project.title }}</li>
  </ul>
</template>
