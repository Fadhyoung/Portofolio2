import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  actions: {
    scrollToSection(id: string) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
})
