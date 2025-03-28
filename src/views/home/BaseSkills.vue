<template>
  <div class="w-full pt-60 p-10 flex justify-center items-center bg-transparent">
    <!-- TOP TITLE -->
    <div class="w-full flex justify-around items-center">
      <BaseTypography variant="2xl" weight="500" color="amber">
        {{ $t('skills.title') }}
      </BaseTypography>
      <BaseTypography variant="md" class="w-[30%]" color="secondary">
        {{ $t('skills.desc') }}
      </BaseTypography>
    </div>
  </div>
  <!-- CARD SECTION -->
  <div class="w-full p-20 flex gap-10 justify-center">
    <BaseCard
      title="Frontend"
      description="I have experience building websites using modern frontend frameworks like Vue.js and React.js."
    />
    <BaseCard
      title="Frontend"
      description="I have experience building websites using modern frontend frameworks like Vue.js and React.js."
    />
    <BaseCard
      title="Frontend"
      description="I have experience building websites using modern frontend frameworks like Vue.js and React.js."
    />
  </div>
</template>
