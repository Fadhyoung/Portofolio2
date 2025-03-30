<script setup lang="ts">
type BaseCardProps = {
  title: string
  description: string
  skills: []
}

// Define props
const props = defineProps<BaseCardProps>()
</script>

<template>
  <div class="relative w-80 h-96">
    <!-- Front Layer (Actual Card) -->
    <div
      class="w-full h-full flex flex-col justify-between text-white rounded-xl border-half"
      style="background-color: rgb(104, 104, 104, 0.2)"
    >
      <div>
        <!-- Title -->
        <div class="p-6 border-bottom">
          <h2 class="text-lg font-semibold">{{ props.title }}</h2>
        </div>

        <!-- Description -->
        <div class="p-6">
          <p class="text-sm mt-2 opacity-80">{{ props.description }}</p>
        </div>
      </div>

      <!-- Skills -->
      <div
        class="p-6 flex flex-wrap gap-3 overflow-hidden place-self-end justify-self-end items-end place-items-end self-end"
      >
        <div
          v-for="(skill, index) in props.skills"
          :key="index"
          class="px-5 py-1 rounded-md text-xs text-darkBlue bg-white hover:bg-amber"
        >
          {{ skill }}
        </div>
      </div>
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
