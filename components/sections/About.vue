<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import img1 from "@/assets/images/About01.png";
import img2 from "@/assets/images/About02.png";
import img3 from "@/assets/images/brenna-huff-PpxsF4L2BOg-unsplash.png";
import img4 from "@/assets/images/brenna-huff-Ppxg-unsplash.png";
import img5 from "@/assets/images/brenna-hufunsplash.png";

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
  <section class="sec-inner">
    <div class="about-inner">
      <header class="title-inner">
        <div><span>01</span></div>
        <h1>About</h1>
      </header>
      <div class="contens-inner">
        <figure class="parallax-inner1">
          <div
            class="parallax-img1"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.7)`,
            }"
          >
            <img :src="img1" alt="" />
          </div>
        </figure>
        <div class="contents-text">
          <h2>
            <span>ベーグル専門店</span>
            <br />
            小麦好日 <br />
            KOMUGI KOUJITU
          </h2>

          <div class="contens-text-inner">
            <span>Bagel Specialty Shop KOMUGI KOUJITU</span>
          </div>

          <p>
            日々の生活にカリッとしたベーグルをお届けする、ベーグル専門店になります。<br />
            国産小麦を中心に、ひとつひとつ丁寧に手ごね・手作りしたベーグルは、もっちり、そしてほんのり優しい味わい。
            <br />
            シンプルなプレーンから季節限定のフレーバーまで、毎日通っても飽きないラインナップをご用意しています。
            食事にも、おやつにも、贈りものにも。
            あなたの「ちょうどいい一日」に、<br />
            そっと寄り添うベーグルをお届けします。
          </p>
        </div>

        <figure class="parallax-inner2">
          <div
            class="parallax-img2"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.7)`,
            }"
          >
            <img :src="img2" alt="" />
          </div>
        </figure>
      </div>

      <div class="contens-inner2">
        <figure class="parallax-inner3">
          <div
            class="parallax-img3"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.2)`,
            }"
          >
            <img :src="img3" alt="" />
          </div>
        </figure>

        <figure class="parallax-inner4">
          <div
            class="parallax-img4"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.2)`,
            }"
          >
            <img :src="img4" alt="" />
          </div>
        </figure>

        <figure class="parallax-inner5">
          <div
            class="parallax-img5"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.2)`,
            }"
          >
            <img :src="img5" alt="" />
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

/* .title-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  margin-bottom: 7.5rem;
}

.title-inner span {
  font-family: "Cormorant Garamond";
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  left: 1.375rem;
}

.title-inner h1 {
  font-size: 4rem;
}

.title-inner span::after {
  background-color: #000000;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;
  bottom: 5%;
  right: 0;
  top: 55%;
  left: 100%;
  margin-left: 1rem;
  transform: translateY(-50%);
} */

/* .contens-inner {
  color: #000000;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: start;
  flex-flow: row-reverse;
  width: 100%;
  margin-bottom: 4.875rem;
} */

.contents-text {
  width: 34.7%;
}

/* .contens-inner h2 {
  font-size: 2.5rem;
  font-weight: 600;
}

.contens-inner h2 span {
  font-size: 1.375rem;
}

.contens-text-inner {
  margin-top: 1.375rem;
  font-weight: bold;
}

.contens-text-inner::after {
  background-color: #000000;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;

  margin-top: 1.375rem;
}

.contens-inner p {
  margin-top: 6.125rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 3.25rem;
} */

.parallax-inner1 {
  margin-top: -12.125rem;
  will-change: transform;
  transition: transform 0.2s ease-in-out; /* optional */
  overflow: hidden;
  position: relative;
  width: 36vh;
  height: 85vh;
  padding: 1rem;
  box-shadow: 10px 4px 20px 4px rgba(0, 0, 0, 1);
  border-radius: 8px;
}

.parallax-img1 {
  position: absolute;
  top: 40%;
}

.parallax-inner2 {
  will-change: transform;
  transition: transform 0.2s ease-in-out; /* optional */
  overflow: hidden;
  position: relative;
  width: 36vh;
  height: 91vh;
  padding: 2rem;
  box-shadow: 10px 4px 20px 4px rgba(0, 0, 0, 1);
  border-radius: 8px;
}

.parallax-img2 {
  position: absolute;
  top: 40%;
}

.parallax-inner3 {
  will-change: transform;
  transition: transform 0.2s ease-in-out; /* optional */
  overflow: hidden;
  position: relative;
  width: 51.7vh;
  height: 55.51vh;
  padding: 2rem;
  box-shadow: 10px 4px 20px 4px rgba(0, 0, 0, 1);
  border-radius: 8px;
}

.parallax-img3 {
  position: absolute;
  top: 40%;
}

.parallax-inner4 {
  will-change: transform;
  transition: transform 0.2s ease-in-out; /* optional */
  overflow: hidden;
  position: relative;
  width: 38.6vh;
  height: 29.7vh;
  padding: 2rem;
  box-shadow: 10px 4px 20px 4px rgba(0, 0, 0, 1);
  border-radius: 8px;
  margin-right: 240px;
  margin-top: 224px;
  display: flex;
  justify-content: center;
}

.parallax-img4 {
  position: absolute;
  top: 55%;
}

.parallax-inner5 {
  will-change: transform;
  transition: transform 0.2s ease-in-out; /* optional */
  overflow: hidden;
  position: relative;
  width: 33vh;
  height: 45.3vh;
  padding: 2rem;
  box-shadow: 10px 4px 20px 4px rgba(0, 0, 0, 1);
  border-radius: 8px;
  margin-top: 456px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
}

.parallax-img5 {
  position: absolute;
  top: 100%;
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
}

.bg-text-scroll {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-text 15s linear infinite;
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
