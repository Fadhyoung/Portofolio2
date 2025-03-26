<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
html {
  height: 100%;
  font-size: 1rem;
}
body {
  font-family: var(--font-family);
  padding: 0;
  margin: 0;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  min-width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
