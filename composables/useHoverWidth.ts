import { gsap } from "gsap";

export function useHoverWidth() {
  const quickMap = new Map<HTMLElement, Function>();

  const animateTo = (el: HTMLElement, width: string) => {
    gsap.to(el, {
      width,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return {
    expand: (el: HTMLElement) => animateTo(el, "40%"),
    shrink: (el: HTMLElement) => animateTo(el, "33.3333%"),
  };
}
