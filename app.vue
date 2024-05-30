<script setup lang="ts">
import { type Project } from '@/data/types';
const { data : projects} = await useFetch<Project[]>('http://localhost:3001/projects')
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div>
    <div v-for="project in projects" :key="project.id">
      <b>{{ project.title }}</b>
      <p>{{ project.date }}</p>
    </div>
    
    
    </div>
  </div>
</template>
