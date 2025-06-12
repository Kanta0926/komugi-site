<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初期化
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section id="About" class="sec-inner">
    <div class="about-inner">
      <header class="title-inner">
        <div><span>01</span></div>
        <h1 lang="en">About</h1>
      </header>
      <div v-entry class="contens-inner fade-in">
        <figure
          :style="{
            transform: `translateY(${scrollY * -0.1}px) scale(1)`,
          }"
          class="parallax parallax-inner1"
        >
          <div class="parallax-img1">
            <img src="/images/About01.webp" alt="" />
          </div>
        </figure>
        <div class="contents-text">
          <h2>
            <span lang="ja">ベーグル専門店</span>
            <br />
            小麦好日 <br />
            KOMUGI KOUJITU
          </h2>

          <div class="contens-text-inner">
            <span lang="en">Bagel Specialty Shop KOMUGI KOUJITU</span>
          </div>

          <p lang="ja">
            日々の生活にカリッとしたベーグルをお届けする、ベーグル専門店になります。<br />
            国産小麦を中心に、ひとつひとつ丁寧に手ごね・手作りしたベーグルは、もっちり、そしてほんのり優しい味わい。
            <br />
            シンプルなプレーンから季節限定のフレーバーまで、毎日通っても飽きないラインナップをご用意しています。
            食事にも、おやつにも、贈りものにも。
            あなたの「ちょうどいい一日」に、<br />
            そっと寄り添うベーグルをお届けします。
          </p>
        </div>

        <figure class="parallax parallax-inner2">
          <div
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.65)`,
            }"
            class="parallax-img2"
          >
            <img src="/images/About02.webp" alt="" />
          </div>
        </figure>
      </div>

      <div v-entry class="contens-inner2 fade-in">
        <figure class="parallax parallax-inner3">
          <div
            class="parallax-img3"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.3)`,
            }"
          >
            <img src="/images/About03.webp" alt="" />
          </div>
        </figure>

        <figure
          class="parallax parallax-inner4"
          :style="{
            transform: `translateY(${scrollY * -0.45}px) scale(1)`,
          }"
        >
          <div class="parallax-img4">
            <img src="/images/About04.webp" alt="" />
          </div>
        </figure>

        <figure class="parallax parallax-inner5">
          <div
            :style="{
              transform: `translateY(${scrollY * -0.1}px) scale(1.3)`,
            }"
            class="parallax-img5"
          >
            <img src="/images/About05.webp" alt="" />
          </div>
        </figure>
      </div>

      <div class="bg-text-inner">
        <p class="bg-text-scroll">Bagels in Everyday Life</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-inner {
  position: relative;
}

.about-inner {
  margin-top: 14.375rem;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  margin-bottom: 4.875rem;
  flex-flow: row-reverse;
}

.contents-text {
  width: 34.7%;
}

.parallax {
  transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  will-change: transform;
}

.parallax-inner1 {
  margin-top: -12.125rem;
  width: 36vh;
  height: 85vh;
  padding: 1rem;
}

.parallax-img1 {
  position: absolute;
  transform: scale(1.2);
}

.parallax-inner2 {
  width: 36vh;
  height: 91vh;
  padding: 2rem;
}

.parallax-img2 {
  position: absolute;
  top: 20%;
}

.parallax-inner3 {
  width: 51.7vh;
  height: 55.51vh;
  padding: 2rem;
}

.parallax-img3 {
  position: absolute;
  top: 80%;
}

.parallax-inner4 {
  width: 38.6vh;
  height: 29.7vh;
  padding: 2rem;
  margin-right: 15rem;
  margin-top: 62.5rem;
  display: flex;
  justify-content: center;
}

.parallax-img4 {
  position: absolute;
  top: -55%;
}

.parallax-inner5 {
  width: 42vh;
  height: 68vh;
  padding: 2rem;
  margin-top: 28.5rem;
  margin-left: 1.875rem;
  display: flex;
  justify-content: center;
}

.parallax-img5 {
  position: absolute;
  top: 40%;
}

.contens-inner2 {
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.bg-text-inner {
  font-size: 150px;
  font-weight: bold;
  color: #333333;
  opacity: 0.2;
  position: absolute;
  z-index: -100;
  width: 100%;
  overflow: hidden;
  top: 70%;
  filter: blur(6px);
}

.bg-text-scroll {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-text 30s linear infinite;
}

@keyframes scroll-text {
  0% {
    transform: translateX(100%); /* 右から */
  }
  100% {
    transform: translateX(-100%); /* 左へ */
  }
}
</style>
