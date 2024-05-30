<script setup lang="ts">
// import { projects } from "~/data/db.json";

// const data = await import("~/data/db.json");
//import data from "~/static/db.json";
//const res = await fetch("/db.json");
//const { projects } = await res.json();
// console.log(projects);

// console.log(data);


// onMounted() {
//   const response = await fetch('/data/geo/regions.json');
//   const data = await response.json();
//   console.log(data);
// }

//import { type Project } from '~/data/types';
//const { data: projects } = await useFetch<Project[]>("../data/db.json");
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="project in projects" :key="project.id">
        {{ project.title }}
      </div>
    </div>
  </div>
</template>
