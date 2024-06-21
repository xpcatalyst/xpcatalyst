<script setup lang="ts">
import { ProjectList, useProjects } from '@/project';

// const projectStore = useProjectStore();
// if (!projectStore.projects.length) {
//   await projectStore.fetchProjects();
// }
//v-if="projectStore.projects.length > 0"

const { projects, loading, error, fetchProjects } = useProjects();
if (!projects.value.length) {
  await fetchProjects();
}
</script>

<template>
    <BaseH1>Projects</BaseH1>
    <ProjectList :projects="projects" />
</template>
