<template>
  <nav class="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-md p-4">
    <!-- LEFT SECTION -->
    <div>
      <Button
        label="CONTACT ME"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Skills"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Experiences"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        label="Projects"
        buttonType="solid"
        size="md"
        variant="primary"
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
