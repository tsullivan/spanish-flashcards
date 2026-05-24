<script setup lang="ts">
import { source } from '../../data/source'
import { ref } from 'vue'

// Local state to track prev/next progress
const currentIndex = ref(0)

const currentQuestionIndex = ref(0)
const currentPhrasesIndex = ref(0)
const currentShowQuestionFirst = ref(true)

const setNext = (next = 0) => {
  currentIndex.value = next

  // update currentQuestionIndex if currentIndex % 4 === 0
  if (currentIndex.value % 4 === 0) {
    // Get a random question from the source array
    // 1. Get the length of the source array
    // 2. Find a random number between 0 and the length of the source array
    currentQuestionIndex.value = Math.floor(Math.random() * source.length)

    // Get the random phrase from the current question
    // 1. Get the length of the phrases array for the current question
    // 2. Find a random number between 0 and the length of the phrases array
    currentPhrasesIndex.value = Math.floor(
      Math.random() * source[currentQuestionIndex.value].phrases.length,
    )

    // Randomly decide if we will show the question and then the answer, or the answer and then the question
    currentShowQuestionFirst.value = Math.random() < 0.5
  }
}

setNext()
</script>

<template>
  <div class="flashcards">
    <div class="card">
      <h1>{{ source[currentQuestionIndex].type }}</h1>
      <h2>
        {{ source[currentQuestionIndex][currentShowQuestionFirst ? 'question' : 'answer'] }}
        {{ currentIndex % 4 > 0 ? ` - ${source[currentQuestionIndex][currentShowQuestionFirst ? 'answer' : 'question']}` : '' }}
      </h2>

      <div v-if="currentIndex % 4 > 1">
        <p>{{ source[currentQuestionIndex].phrases[currentPhrasesIndex][currentShowQuestionFirst ? 'question' : 'answer'] }}</p>
      </div>

      <div v-if="currentIndex % 4 > 2">
        <p>{{ source[currentQuestionIndex].phrases[currentPhrasesIndex][currentShowQuestionFirst ? 'answer' : 'question'] }}</p>
      </div>

      <button @click="setNext(currentIndex + 1)">Next</button>
    </div>
  </div>
</template>
