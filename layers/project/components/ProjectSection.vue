<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock";
import { useProjects } from '../composables/useProjects';

const { filteredProjects, updateSearchTerm } = useProjects(mockProjects);
</script>

<template>
  <section class="container my-8">
    <ProjectListSearch @update:search="updateSearchTerm" />
    <ProjectList :projects="filteredProjects" />
  </section>
</template>