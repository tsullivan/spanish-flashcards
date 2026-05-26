import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import SettingsPanel from '../components/SettingsPanel.vue';
import { useFlashcardsStore } from '../stores/flashcards';
import { getSource } from '../datasource';

const source = getSource();

const allSectionKeys = (): string[] =>
  Object.values(source.cards).flatMap(ch => Object.keys(ch));

describe('SettingsPanel', () => {
  let store: ReturnType<typeof useFlashcardsStore>;

  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
    store = useFlashcardsStore();
  });

  it('mounts without errors', () => {
    expect(mount(SettingsPanel).exists()).toBe(true);
  });

  it('renders one checkbox per section', () => {
    const wrapper = mount(SettingsPanel);
    expect(wrapper.findAll('input[type="checkbox"]')).toHaveLength(allSectionKeys().length);
  });

  it('pre-checks sections that are in enabledSections (all enabled by default)', () => {
    const wrapper = mount(SettingsPanel);
    wrapper.findAll('input[type="checkbox"]').forEach(cb => {
      expect((cb.element as HTMLInputElement).checked).toBe(true);
    });
  });

  it('leaves checkboxes unchecked for sections not in enabledSections', () => {
    const sections = allSectionKeys();
    store.setEnabledSections([sections[0]!]);
    const wrapper = mount(SettingsPanel);
    const checkboxes = wrapper.findAll('input[type="checkbox"]');
    expect((checkboxes[0]!.element as HTMLInputElement).checked).toBe(true);
    expect((checkboxes[1]!.element as HTMLInputElement).checked).toBe(false);
  });

  it('renders one h3 per chapter with the chapter key as text', () => {
    const wrapper = mount(SettingsPanel);
    const headings = wrapper.findAll('h3');
    const chapterKeys = Object.keys(source.cards);
    expect(headings).toHaveLength(chapterKeys.length);
    headings.forEach((h, i) => {
      expect(h.text()).toBe(chapterKeys[i]);
    });
  });

  it('renders subtitle list items for groups with subTitles', () => {
    const wrapper = mount(SettingsPanel);
    const subtitleLists = wrapper.findAll('.settings-subtitles');
    expect(subtitleLists.length).toBeGreaterThan(0);
    subtitleLists.forEach(ul => {
      expect(ul.findAll('li').length).toBeGreaterThan(0);
    });
  });

  it('global "Check all" link checks every checkbox', async () => {
    store.setEnabledSections([]);
    const wrapper = mount(SettingsPanel);
    const checkAll = wrapper.find('.settings-toolbar').findAll('a').find(a => a.text() === 'Check all');
    expect(checkAll).toBeDefined();
    await checkAll!.trigger('click');
    wrapper.findAll('input[type="checkbox"]').forEach(cb => {
      expect((cb.element as HTMLInputElement).checked).toBe(true);
    });
  });

  it('global "Uncheck all" link unchecks every checkbox', async () => {
    const wrapper = mount(SettingsPanel);
    const uncheckAll = wrapper.find('.settings-toolbar').findAll('a').find(a => a.text() === 'Uncheck all');
    expect(uncheckAll).toBeDefined();
    await uncheckAll!.trigger('click');
    wrapper.findAll('input[type="checkbox"]').forEach(cb => {
      expect((cb.element as HTMLInputElement).checked).toBe(false);
    });
  });

  it('per-chapter "Check all" only adds that chapter\'s sections', async () => {
    store.setEnabledSections([]);
    const wrapper = mount(SettingsPanel);
    const firstChapterActions = wrapper.findAll('.settings-chapter-actions')[0]!;
    const checkAll = firstChapterActions.findAll('a').find(a => a.text() === 'Check all');
    expect(checkAll).toBeDefined();
    await checkAll!.trigger('click');

    const firstChapterKey = Object.keys(source.cards)[0]!;
    const firstChapterSectionKeys = Object.keys(source.cards[firstChapterKey]!);

    const checkboxes = wrapper.findAll('input[type="checkbox"]');
    allSectionKeys().forEach((key, i) => {
      const expected = firstChapterSectionKeys.includes(key);
      expect((checkboxes[i]!.element as HTMLInputElement).checked).toBe(expected);
    });
  });

  it('per-chapter "Uncheck all" only removes that chapter\'s sections', async () => {
    const wrapper = mount(SettingsPanel);
    const firstChapterActions = wrapper.findAll('.settings-chapter-actions')[0]!;
    const uncheckAll = firstChapterActions.findAll('a').find(a => a.text() === 'Uncheck all');
    expect(uncheckAll).toBeDefined();
    await uncheckAll!.trigger('click');

    const firstChapterKey = Object.keys(source.cards)[0]!;
    const firstChapterSectionKeys = Object.keys(source.cards[firstChapterKey]!);

    const checkboxes = wrapper.findAll('input[type="checkbox"]');
    allSectionKeys().forEach((key, i) => {
      const expected = !firstChapterSectionKeys.includes(key);
      expect((checkboxes[i]!.element as HTMLInputElement).checked).toBe(expected);
    });
  });

  it('toggling a checkbox flips its checked state', async () => {
    const wrapper = mount(SettingsPanel);
    const first = wrapper.findAll('input[type="checkbox"]')[0]!;
    expect((first.element as HTMLInputElement).checked).toBe(true);
    await first.trigger('change');
    expect((first.element as HTMLInputElement).checked).toBe(false);
    await first.trigger('change');
    expect((first.element as HTMLInputElement).checked).toBe(true);
  });

  it('"Save and close" calls store.setEnabledSections with the current selection and emits close', async () => {
    const spy = vi.spyOn(store, 'setEnabledSections');
    const wrapper = mount(SettingsPanel);
    const first = wrapper.findAll('input[type="checkbox"]')[0]!;
    await first.trigger('change');

    const closeBtn = wrapper.findAll('button').find(b => b.text() === 'Save and close');
    expect(closeBtn).toBeDefined();
    await closeBtn!.trigger('click');

    expect(spy).toHaveBeenCalledOnce();
    const called = spy.mock.calls[0]![0]!;
    expect(called).not.toContain(allSectionKeys()[0]!);
    expect(called.length).toBe(allSectionKeys().length - 1);
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
