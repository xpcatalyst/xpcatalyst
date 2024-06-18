<script setup lang="ts">
import { ProjectList, useProjectStore } from '@/project';

const projectStore = useProjectStore();
if (!projectStore.projects.length) {
  await projectStore.fetchProjects();
}
//v-if="projectStore.projects.length > 0"
</script>

<template>
    <BaseH1>Projects</BaseH1>
    <ProjectList :projects="projectStore.projects" />
</template>
