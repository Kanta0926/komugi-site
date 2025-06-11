import type { ObjectDirective } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  const directive: ObjectDirective = {
    mounted(el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");

            // 一度のみの処理で下記記述
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    },
  };

  nuxtApp.vueApp.directive("entry", directive);
});
