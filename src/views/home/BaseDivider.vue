<script setup lang="ts">
import { useScrollStore } from '../../stores/scrollStore'

const scrollStore = useScrollStore()
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
    />
    <BaseButton
      :label="$t('home.portfolio1')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
    />
    <BaseButton
      :label="$t('home.famovie')"
      buttonType="outline"
      size="lg"
      variant="tertiary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
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
