<script setup lang="ts">
import { ProjectList, type Project, mockProjects } from '@/project';
const { data : projects } = await useFetch<Project[]>('http://localhost:3001/projects')
</script>

<template>
    <BaseH1>Projects</BaseH1>
    <ProjectList :projects="projects ?? undefined" />
</template>
