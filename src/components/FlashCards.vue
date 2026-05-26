<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFlashcardsStore } from '../stores/flashcards';
import { getSource } from '../datasource';
import SettingsPanel from './SettingsPanel.vue';

const store = useFlashcardsStore();
const {
  state,
  currentCard,
  currentPhrase,
  currentChapter,
  currentSection,
  currentSubTitle,
  canGoPrevious,
  isEmpty,
} = storeToRefs(store);
const { advance, previous } = store;

const showSettings = ref(false);

const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

const speak = (text: string) => {
  if (!speechSupported) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSource().language;
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
        <template v-else>{{ currentSection }}</template>
      </h2>
      <h3 v-if="!isEmpty && currentSubTitle">{{ currentSubTitle }}</h3>
    </header>

    <main class="content">
      <p v-if="isEmpty" class="empty-state">Select at least one section to begin.</p>

      <template v-else>
        <h2>
          <template v-if="state.current.showQuestionFirst">
            <a v-if="speechSupported" class="speak-link" href="#" @click.prevent="speak(currentCard.question)">{{
              currentCard.question
            }}</a>
            <template v-else>{{ currentCard.question }}</template>
            <template v-if="state.step > 0"> - {{ currentCard.answer }}</template>
          </template>
          <template v-else>
            {{ currentCard.answer }}
            <template v-if="state.step > 0">
              -
              <a v-if="speechSupported" class="speak-link" href="#" @click.prevent="speak(currentCard.question)">{{
                currentCard.question
              }}</a
              ><template v-else>{{ currentCard.question }}</template></template
            >
          </template>
        </h2>

        <p v-if="state.step > 1">
          <a
            v-if="speechSupported && state.current.showQuestionFirst"
            class="speak-link"
            href="#"
            @click.prevent="speak(currentPhrase.question)"
            >{{ currentPhrase.question }}</a
          >
          <template v-else>{{ currentPhrase[state.current.showQuestionFirst ? 'question' : 'answer'] }}</template>
        </p>

        <p v-if="state.step > 2">
          <a
            v-if="speechSupported && !state.current.showQuestionFirst"
            class="speak-link"
            href="#"
            @click.prevent="speak(currentPhrase.question)"
            >{{ currentPhrase.question }}</a
          >
          <template v-else>{{ currentPhrase[state.current.showQuestionFirst ? 'answer' : 'question'] }}</template>
        </p>
      </template>
    </main>

    <footer class="bar footer">
      <div class="nav-buttons">
        <button aria-label="Settings" @click="showSettings = true">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            />
          </svg>
        </button>
      </div>
      <div v-if="!isEmpty" class="nav-buttons">
        <button v-if="canGoPrevious" @click="previous">Previous</button>
        <button @click="advance">Next</button>
      </div>
    </footer>

    <SettingsPanel v-if="showSettings" @close="showSettings = false" />
  </div>
</template>
