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
    <div class="relative w-full flex flex-col">
      <div class="bg-midBlue">
        <BaseDivider />
        <BaseSkills />
      </div>
      <div class="py-10 space-y-10 bg-gradient-to-b from-midBlue to-white">
        <BaseExperiences />
        <BaseProjects />
      </div>
    </div>

    <BaseFooter />
  </div>
</template>
