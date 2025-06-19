<script setup lang="ts">
import Loading from "@/layouts/Loading.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
const isFirstLoad = ref(true);
const router = useRouter();

onMounted(() => {
  if (isFirstLoad.value) {
    setTimeout(() => {
      isLoading.value = false;
      isFirstLoad.value = false;
    }, 2500);
  }
});

router.beforeEach(() => {
  if (!isFirstLoad.value) {
    isLoading.value = true;
  }
});

router.afterEach(() => {
  if (!isFirstLoad.value) {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
});
</script>

<template>
  <div id="app">
    <NuxtRouteAnnouncer />
    <Loading v-if="isLoading" />

    <NuxtLayout> </NuxtLayout>
  </div>
</template>

<style scoped></style>
