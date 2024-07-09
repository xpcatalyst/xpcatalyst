<script lang="ts" setup>
const emit = defineEmits(['update:workflow'])

const updateWorkflow = (event: Event) => {
  emit('update:workflow', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <div>
    <label for="workflow-filter">Filter by Workflow:</label>
    <select id="workflow-filter" @change="updateWorkflow">
      <option value="">All</option>
      <option value="draft">Draft</option>
      <option value="public">Public</option>
      <option value="spec">Spec</option>
      <option value="prototype">Prototype</option>
      <option value="challenge">Challenge</option>
      <option value="mvp">MVP</option>
      <option value="beta">Beta</option>
      <option value="alpha">Alpha</option>
      <option value="archives">Archives</option>
    </select>
  </div>
</template>