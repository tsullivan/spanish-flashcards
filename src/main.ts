import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { loadSource } from './datasource';

const appEl = document.getElementById('app')!;
const loadingEl = document.createElement('div');
loadingEl.textContent = 'Loading…';
loadingEl.style.cssText =
  'display:flex;align-items:center;justify-content:center;' +
  'min-height:100vh;min-height:100dvh;' +
  'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
  'font-style:italic;color:#666;';
appEl.appendChild(loadingEl);

await loadSource();

createApp(App).use(createPinia()).mount(appEl);
