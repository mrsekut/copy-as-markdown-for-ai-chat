import type { Adapter } from './types';
import { chatgptAdapter } from './chatgpt';

const adapters: Adapter[] = [chatgptAdapter];

export function getAdapter(url: string): Adapter | undefined {
  return adapters.find(a =>
    a.matches.some(pattern => matchPattern(pattern, url)),
  );
}

/** Match a content_scripts-style URL pattern */
function matchPattern(pattern: string, url: string): boolean {
  const escaped = pattern
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*');
  return new RegExp(`^${escaped}$`).test(url);
}
