import { test, expect } from 'bun:test';
import { getAdapter } from './index';

test('matches chatgpt.com', () => {
  const adapter = getAdapter('https://chatgpt.com/c/abc-123');
  expect(adapter).toBeDefined();
});

test('does not match claude.ai', () => {
  const adapter = getAdapter('https://claude.ai/chat/123');
  expect(adapter).toBeUndefined();
});

test('does not match other domains', () => {
  const adapter = getAdapter('https://example.com/');
  expect(adapter).toBeUndefined();
});
