<script setup>
import { ref, computed } from 'vue'
import Content from '@/assets/content.json'

const totalSection = ['ALL', 'ui/ux', 'Web Design', 'App Design', 'Graphic Design']
const currentSection = ref('Web Design')

const dataSection = computed(() => {
  return Content.Projects.filter(
    (project) => currentSection.value === 'ALL' || project.type === currentSection.value,
  )
})

console.log('dataSection', dataSection.value)
const changePage = (section) => {
  currentSection.value = section
}
</script>

<template>
  <div class="w-full flex flex-col gap-14 justify-center items-center">
    <!-- TOP SECTION -->
    <div class="flex flex-col gap-5 justify-center items-center">
      <BaseTypography variant="3xl" weight="600" class="text-center">
        {{ $t('home.myProjects') }}
      </BaseTypography>
      <BaseTypography variant="sm" class="text-center">
        {{ $t('home.projectDesc') }}
      </BaseTypography>
      <div class="flex gap-5">
        <BaseButton
          v-for="section in totalSection"
          :key="section"
          @click="changePage(section)"
          size="md"
          :variant="currentSection === section ? 'quaternary' : 'primary'"
          button-type="solid"
          radius="md"
          :label="section"
        ></BaseButton>
      </div>
    </div>

    <!-- CARD SECTION -->
    <div class="w-full p-10 flex gap-10 justify-center">
      <div v-for="(item, index) in dataSection" :key="index" class="flex flex-col gap-5">
        <div
          class="w-96 h-96 relative rounded-lg border-2 border-white overflow-hidden"
          style="background-color: rgb(104, 104, 104, 0.2)"
        >
          <img
            :src="item.poster"
            alt="image"
            class="absolute bottom-0 left-5 w-8/12 h-5/6 z-20 object-cover shadow-2xl"
          />
          <img
            :src="item.poster"
            alt="image"
            class="absolute bottom-0 right-5 w-8/12 h-full object-top object-cover"
          />
        </div>
        <div>
          <BaseTypography variant="sm" color="amber">{{ item.type }}</BaseTypography>
          <BaseTypography variant="lg">{{ item.title }}</BaseTypography>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full vertical dashed line */
.timeline-line {
  position: absolute;
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    #333,
    #333 5px,
    transparent 5px,
    transparent 10px
  );
}

/* Shorter line for first item (only bottom half) */
.timeline-line.first {
  height: 50%;
  top: 50%;
}

/* Shorter line for last item (only top half) */
.timeline-line.last {
  height: 50%;
  bottom: 50%;
}

.timeline-parent-circle {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px dashed #11073f;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.timeline-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
</style>
