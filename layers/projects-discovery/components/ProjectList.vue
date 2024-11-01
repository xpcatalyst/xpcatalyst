<script lang="ts" setup>
import { mockProjects } from '../tests/projects.mock'
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectCard
      v-for="project in mockProjects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
    />
  </div>
</template>
