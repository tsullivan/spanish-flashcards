<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFlashcardsStore } from '../stores/flashcards';
import { source } from '../../data';

const store = useFlashcardsStore();
const { state } = storeToRefs(store);
const emit = defineEmits<{ close: [] }>();

const chapters = Object.entries(source.cards).map(([key, chapter]) => ({
  key,
  sections: Object.keys(chapter),
}));
const allKeys = chapters.flatMap(c => c.sections);

const selected = ref<string[]>([...state.value.enabledSections]);
const isChecked = (k: string) => selected.value.includes(k);
const toggle = (k: string) => {
  selected.value = isChecked(k)
    ? selected.value.filter(s => s !== k)
    : [...selected.value, k];
};
const checkAll   = () => { selected.value = [...allKeys]; };
const uncheckAll = () => { selected.value = []; };
const close = () => {
  store.setEnabledSections(selected.value);
  emit('close');
};
</script>

<template>
  <div class="settings-overlay">
    <div class="settings-toolbar">
      <button @click="checkAll">Check all</button>
      <button @click="uncheckAll">Uncheck all</button>
    </div>
    <div class="settings-list">
      <div v-for="ch in chapters" :key="ch.key" class="settings-chapter">
        <h3>{{ ch.key }}</h3>
        <label v-for="sec in ch.sections" :key="sec" class="settings-row">
          <input type="checkbox" :checked="isChecked(sec)" @change="toggle(sec)" />
          <span>{{ sec }}</span>
        </label>
      </div>
    </div>
    <div class="settings-footer">
      <button @click="close">Close</button>
    </div>
  </div>
</template>
