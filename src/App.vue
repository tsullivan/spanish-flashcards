<script setup lang="ts">
import FlashCards from './components/FlashCards.vue';
</script>

<template>
  <Suspense>
    <FlashCards />
    <template #fallback>
      <div class="loading">Loading…</div>
    </template>
  </Suspense>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #111;
}

.loading {
  padding: 1.25rem 1rem;
  font-size: 1rem;
  color: #666;
}
</style>
