<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
type BaseCardProps = {
  title: string
  description: string
}

// Define props
const props = defineProps<BaseCardProps>()
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
        <h2 class="text-lg font-semibold">{{ props.title }}</h2>
      </div>

      <!-- Description -->
      <div class="p-6">
        <p class="text-sm mt-2 opacity-80">{{ props.description }}</p>
      </div>

      <!-- Bottom Right Button -->
      <BaseButton
        class="absolute bottom-4 right-4 !p-5"
        variant="secondary"
        radius="full"
        buttonType="solid"
        color="amber"
      >
        <ArrowUpRight />
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
/* Clip-path to create the bottom-right cutout */
.border-half {
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
