<script lang="ts" setup>
import { type Project } from "../types/project.types.js"
import { NO_PROJECT_MESSAGE } from "../utils/project.constants";

defineProps<{ projects: Project[] }>()
</script>

<template>
  <div v-if="projects.length > 0">
    <ProjectListCard v-for="(project) in projects" :key="`${project.id}-project-item`" :project="project"
      data-test="project-item" />
  </div>
  <div v-else>
    <p>{{ NO_PROJECT_MESSAGE }}</p>
  </div>
</template>
