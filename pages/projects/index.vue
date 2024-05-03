<script setup lang="ts">
const projectStore = useProjectStore();
await callOnce(projectStore.fetch);
//await projectStore.fetch();
//await useAsyncData("projects", () => projectStore.fetchProjects());
// const { getFilteredProjects } = storeToRefs(projectStore);

const searchTerm = defineModel<string>({ default: "" });
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-row gap-8">
      <div class="w-1/4 border-r pe-8">
        <input
          v-model="searchTerm"
          class="bg-gray-50 border p-4 text-xl w-full"
          type="text"
        />
      </div>
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
