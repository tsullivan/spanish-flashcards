<script setup lang="ts">
import FlashCards from './components/FlashCards.vue';
</script>

<template>
  <FlashCards />
</template>

<style>
:root {
  color-scheme: light dark;
  --color-bg:               white;
  --color-bg-bar:           #b6d4e8;
  --color-fg:               #111;
  --color-fg-muted:         #666;
  --color-border:           #6a7a8a;
  --color-button-bg:        white;
  --color-button-hover-bg:  #f2f2f2;
  --color-button-active-bg: #e6e6e6;
  --color-link:             #1a5fa8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:               #1a1d24;
    --color-bg-bar:           #2c3e50;
    --color-fg:               #f0f0f0;
    --color-fg-muted:         #9aa0a8;
    --color-border:           #4a5a6a;
    --color-button-bg:        #2a2d34;
    --color-button-hover-bg:  #353940;
    --color-button-active-bg: #424650;
    --color-link:             #7dc4f5;
  }
}

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--color-fg);
}

.flashcards {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  background-color: var(--color-bg);
}

.bar {
  background-color: var(--color-bg-bar);
  padding: 0.85rem 1rem;
}

.header {
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.header h1 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
}
.header h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.content {
  flex: 1;
  padding: 1.25rem 1rem;
}

.content h2 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 1.25rem;
}

.content p {
  font-size: 1.05rem;
  margin: 0.85rem 0;
}

.empty-state {
  color: var(--color-fg-muted);
  font-style: italic;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
  gap: 0.5rem;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
}

button {
  background-color: var(--color-button-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 0.5rem 1.4rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  color: var(--color-fg);
  touch-action: manipulation;
}

button:hover {
  background-color: var(--color-button-hover-bg);
}

button:active {
  background-color: var(--color-button-active-bg);
}

.speak-link {
  font-weight: 700;
  color: var(--color-link);
  text-decoration: none;
  cursor: pointer;
}

.speak-link:hover {
  text-decoration: underline;
}
</style>
