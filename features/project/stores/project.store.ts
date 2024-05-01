import { defineStore } from "pinia";
import type { IProject } from "../";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [] as IProject[],
    endpoint: "/api/projects",
  }),
  actions: {
    async fetch() {
      const response = await $fetch(this.endpoint);
      this.projects = response as IProject[];
    },
  },
});
