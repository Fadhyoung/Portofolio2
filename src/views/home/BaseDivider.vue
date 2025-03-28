<template>
  <div
    class="absolute -top-10 w-full p-10 flex justify-evenly items-center gap-5 border border-amber rounded-3xl bg-darkBlue shadow-xl"
  >
    <BaseButton
      :label="$t('divider.downloadResume')"
      buttonType="outline"
      size="lg"
      variant="primary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
    />
    <BaseButton
      :label="$t('divider.portfolio1')"
      buttonType="outline"
      size="lg"
      variant="primary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
    />
    <BaseButton
      :label="$t('divider.famovie')"
      buttonType="outline"
      size="lg"
      variant="primary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
    />
    <BaseButton
      :label="$t('divider.projects')"
      buttonType="outline"
      size="lg"
      variant="primary"
      radius="md"
      visibleOn="all"
      class="bg-midBlue text-white"
    />
  </div>
</template>
