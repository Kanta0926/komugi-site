<script setup lang="ts">
import logo from "@/assets/images/logo07.svg";
</script>

<template>
  <section id="loading" class="sec-inner">
    <div class="loading-inner">
      <div><logo class="logo-img"></logo></div>
      <div><span>KOMUGI KOUJITU</span></div>
    </div>
  </section>
</template>
<style scoped>
.sec-inner {
  overflow: hidden;
}

.loading-inner {
  position: fixed;
  z-index: 5000;
  width: 100vw;
  height: 100vh;
  background: #cbac9b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  width: 12vw;
  height: 12vw;
  opacity: 0;
  animation: roll 2s ease-in-out forwards;
}

@keyframes roll {
  0% {
    opacity: 0;
    transform: translateX(-300px) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(360deg);
  }
}

.loading-inner span {
  font-size: 4rem;
  color: #ffff;
  font-family: "Gothic A1";
  font-weight: bold;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out 2s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
