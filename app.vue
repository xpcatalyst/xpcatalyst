<script setup lang="ts">
import { ProjectList, useProjects } from '@/project';

const { projects, loading, fetchProjects, displayedProjects, loadMoreProjects } = useProjects();

if (!projects.value.length) {
  await fetchProjects();
}
</script>

<template>
    <BaseH1>Projects</BaseH1>

    <div class="flex flex-col gap-8">
    
    <ProjectList :projects="displayedProjects" :loading="loading"/>

    <button 
    class="px-3 py-2 bg-purple-900 text-white rounded"
      v-if="projects.length > displayedProjects.length" 
      @click="loadMoreProjects" 
      data-test="load-more-button">
        Load More
      </button>
    </div>
</template>
