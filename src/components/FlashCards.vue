<script setup lang="ts">
import { ref, computed } from 'vue';

const { source } = await import('../../data/source');

type CardState = [number, number, boolean]

const back = ref<CardState[]>([]);
const forward = ref<CardState[]>([]);

const currentQuestionIndex = ref(0);
const currentPhrasesIndex = ref(0);
const showQuestionFirst = ref(true);
const step = ref(0);

const currentCard = computed(() => source.cards[currentQuestionIndex.value]!);
const currentPhrase = computed(() => currentCard.value.phrases[currentPhrasesIndex.value]!);

const loadNewCard = () => {
  currentQuestionIndex.value = Math.floor(Math.random() * source.cards.length);
  currentPhrasesIndex.value = Math.floor(Math.random() * source.cards[currentQuestionIndex.value]!.phrases.length);
  showQuestionFirst.value = Math.random() < 0.5;
};

const captureState = (): CardState =>
  [currentQuestionIndex.value, currentPhrasesIndex.value, showQuestionFirst.value];

const restoreState = ([q, p, s]: CardState) => {
  currentQuestionIndex.value = q;
  currentPhrasesIndex.value = p;
  showQuestionFirst.value = s;
};

const advance = () => {
  if (step.value < 3) {
    step.value++;
    return;
  }
  back.value.push(captureState());
  if (forward.value.length > 0) {
    restoreState(forward.value.pop()!);
    step.value = 1;
  } else {
    loadNewCard();
    step.value = 0;
  }
};

const returnToPrevious = () => {
  if (back.value.length > 0) {
    forward.value.push(captureState());
    restoreState(back.value.pop()!);
    step.value = 0;
  }
};

const restart = () => {
  back.value = [];
  forward.value = [];
  step.value = 0;
  loadNewCard();
};

const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

const speak = (text: string) => {
  if (!speechSupported) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = source.language;
  window.speechSynthesis.speak(utterance);
};

loadNewCard();
</script>

<template>
  <div class="flashcards">
    <header class="bar header">
      <h1>{{ currentCard.type }}</h1>
    </header>

    <main class="content">
      <h2>
        <template v-if="showQuestionFirst">
          <a v-if="speechSupported" class="speak-link" href="#" @click.prevent="speak(currentCard.question)">{{ currentCard.question }}</a>
          <template v-else>{{ currentCard.question }}</template>
          <template v-if="step > 0"> - {{ currentCard.answer }}</template>
        </template>
        <template v-else>
          {{ currentCard.answer }}
          <template v-if="step > 0"> - <a v-if="speechSupported" class="speak-link" href="#" @click.prevent="speak(currentCard.question)">{{ currentCard.question }}</a><template v-else>{{ currentCard.question }}</template></template>
        </template>
      </h2>

      <p v-if="step > 1">
        <a v-if="speechSupported && showQuestionFirst" class="speak-link" href="#" @click.prevent="speak(currentPhrase.question)">{{ currentPhrase.question }}</a>
        <template v-else>{{ currentPhrase[showQuestionFirst ? 'question' : 'answer'] }}</template>
      </p>

      <p v-if="step > 2">
        <a v-if="speechSupported && !showQuestionFirst" class="speak-link" href="#" @click.prevent="speak(currentPhrase.question)">{{ currentPhrase.question }}</a>
        <template v-else>{{ currentPhrase[showQuestionFirst ? 'answer' : 'question'] }}</template>
      </p>
    </main>

    <footer class="bar footer">
      <button @click="restart">Restart</button>
      <div class="nav-buttons">
        <button v-if="back.length > 0" @click="returnToPrevious">Previous</button>
        <button @click="advance">Next</button>
      </div>
    </footer>
  </div>
</template>
