<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
// TODO: model duplicates
//const model = defineModel<string>({ default: "" });

// Sort
// popularity desc/asc
// date desc/asc

// stack front, ui, back, data, hosting, mobile, services, tooling
// workflow, needs, features
</script>

<template>
  <div class="bg-white border p-4 flex gap-4">
    <ProjectFilterSearch />
    <!-- <ProjectFilterTags /> -->
    <ProjectFilterSelect />
  </div>
</template>
