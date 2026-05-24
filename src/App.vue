<script setup lang="ts">
import FlashCards from './components/FlashCards.vue';
import { ref } from 'vue';

const runFlashcards = ref(false);
</script>

<template>
  <div class="container">
    <button @click="runFlashcards = !runFlashcards">
      {{ runFlashcards ? 'Restart' : 'Start' }}
    </button>
  </div>

  <div v-if="runFlashcards" class="box a">
    <FlashCards />
  </div>
</template>
