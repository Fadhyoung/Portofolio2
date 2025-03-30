<script setup>
import { ref, computed } from 'vue'
import Content from '@/assets/content.json'

const itemPerPages = 3
const currentPage = ref(1)

const totalPages = computed(() => {
  const totalItems = Content.Skills.length
  return Math.ceil(totalItems / itemPerPages)
})

const paginatedSkills = computed(() => {
  const start = (currentPage.value - 1) * itemPerPages
  const end = start + itemPerPages
  return Content.Skills.slice(start, end)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div
    class="w-full pt-60 p-10 flex flex-col gap-5 justify-center items-center bg-transparent"
    id="skills"
  >
    <!-- TOP TITLE -->
    <div class="w-full flex justify-around items-center">
      <div class="flex gap-2 items-center justify-center">
        <BaseTypography variant="2xl" weight="500" color="secondary"> What i am </BaseTypography>
        <BaseTypography variant="2xl" weight="500" color="amber"> Capable of </BaseTypography>
      </div>
      <BaseTypography variant="md" class="w-[30%]" color="secondary">
        {{ $t('home.skillDesc') }}
      </BaseTypography>
    </div>

    <!-- CARD SECTION -->
    <div class="w-full p-10 flex gap-10 justify-center">
      <div v-for="(item, index) in paginatedSkills" :key="index">
        <BaseCard :title="item.title" :description="item.description" class="w-80 h-96" />
      </div>
    </div>

    <!-- BUTTON NAVIGATION -->
    <div class="flex items-center gap-2 justify-center">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          currentPage === page ? 'bg-amber !w-12' : 'bg-white rounded-full',
        ]"
      ></button>
    </div>
  </div>
</template>
