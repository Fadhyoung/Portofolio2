<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import BaseButton from './BaseButton.vue'
</script>

<template>
  <div class="relative w-80 h-96">
    <!-- Front Layer (Actual Card) -->
    <div
      class="w-full h-full text-white rounded-xl border-half"
      style="background-color: rgb(104, 104, 104, 0.2)"
    >
      <!-- Title -->
      <div class="p-6 border-bottom">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
      </div>

      <!-- Description -->
      <div class="p-6">
        <p class="text-sm mt-2 opaci-80">{{ description }}</p>
      </div>

      <!-- Bottom Right Icon -->
      <BaseButton
        label="daf"
        class="absolute bottom-4 right-4"
        variant="secondary"
        radius="full"
        type="solid"
        icon
        color="amber"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: { ArrowUpRight },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
}
</script>

<style scoped>
/* Clip-path to create the bottom-right cutout */
.border-half {
  border: 1px solid rgb(255, 255, 255, 0.5);
}

.border-bottom {
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
}
</style>
