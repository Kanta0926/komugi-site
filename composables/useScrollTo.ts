import { useNuxtApp, useRouter, useRoute } from "#app";

export const useScrollTo = (): {
  scrollTo: (
    target: string,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
    }
  ) => Promise<void>;
} => {
  const { $lenis } = useNuxtApp();
  const router = useRouter();
  const route = useRoute();

  const scrollTo = async (target, options = {}) => {
    if (!$lenis) return;

    // すでにTOPならそのままスクロール
    if (process.client && route.path === "/") {
      const element = document.querySelector(target);
      if (!element) return;

      $lenis.scrollTo(element, {
        offset: options.offset ?? 0,
        duration: options.duration ?? 1.2,
        easing:
          options.easing ??
          ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      });
    } else {
      // TOPに遷移＋クエリ付き（例: /?scrollTo=news）
      await router.push({
        path: "/",
        query: { scrollTo: target.replace("#", "") },
      });
    }
  };

  return { scrollTo };
};
