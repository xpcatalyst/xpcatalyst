<script setup lang="ts">
const projectStore = useProjectStore();
await callOnce(projectStore.fetch);
//await projectStore.fetch();
//await useAsyncData("projects", () => projectStore.fetchProjects());
//await useAsyncData('user', () => store.fetchUser())
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-row">
      <div class="w-1/4">sidebar</div>
      <main>
        <ProjectList :projects="projectStore.projects" />
      </main>
    </div>
  </div>
</template>
