<script setup lang="ts">
import { source } from '../../data/source'
import { ref, computed } from 'vue'

const visitedQuestions = ref<Array<[number, number, boolean]>>([])

const currentQuestionIndex = ref(0)
const currentPhrasesIndex = ref(0)
const showQuestionFirst = ref(true)
const step = ref(0)

const currentCard = computed(() => source[currentQuestionIndex.value]!)
const currentPhrase = computed(() => currentCard.value.phrases[currentPhrasesIndex.value]!)

const loadNewCard = () => {
  currentQuestionIndex.value = Math.floor(Math.random() * source.length)
  currentPhrasesIndex.value = Math.floor(Math.random() * source[currentQuestionIndex.value]!.phrases.length)
  showQuestionFirst.value = Math.random() < 0.5
}

const advance = () => {
  if (step.value === 3) {
    visitedQuestions.value.push([currentQuestionIndex.value, currentPhrasesIndex.value, showQuestionFirst.value])
    loadNewCard()
    step.value = 0
  } else {
    step.value++
  }
}

const returnToPrevious = () => {
  if (visitedQuestions.value.length > 0) {
    const [q, p, s] = visitedQuestions.value.pop()!
    currentQuestionIndex.value = q
    currentPhrasesIndex.value = p
    showQuestionFirst.value = s
    step.value = 0
  }
}

loadNewCard()
</script>

<template>
  <div class="flashcards">
    <div class="card">
      <h1>{{ currentCard.type }}</h1>
      <h2>
        {{ currentCard[showQuestionFirst ? 'question' : 'answer'] }}
        {{ step > 0 ? ` - ${currentCard[showQuestionFirst ? 'answer' : 'question']}` : '' }}
      </h2>

      <div v-if="step > 1">
        <p>{{ currentPhrase[showQuestionFirst ? 'question' : 'answer'] }}</p>
      </div>

      <div v-if="step > 2">
        <p>{{ currentPhrase[showQuestionFirst ? 'answer' : 'question'] }}</p>
      </div>

      <p>
        <button @click="advance">Next</button>
      </p>

      <div v-if="visitedQuestions.length > 0">
        <p>
          <button @click="returnToPrevious">Previous</button>
        </p>
      </div>
    </div>
  </div>
</template>
