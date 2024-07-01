<script lang="ts" setup>
import { type Project,  ProjectListItem } from ".."
defineProps<{ projects?: Project[]}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectListItem v-for="project in projects" :key="`project-item-${project.id}`" :project="project"
      data-test="project-item" />
  </div>
</template>