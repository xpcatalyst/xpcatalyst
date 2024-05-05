<script setup lang="ts">
import { type IProject } from "../";
defineProps<{ projects?: IProject[] }>();
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectListCard v-for="project in projects" :key="project.id" :project />
  </div>
  <div v-if="projects?.length === 0" class="p-4 bg-purple-200">
    <p>No results found!</p>
  </div>
</template>
