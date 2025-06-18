import { useNuxtApp, useRouter, useRoute } from "#app";

export const useScrollTo = (): {
  scrollTo: (
    target: string | HTMLElement,
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

  const scrollTo = async (
    target: string | HTMLElement,
    options: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
    } = {}
  ) => {
    if (!$lenis) return;

    // トップページ以外なら戻ってからスクロール処理
    if (process.client && route.path !== "/") {
      await router.push("/");
      await nextTick();

      // 遷移後のDOM描画を待つ（タイミングが合わない場合があるため）
      requestAnimationFrame(() => {
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
      });
    } else {
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
    }
  };

  return { scrollTo };
};
