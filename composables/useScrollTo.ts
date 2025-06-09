import type { Ref } from "vue";
import type Lenis from "@studio-freight/lenis";
import { useNuxtApp } from "#app";

export const useScrollTo = (): {
  scrollTo: (
    target: string | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
    }
  ) => void;
} => {
  const { $lenis } = useNuxtApp();

  const scrollTo = (
    target: string | HTMLElement,
    options: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
    } = {}
  ) => {
    if (!$lenis) return;

    const element =
      typeof target === "string" ? document.querySelector(target) : target;

    if (!element) return;

    $lenis.scrollTo(element, {
      offset: options.offset ?? 0,
      duration: options.duration ?? 1.2,
      easing:
        options.easing ??
        ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
    });
  };

  return { scrollTo };
};
