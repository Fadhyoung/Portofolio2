<template>
  <nav
    class="pt-14 px-24 fixed top-0 left-0 w-full flex items-center justify-between bg-transparent"
  >
    <!-- LEFT SECTION -->
    <div class="flex items-center gap-16">
      <Button
        :label="$t('navbar.contactMe')"
        buttonType="solid"
        size="md"
        variant="primary"
        radius="full"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        :label="$t('navbar.skills')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        :label="$t('navbar.experiences')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
      <Button
        :label="$t('navbar.projects')"
        buttonType="ghost"
        size="md"
        variant="secondary"
        radius="md"
        visibleOn="all"
        @click="handleClick"
      />
    </div>
    <div>
      <img src="/images/img_fadhli_logo.png" alt="Logo" class="w-28" />
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
