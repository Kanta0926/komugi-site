// plugins/lenis.client.ts
// import { defineNuxtPlugin } from "#app";
// import Lenis from "@studio-freight/lenis";

// export default defineNuxtPlugin((nuxtApp) => {
//   const lenis = new Lenis({
//     duration: 1.2,
//     lerp: 0.2,
//   });

//   function raf(time: number) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   // グローバルに使いたければ provide する
//   nuxtApp.provide("lenis", lenis);
// });
