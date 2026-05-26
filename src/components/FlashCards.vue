<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFlashcardsStore } from '../stores/flashcards';
import { source } from '../../data';

const store = useFlashcardsStore();
const { state, currentCard, currentPhrase, currentChapter, currentSection, currentSubTitle, canGoPrevious, isEmpty } = storeToRefs(store);
const { advance, previous, restart } = store;

const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

const speak = (text: string) => {
  if (!speechSupported) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = source.language;
  window.speechSynthesis.speak(utterance);
};
</script>

<template>
  <div class="flashcards">
    <header class="bar header">
      <h1>
        <template v-if="isEmpty">&nbsp;</template>
        <template v-else>{{ currentChapter }}</template>
      </h1>
      <h2>
        <template v-if="isEmpty">&nbsp;</template>
        <template v-else>{{ currentSection }} {{ currentSubTitle ? ` - ${currentSubTitle}` : '' }}</template>
      </h2>
    </header>

    <main class="content">
      <p v-if="isEmpty" class="empty-state">Select at least one section to begin.</p>

      <template v-else>
        <h2>
          <template v-if="state.current.showQuestionFirst">
            <a v-if="speechSupported" class="speak-link" href="#" @click.prevent="speak(currentCard.question)">{{
              currentCard.question }}</a>
            <template v-else>{{ currentCard.question }}</template>
            <template v-if="state.step > 0"> - {{ currentCard.answer }}</template>
          </template>
          <template v-else>
            {{ currentCard.answer }}
            <template v-if="state.step > 0"> - <a v-if="speechSupported" class="speak-link" href="#"
                @click.prevent="speak(currentCard.question)">{{ currentCard.question }}</a><template v-else>{{
                  currentCard.question }}</template></template>
          </template>
        </h2>

        <p v-if="state.step > 1">
          <a v-if="speechSupported && state.current.showQuestionFirst" class="speak-link" href="#"
            @click.prevent="speak(currentPhrase.question)">{{ currentPhrase.question }}</a>
          <template v-else>{{ currentPhrase[state.current.showQuestionFirst ? 'question' : 'answer'] }}</template>
        </p>

        <p v-if="state.step > 2">
          <a v-if="speechSupported && !state.current.showQuestionFirst" class="speak-link" href="#"
            @click.prevent="speak(currentPhrase.question)">{{ currentPhrase.question }}</a>
          <template v-else>{{ currentPhrase[state.current.showQuestionFirst ? 'answer' : 'question'] }}</template>
        </p>
      </template>
    </main>

    <footer class="bar footer">
      <button @click="restart">Restart</button>
      <div v-if="!isEmpty" class="nav-buttons">
        <button v-if="canGoPrevious" @click="previous">Previous</button>
        <button @click="advance">Next</button>
      </div>
    </footer>
  </div>
</template>
