<template>
  <nav class="p-14 fixed top-0 left-0 w-full flex items-center justify-between bg-transparent">
    <!-- LEFT SECTION -->
    <div class="flex items-center gap-16">
      <Button
        label="CONTACT ME"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="full"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Skills"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Experiences"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Projects"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
    </div>
    <div>
      <img src="@/assets/logo.svg" alt="Vite + Vue 3" class="w-10 h-10" />
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      console.log('Button clicked!', event)
      alert('Button was clicked!')
    },
  },
}
</script>
