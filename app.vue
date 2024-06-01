<script setup lang="ts">
import { type Project } from '@/data/types';
const { data : projects} = await useFetch<Project[]>('http://localhost:3001/projects')
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="grid grid-cols-3 gap-8">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>
