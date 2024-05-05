<script setup lang="ts">
const projectStore = useProjectStore();
await callOnce(projectStore.fetch);
//await projectStore.fetch();
//await useAsyncData("projects", () => projectStore.fetchProjects());
// const { getFilteredProjects } = storeToRefs(projectStore);

const searchTerm = ref("");
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-col gap-8 py-8">
      <ProjectFilter v-model="searchTerm" />

      <main>
        <ProjectList :projects="projectStore.getFilteredProjects(searchTerm)" />
        <div
          v-if="
            searchTerm && !projectStore.getFilteredProjects(searchTerm).length
          "
          class="p-4 bg-purple-200"
        >
          <p>No results found!</p>
        </div>
      </main>
    </div>
  </div>
</template>
