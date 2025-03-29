<script setup>
import { ref, computed } from 'vue'
import Content from '@/assets/content.json'

const totalSection = ['Educations', 'Works', 'Organizations', 'Hobbies']
const currentSection = ref('Educations')

console.log('current section: ', Content[currentSection.value])

const dataSection = computed(() => Content[currentSection.value] ?? [])

console.log('data section: ', dataSection)

const changePage = (section) => {
  currentSection.value = section
}
</script>

<template>
  <div class="w-full flex flex-col gap-14 justify-center items-center">
    <!-- TOP SECTION -->
    <div class="flex flex-col gap-5 justify-center items-center">
      <BaseTypography variant="3xl" weight="600" class="text-center">
        My Experiences
      </BaseTypography>
      <div class="flex gap-5">
        <BaseButton
          v-for="section in totalSection"
          :key="section"
          @click="changePage(section)"
          size="md"
          :variant="currentSection === section ? 'quaternary' : 'primary'"
          radius="md"
          :label="section"
        ></BaseButton>
      </div>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="w-2/3 flex flex-col justify-between">
      <div v-for="(section, index) in dataSection">
        <div :key="index" class="w-full flex gap-5 justify-between">
          <div class="w-1/3 py-5 flex flex-col gap-2 items-end justify-start">
            <BaseTypography variant="xl" weight="600" color="amber">
              {{ section.institution }}
            </BaseTypography>
            <BaseTypography variant="sm" weight="400">
              {{ section.year }}
            </BaseTypography>
          </div>
          <div class="w-1/3 flex flex-col items-center justify-center relative">
            <div
              class="timeline-line"
              :class="{
                first: index === 0,
                last: index === dataSection.length - 1,
              }"
            ></div>
            <div class="timeline-parent-circle">
              <div :class="`${index % 2 === 0 ? 'bg-amber' : 'bg-darkBlue'} timeline-circle`"></div>
            </div>
          </div>
          <div class="w-1/3 py-5 flex flex-col gap-2 items-start justify-end">
            <BaseTypography variant="xl" weight="600" color="amber">
              {{ section.title }}
            </BaseTypography>
            <BaseTypography variant="sm" weight="400">
              {{ section.description }}
            </BaseTypography>
          </div>
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
