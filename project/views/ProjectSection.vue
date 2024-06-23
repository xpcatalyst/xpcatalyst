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

      <Button v-if="projects.length > displayedProjects.length" data-test="load-more-button" @click="loadMoreProjects">
        Load More
      </Button>
    </div>
  </section>
</template>
