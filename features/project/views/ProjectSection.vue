<script setup lang="ts">
import { useProjects, ProjectList } from '..';

const { projects } = useProjects();
</script>

<template>
  <section class="p-8">
    <BaseH1>Projects</BaseH1>
    <ProjectList :projects="projects" />
  </section>
</template>