import { defineStore } from "pinia";
import type { IProject } from "../";
// import { ref } from "vue";
// import type { Ref } from "vue";

// import { type IProject } from "@/types/projects.interface";
// const { data: projects } = await useFetch<{ data: IProject[] }>(
//   "/api/projects"
// );

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [] as IProject[],
  }),
  actions: {
    async fetch() {
      this.projects = await $fetch("/api/projects");
    },
  },
});

/*export const useProjectStore = defineStore("projectStore", () => {
  const endpoint = "/api/projects";
  let projects: Ref<IProject[]> = ref([]);

  async function fetchProjects() {
    projects = await $fetch(endpoint);
  }

  return {
    projects,
    fetchProjects,
  };
});
*/

/*

const website = useWebsiteStore()

await callOnce(website.fetch)

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      const infos = await $fetch('https://api.nuxt.com/modules/pinia')

      this.name = infos.name
      this.description = infos.description
    }
  }
})
*/
