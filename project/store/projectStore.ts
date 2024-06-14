import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    stars: 0,
  }),
  actions: {
    incrementStars() {
      this.stars++
    },
  },
})
