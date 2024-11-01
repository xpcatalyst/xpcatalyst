<script lang="ts" setup>
import { projectsTemplates } from '@@/db'
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <ProjectTemplateCard
      v-for="tpl in projectsTemplates"
      :key="tpl.id"
      :project="tpl"
    />
  </div>
</template>
