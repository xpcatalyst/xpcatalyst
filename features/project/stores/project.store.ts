import { defineStore } from "pinia";
import type { IProject } from "../";
// import { ref } from "vue";
// import type { Ref } from "vue";

// import { type IProject } from "@/types/projects.interface";
// const { data: projects } = await useFetch<{ data: IProject[] }>(
//   "/api/projects"
// );

// Fonction pour concaténer les noms des objets dans un tableau
function concatenateNames(array) {
  return array.map((obj) => obj.name).join(", ");
}

function searchInObject(obj, searchTerm) {
  // Fonction récursive pour parcourir l'objet
  function recursiveSearch(obj) {
    if (typeof obj === "string") {
      // Si c'est une chaîne, vérifier si le mot est présent
      return obj.includes(searchTerm);
    } else if (Array.isArray(obj)) {
      // Si c'est un tableau, vérifier chaque élément
      return obj.some(recursiveSearch);
    } else if (typeof obj === "object" && obj !== null) {
      // Si c'est un objet, vérifier chaque propriété
      return Object.values(obj).some(recursiveSearch);
    }
    // Si rien ne correspond, retourner false
    return false;
  }

  // Appeler la fonction récursive sur l'objet
  return recursiveSearch(obj);
}

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [] as IProject[],
    filteredProjects: [] as IProject[],
    searchTerm: "" as string,
  }),
  getters: {
    getFilteredProjects: (state) => {
      return (searchTerm: string) =>
        state.projects.filter((project) => {
          const search = searchTerm.toLowerCase();
          const title = project.title.toLowerCase();
          const headline = project.title.toLowerCase();
          const author = project.source?.author.toString().toLowerCase();
          const featuresString = concatenateNames(
            project.features
          ).toLowerCase();
          const stackString = concatenateNames(project.stack).toLowerCase();
          const teamString = concatenateNames(project.team).toLowerCase();

          return (
            title.includes(search) ||
            headline.includes(search) ||
            teamString.includes(search) ||
            author?.includes(search) ||
            featuresString.includes(search) ||
            teamString.includes(search) ||
            stackString.includes(search)
          );
        });
    },
  },
  actions: {
    async fetch() {
      this.projects = await $fetch("/api/projects");
      this.filteredProjects = this.projects;
    },
    setSearchTerm(term: string) {
      this.searchTerm = term;
      this.filteredProjects = this.getFilteredProjects(this.searchTerm);
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
