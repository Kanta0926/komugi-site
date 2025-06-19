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

    const id = target.replace("#", "");
    const selector = `#${id}`;

    if (process.client && route.path === "/") {
      // 現在のページにいる場合のスクロール
      const el = document.querySelector(selector);
      if (el) {
        $lenis.scrollTo(el, {
          offset: options.offset ?? 0,
          duration: options.duration ?? 1.2,
          easing:
            options.easing ??
            ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        });
      }
    } else {
      // TOPページ外にいる場合の遷移＋スクロール
      await router.push({
        path: "/",
        query: { scrollTo: id },
      });
    }
  };
  return { scrollTo };
};
