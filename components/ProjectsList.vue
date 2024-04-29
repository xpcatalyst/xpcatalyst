<script setup lang="ts">
import { type IProject } from "@/types/projects.interface";
const { data: projects } = await useFetch<{ data: IProject[] }>(
  "/api/projects"
);
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectsListCard v-for="project in projects?.data" :project />
  </div>
</template>
