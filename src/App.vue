<script setup lang="ts">
import FlashCards from './components/FlashCards.vue';
import { ref } from 'vue';

// Local state to track which box is visible
const runFlashcards = ref(false);

// Handler to update the state
const showBox = (next) => {
  runFlashcards.value = next;
};
</script>

<template>
  <div class="container">
    <!-- "Start" button text changes to "Restart" when flashcards are shown -->
    <button @click="showBox(!runFlashcards)">
      {{ runFlashcards ? 'Restart' : 'Start' }}
    </button>
  </div>

  <!-- Conditional Rendering Blocks -->
  <div v-if="runFlashcards === true" class="box a">
    <FlashCards />
  </div>
</template>
