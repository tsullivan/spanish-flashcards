import type { AppData } from '../data/types';

let cached: AppData | undefined;
let loadPromise: Promise<AppData> | undefined;

export const loadSource = (): Promise<AppData> => {
  if (cached) return Promise.resolve(cached);
  if (!loadPromise) {
    loadPromise = import('../data').then(mod => {
      cached = mod.source;
      return cached;
    });
  }
  return loadPromise;
};

export const getSource = (): AppData => {
  if (!cached) {
    throw new Error('Data source not loaded. Call loadSource() and await it before getSource().');
  }
  return cached;
};
