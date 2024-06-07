<script lang="ts" setup>
import { type Project } from "../"
defineProps<{ projects?: Project[]}>()
</script>

<template>
  <div>
  <div v-for="project in projects" :key="`project-item-${project.id}`" data-test="project-item"></div>
  </div>
</template>