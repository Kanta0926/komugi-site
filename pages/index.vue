<script setup lang="ts">
import { ref, provide, onMounted, nextTick } from "vue";

import Top from "@/components/sections/Top.vue";
import About from "@/components/sections/About.vue";
import Feature from "@/components/sections/Feature.vue";
import Bagle from "@/components/sections/Bagle.vue";
import Access from "@/components/sections/Access.vue";
import News from "@/components/sections/News.vue";

import { useRoute, useNuxtApp } from "#app";

const route = useRoute();

onMounted(async () => {
  const { $lenis } = useNuxtApp();

  // URLのクエリにscrolltoがあるかの判断
  const scrollTarget = route.query.scrollTo as string | undefined;
  if (scrollTarget) {
    // ページ描画遅延
    await nextTick();

    const el = document.getElementById(scrollTarget);
    // 描画安定のため300s遅延
    if (el && $lenis) {
      setTimeout(() => {
        $lenis.scrollTo(el, {
          offset: 0,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }, 300);
    }
  }
});
</script>

<template>
  <Top></Top>
  <About></About>
  <Feature></Feature>
  <Bagle></Bagle>
  <Access></Access>
  <News></News>
</template>
