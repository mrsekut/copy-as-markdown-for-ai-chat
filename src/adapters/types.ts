export interface Adapter {
  /** URL patterns this adapter supports (for content_scripts matches) */
  matches: string[];

  /** Extract an HTML container from the current selection */
  getSelectionContainer(selection: Selection): HTMLElement | null;
}
