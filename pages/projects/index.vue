<script setup lang="ts">
// import { type IProject } from "@/types/projects.interface";
// const { data: projects } = await useFetch<{ data: IProject[] }>(
//   "/api/projects"
// );

const projectStore = useProjectStore();
projectStore.fetch();
</script>

<template>
  <div>
    <BaseH1>Projects</BaseH1>
    <div class="flex flex-row">
      <div class="w-1/4">
        <ClientOnly>
          <Vueform>
            <TagsElement
              name="tags"
              :search="true"
              :items="['Tailwind', 'Bootstrap', 'Bulma', '...']"
            />
          </Vueform>
        </ClientOnly>
      </div>
      <main>
        <ProjectList :projects="projectStore.projects" />
      </main>
    </div>
  </div>
</template>
