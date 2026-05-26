import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import FlashCards from '../components/FlashCards.vue';
import { useFlashcardsStore } from '../stores/flashcards';

const SettingsPanelStub = defineComponent({
  name: 'SettingsPanel',
  emits: ['close'],
  template: '<div class="settings-panel-stub" />',
});

const mountFlashCards = () =>
  mount(FlashCards, {
    global: { stubs: { SettingsPanel: SettingsPanelStub } },
  });

describe('FlashCards', () => {
  let store: ReturnType<typeof useFlashcardsStore>;

  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
    store = useFlashcardsStore();
  });

  it('mounts without errors', () => {
    expect(mountFlashCards().exists()).toBe(true);
  });

  it('shows the Settings (gear) button in fresh state', () => {
    expect(mountFlashCards().find('button[aria-label="Settings"]').exists()).toBe(true);
  });

  it('hides the Settings button after advancing', async () => {
    const wrapper = mountFlashCards();
    store.advance();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button[aria-label="Settings"]').exists()).toBe(false);
  });

  it('mounts the SettingsPanel after clicking the Settings button', async () => {
    const wrapper = mountFlashCards();
    expect(wrapper.findComponent(SettingsPanelStub).exists()).toBe(false);
    await wrapper.find('button[aria-label="Settings"]').trigger('click');
    expect(wrapper.findComponent(SettingsPanelStub).exists()).toBe(true);
  });

  it('hides the SettingsPanel after it emits close', async () => {
    const wrapper = mountFlashCards();
    await wrapper.find('button[aria-label="Settings"]').trigger('click');
    wrapper.findComponent(SettingsPanelStub).vm.$emit('close');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(SettingsPanelStub).exists()).toBe(false);
  });

  it('shows the empty-state message when no sections are enabled', () => {
    store.setEnabledSections([]);
    const wrapper = mountFlashCards();
    expect(wrapper.find('.empty-state').exists()).toBe(true);
  });

  it('hides the Previous/Next nav-buttons row when no sections are enabled', () => {
    store.setEnabledSections([]);
    const wrapper = mountFlashCards();
    // The first .nav-buttons row (gear/restart) always renders; the second (Previous/Next) is gated on !isEmpty
    expect(wrapper.findAll('.nav-buttons')).toHaveLength(1);
    expect(wrapper.findAll('button').some(b => b.text() === 'Next')).toBe(false);
  });

  it('shows the Next button when sections are enabled', () => {
    const wrapper = mountFlashCards();
    expect(wrapper.findAll('.nav-buttons')).toHaveLength(2);
    expect(wrapper.findAll('button').some(b => b.text() === 'Next')).toBe(true);
  });

  it('hides the Previous button initially', () => {
    const wrapper = mountFlashCards();
    expect(wrapper.findAll('button').some(b => b.text() === 'Previous')).toBe(false);
  });

  it('shows the Previous button after navigating to a second card', async () => {
    const wrapper = mountFlashCards();
    store.advance(); // step 0 -> 1
    store.advance(); // step 1 -> 2
    store.advance(); // step 2 -> 3
    store.advance(); // step 3 -> next card; back has 1 entry
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('button').some(b => b.text() === 'Previous')).toBe(true);
  });

  it('renders chapter name in h1 and section name in header h2 when not empty', () => {
    const wrapper = mountFlashCards();
    const h1 = wrapper.find('h1');
    const headerH2 = wrapper.find('header h2');
    expect(h1.text()).not.toBe(' ');
    expect(h1.text().length).toBeGreaterThan(0);
    expect(headerH2.text()).not.toBe(' ');
    expect(headerH2.text().length).toBeGreaterThan(0);
  });

  it('hides the Restart button in fresh state (canRestart is false)', () => {
    const wrapper = mountFlashCards();
    expect(wrapper.findAll('button').some(b => b.text() === 'Restart')).toBe(false);
  });

  it('shows the Restart button after advancing (canRestart becomes true)', async () => {
    const wrapper = mountFlashCards();
    store.advance();
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('button').some(b => b.text() === 'Restart')).toBe(true);
  });
});
