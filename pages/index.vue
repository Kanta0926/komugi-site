<script setup lang="ts">
import { ref, provide } from "vue";

import Top from "@/components/sections/Top.vue";
import About from "@/components/sections/About.vue";
import Feature from "@/components/sections/Feature.vue";
import Bagle from "@/components/sections/Bagle.vue";
import Access from "@/components/sections/Access.vue";
import News from "@/components/sections/News.vue";

import { useRoute } from "#app";
import { useNuxtApp, onMounted, nextTick } from "vue";

const route = useRoute();
const { $lenis } = useNuxtApp();

onMounted(async () => {
  const scrollTarget = route.query.scrollTo as string | undefined;
  if (scrollTarget) {
    await nextTick();

    const el = document.getElementById(scrollTarget);
    if (el && $lenis) {
      // 遷移後に描画が安定するのを少し待つ
      setTimeout(() => {
        $lenis.scrollTo(el, {
          offset: 0,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
