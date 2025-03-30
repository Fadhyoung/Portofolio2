<script setup>
import { useScrollStore } from '../stores/scrollStore'
import { useBaseModalState } from '../stores/baseStore'

const modalStore = useBaseModalState()
const scrollStore = useScrollStore()
</script>

<template>
  <nav
    class="pt-14 px-24 absolute top-0 left-0 w-full flex items-center justify-between bg-transparent"
  >
    <!-- LEFT SECTION -->
    <div class="flex items-center gap-16">
      <BaseButton
        :label="$t('navbar.contactMe')"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="full"
        visibleOn="all"
        @click="modalStore.showModal"
      />
      <BaseButton
        :label="$t('navbar.skills')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="scrollStore.scrollToSection('skills')"
      />
      <BaseButton
        :label="$t('navbar.experiences')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="scrollStore.scrollToSection('experiences')"
      />
      <BaseButton
        :label="$t('navbar.projects')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="scrollStore.scrollToSection('projects')"
      />
    </div>
    <div>
      <img src="/images/img_fadhli_logo.png" alt="Logo" class="w-28" />
    </div>
  </nav>
</template>
