import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseModalState = defineStore('baseModal', () => {
  const isModalOpen = ref(false)

  const showModal = () => {
    isModalOpen.value = true
  }

  const hideModal = () => {
    isModalOpen.value = false
  }

  return { isModalOpen, showModal, hideModal }
})

// Usage in a Vue component:
// const { isModalOpen, showModal, hideModal } = useBaseModalState();
