<script setup lang="ts">
import { ProjectList, useProjects } from '@/project';

const {
  loading,
  error,
  projects,
  displayedProjects,
  fetchProjects,
  loadMoreProjects
} = useProjects();

if (!projects.value.length) {
  await fetchProjects();
}

</script>

<template>
  <section class="p-8">
    <BaseH1>Projects</BaseH1>

    <div v-if="error">
      <BaseError :error="error" />
    </div>
    <div v-else class="flex flex-col gap-8">

      <ProjectList :projects="displayedProjects" :loading="loading" />

      <button :disabled="displayedProjects.length >= projects.length"
        class="py-2 text-base w-fit rounded-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-20 disabled:pointer-events-none"
        data-test="load-more-button" @click="loadMoreProjects">
        Load More
      </button>
    </div>
  </section>
</template>
