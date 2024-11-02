<script lang="ts" setup>
import { projectsTemplates } from '@@/db'

const route = useRoute()

const project = projectsTemplates.find(it => it.slug === route.params.slug)
</script>

<template>
  <div class="container h-full">
    <div
      v-if="project"
      class="h-1/2 grid items-center border"
    >
      <h1 class="text-5xl font-fira border">
        {{ project.title }}
      </h1>
      <p class="description">
        {{ project.description }}
      </p>
    </div>
    <div v-else>
      <h1>No project</h1>
      <p>Please, try again</p>
    </div>
  </div>
</template>
