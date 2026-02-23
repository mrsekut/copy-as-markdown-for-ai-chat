import type { Adapter } from './types';

export const chatgptAdapter: Adapter = {
  matches: ['https://chatgpt.com/*'],

  getSelectionContainer(selection: Selection): HTMLElement | null {
    if (!selection.rangeCount || selection.isCollapsed) return null;

    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents();
    const container = document.createElement('div');
    container.appendChild(fragment);
    return container;
  },
};
