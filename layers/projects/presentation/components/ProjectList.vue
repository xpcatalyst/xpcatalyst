<script lang="ts" setup>
import { mockProjects } from '../../tests/projects.mock'
</script>

<template>
  <ProjectCard
    v-for="project in mockProjects"
    :key="project.id"
    :name="project.name"
    :description="project.description"
  />
</template>
