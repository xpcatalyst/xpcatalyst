<script lang="ts" setup>
import { mockProjects } from "../utils/project.mock"
</script>

<template>
  <section>
    <h2>Projects</h2>
    <ProjectList :projects="mockProjects" />
  </section>
</template>
