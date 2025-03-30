<script setup>
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import BaseModal from '../components/features/BaseModal.vue'
</script>

<template>
  <div class="relative m-auto w-full max-w-[2040px] flex flex-col overflow-x-hidden">
    <BaseNavbar />
    <router-view />
    <BaseFooter />
    <BaseModal />
  </div>
</template>
