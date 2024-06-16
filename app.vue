<script setup lang="ts">
import { ProjectList, type Project, useProjectStore } from '@/project';

const projectStore = useProjectStore();
//const { data : projects } = await useFetch<Project[]>('http://localhost:3001/projects')
if (!projectStore.projects.length) {
  await projectStore.fetchProjects();
}
</script>

<template>
    <BaseH1>Projects</BaseH1>
    <ProjectList :projects="projectStore.projects" />
</template>
