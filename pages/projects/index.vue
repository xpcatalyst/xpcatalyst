<script setup lang="ts">
const projectStore = useProjectStore();
await callOnce(projectStore.fetch);
//await projectStore.fetch();
//await useAsyncData("projects", () => projectStore.fetchProjects());
// const { getFilteredProjects } = storeToRefs(projectStore);

const searchTerm = ref("");
</script>

<template>
  <main>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-col gap-8 py-8">
      <ProjectFilter v-model="searchTerm" />
      <ProjectList :projects="projectStore.getFilteredProjects(searchTerm)" />
    </div>
  </main>
</template>
