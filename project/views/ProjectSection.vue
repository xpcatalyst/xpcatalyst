<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ProjectList, useProjects } from '@/project';

const {
  loading,
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
  <section>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-col gap-8">

      <ProjectList :projects="displayedProjects" :loading="loading" />

      <button v-if="projects.length > displayedProjects.length"
        class="py-2 text-base w-fit rounded-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90"
        data-test="load-more-button" @click="loadMoreProjects">
        Load More
      </button>
    </div>
  </section>
</template>
