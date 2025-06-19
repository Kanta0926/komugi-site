<script setup lang="ts">
import Loading from "@/layouts/Loading.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
const isFirstLoad = ref(true);
const router = useRouter();

onMounted(() => {
  // 初回表示のLoading
  if (isFirstLoad.value) {
    setTimeout(() => {
      isLoading.value = false;
      isFirstLoad.value = false;
    }, 2500);
  }
});

// 遷移前前にloadingのフラグ変更
router.beforeEach(() => {
  if (!isFirstLoad.value) {
    isLoading.value = true;
  }
});

// 遷移完了後にloadingのフラグ変更
router.afterEach(() => {
  if (!isFirstLoad.value) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2500);
  }
});
</script>

<template>
  <div id="app">
    <NuxtRouteAnnouncer />
    <Loading v-if="isLoading" />

    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
