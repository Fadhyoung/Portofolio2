<script setup>
import WelcomeScreen from './home/WelcomeScreen.vue'
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseDivider from './home/BaseDivider.vue'
import BaseSkills from './home/BaseSkills.vue'
</script>

<template>
  <div class="relative m-auto w-full max-w-[2040px] flex flex-col overflow-x-hidden">
    <BaseNavbar />
    <WelcomeScreen />

    <!-- BODY -->
    <div class="relative w-full h-[5000px] flex flex-col bg-gradient-to-b from-midBlue to-white">
      <BaseDivider />
      <BaseSkills />
    </div>
  </div>
</template>
