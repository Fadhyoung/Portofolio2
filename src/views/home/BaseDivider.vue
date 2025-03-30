<script setup lang="ts">
import { FAMOVIE_URL, PORTFOLIO1_URL } from '../../constants/otherLink'
import { useScrollStore } from '../../stores/scrollStore'

const scrollStore = useScrollStore()
const openFamovie = () => {
  window.open(FAMOVIE_URL, '_blank')
}

const openPortfolio1 = () => {
  window.open(PORTFOLIO1_URL, '_blank')
}

let isDownloading = false

const downloadResume = () => {
  if (isDownloading) return // Prevent multiple triggers
  isDownloading = true

  setTimeout(() => {
    isDownloading = false // Reset after a short delay
  }, 500) // Adjust delay as needed

  const link = document.createElement('a')
  link.href = `${import.meta.env.BASE_URL}files/Fadhli_Nur_Himawan_resume.pdf`
  link.download = 'Fadhli_Nur_Himawan_resume.pdf'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div
    class="absolute -top-10 w-full p-10 flex justify-evenly items-center gap-5 border border-amber rounded-3xl bg-darkBlue shadow-xl"
  >
    <BaseButton
      :label="$t('home.downloadResume')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
      @click.stop="downloadResume"
    />
    <BaseButton
      :label="$t('home.portfolio1')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
      @click="openPortfolio1"
    />
    <BaseButton
      :label="$t('home.famovie')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      visibleOn="all"
      class="bg-midBlue text-white"
      @click="openFamovie"
    />
    <BaseButton
      :label="$t('home.projects')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
      @click="scrollStore.scrollToSection('projects')"
    />
  </div>
</template>
