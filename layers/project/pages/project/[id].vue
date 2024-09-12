<script lang="ts" setup>
import { mockProjects } from '../../utils/project.mock'
import { useProjects } from '../../composables/useProjects'

const route = useRoute()
const { getProject } = useProjects(mockProjects)

const project = getProject(Number(route.params.id))
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <p class="description">
      {{ project.description }}
    </p>
  </div>
  <div v-else>
    <h1>No project</h1>
    <p>pas de proj</p>
  </div>
</template>
