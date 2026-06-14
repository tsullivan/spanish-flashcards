<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFlashcardsStore } from '../stores/flashcards';
import { getSource } from '../datasource';

const store = useFlashcardsStore();
const { state, canRestart } = storeToRefs(store);
const emit = defineEmits<{ close: [] }>();

const chapters = Object.entries(getSource().cards).map(([key, chapter]) => ({
  key,
  sections: Object.entries(chapter).map(([sectionKey, groups]) => ({
    key: sectionKey,
    subTitles: groups.map(g => g.subTitle).filter((s): s is string => !!s),
  })),
}));
const allKeys = chapters.flatMap(c => c.sections.map(s => s.key));

const selected = ref<string[]>([...state.value.enabledSections]);
const isChecked = (k: string) => selected.value.includes(k);
const toggle = (k: string) => {
  selected.value = isChecked(k)
    ? selected.value.filter(s => s !== k)
    : [...selected.value, k];
};
// FIXME: checkAll should clear the localStorage and reset to default. By default (with no stored setting), all options should be checked.
const checkAll   = () => { selected.value = [...allKeys]; };
const uncheckAll = () => { selected.value = []; };
const checkChapter = (chapterKey: string) => {
  const keys = new Set(chapters.find(c => c.key === chapterKey)?.sections.map(s => s.key) ?? []);
  selected.value = [...selected.value.filter(k => !keys.has(k)), ...keys];
};
const uncheckChapter = (chapterKey: string) => {
  const keys = new Set(chapters.find(c => c.key === chapterKey)?.sections.map(s => s.key) ?? []);
  selected.value = selected.value.filter(k => !keys.has(k));
};
const close = () => {
  store.setEnabledSections(selected.value);
  emit('close');
};
</script>

<template>
  <div class="settings-overlay">
    <div class="settings-toolbar">
      <a class="settings-link" href="#" @click.prevent="checkAll">Check all</a>
      <a class="settings-link" href="#" @click.prevent="uncheckAll">Uncheck all</a>
    </div>
    <div class="settings-list">
      <div v-for="ch in chapters" :key="ch.key" class="settings-chapter">
        <div class="settings-chapter-header">
          <h3>{{ ch.key }}</h3>
          <div class="settings-chapter-actions">
            <a class="settings-link" href="#" @click.prevent="checkChapter(ch.key)">Check all</a>
            <a class="settings-link" href="#" @click.prevent="uncheckChapter(ch.key)">Uncheck all</a>
          </div>
        </div>
        <div v-for="sec in ch.sections" :key="sec.key" class="settings-section">
          <label class="settings-row">
            <input type="checkbox" :checked="isChecked(sec.key)" @change="toggle(sec.key)" />
            <span>{{ sec.key }}</span>
          </label>
          <ul v-if="sec.subTitles.length" class="settings-subtitles">
            <li v-for="sub in sec.subTitles" :key="sub">{{ sub }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="settings-footer">
      <button @click="close">
        {{ canRestart ? 'Save and restart' : 'Save and close' }}
      </button>
    </div>
  </div>
</template>
