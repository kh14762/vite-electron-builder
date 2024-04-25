<script setup lang="ts">
import {toggle} from '#preload';
import {system} from '#preload';


</script>

<template>
  <p>Current theme source: <strong id="theme-source">System</strong></p>

  <button
    id="toggle-dark-mode"
    @click="toggle()"
  >
    Toggle Dark Mode
  </button>

  <button
    id="reset-to-system"
    @click="system()"
  >
    Reset to System Theme
  </button>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  body { background: #333; color: white; }
}

@media (prefers-color-scheme: light) {
  body { background: #ddd; color: black; }
}
</style>
