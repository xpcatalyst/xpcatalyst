<script lang="ts" setup>
import { type ProjectSummary } from "../types/project.types"
defineProps<{ project: ProjectSummary }>()
</script>

<template>
  <div>
    {{ project.name }}
    {{ project.description }}
    {{ project.stars }}
    {{ project.workflow }}
    <ul>
      <li v-for="tech in project.stack">
        {{ tech }}
      </li>
    </ul>
  </div>
</template>