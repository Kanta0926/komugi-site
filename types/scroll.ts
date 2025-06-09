export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export type ScrollToFunction = (
  target: string | HTMLElement,
  options?: ScrollToOptions
) => void;
