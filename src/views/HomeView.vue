<script setup>
import WelcomeScreen from './home/WelcomeScreen.vue'
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseDivider from './home/BaseDivider.vue'
import BaseSkills from './home/BaseSkills.vue'
import BaseExperiences from './home/BaseExperiences.vue'
import BaseProjects from './home/BaseProjects.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>

<template>
  <div class="relative m-auto w-full max-w-[2040px] flex flex-col overflow-x-hidden">
    <BaseNavbar />
    <WelcomeScreen />

    <!-- BODY -->
    <div class="relative w-full flex flex-col gap-16 bg-gradient-to-b from-midBlue to-white">
      <BaseDivider />
      <BaseSkills />
      <BaseExperiences />
      <BaseProjects />
    </div>

    <BaseFooter />
  </div>
</template>
