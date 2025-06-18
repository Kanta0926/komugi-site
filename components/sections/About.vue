<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useMediaQuery, useMounted } from "@vueuse/core";

// SP時のHTML変更処理
const isMobile = useMediaQuery("(max-width: 743px)");
const isMounted = useMounted();

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
        <span>01</span>
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

          <div class="contens-sub-title">
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

        <!-- SP表示 -->
        <figure v-if="isMounted && isMobile" class="parallax parallax-inner2">
          <div
            :style="{
              transform: `translateY(${scrollY * -0.08}px) scale(2.2)`,
            }"
            class="parallax-img2"
          >
            <img
              src="/images/aldward-castillo-bPqMD7uSrJg-unsplash.jpg"
              alt=""
            />
          </div>
        </figure>

        <!-- PC表示 -->
        <figure v-else class="parallax parallax-inner2">
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
        <!-- SP表示 -->
        <figure v-if="isMounted && isMobile" class="parallax parallax-inner3">
          <div
            class="parallax-img3"
            :style="{
              transform: `translateY(${scrollY * -0.08}px) scale(1.8)`,
            }"
          >
            <img src="/images/About03.webp" alt="" />
          </div>
        </figure>

        <!-- PC表示 -->
        <figure v-else class="parallax parallax-inner3">
          <div
            class="parallax-img3"
            :style="{
              transform: `translateY(${scrollY * -0.2}px) scale(1.3)`,
            }"
          >
            <img src="/images/About03.webp" alt="" />
          </div>
        </figure>

        <!-- SP表示 -->
        <figure
          v-if="isMounted && isMobile"
          class="parallax parallax-inner4"
          :style="{
            transform: `translateY(${scrollY * -0.22}px) scale(1)`,
          }"
        >
          <div class="parallax-img4">
            <img src="/images/About04.webp" alt="" />
          </div>
        </figure>

        <!-- PC表示 -->
        <figure
          v-else
          class="parallax parallax-inner4"
          :style="{
            transform: `translateY(${scrollY * -0.45}px) scale(1)`,
          }"
        >
          <div class="parallax-img4">
            <img src="/images/About04.webp" alt="" />
          </div>
        </figure>

        <!-- SP表示 -->
        <figure v-if="isMounted && isMobile" class="parallax parallax-inner5">
          <div
            :style="{
              transform: `translateY(${scrollY * -0.1}px) scale(1.8)`,
            }"
            class="parallax-img5"
          >
            <img src="/images/About05.webp" alt="" />
          </div>
        </figure>

        <!-- PC表示 -->
        <figure v-else class="parallax parallax-inner5">
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
  z-index: -200;
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

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* タブレット対応：744px~1024px
============================================== */
@media screen and (min-width: 744px) and (max-width: 1024px) {
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* SP、スマホ対応：743px以下
============================================== */
@media screen and (max-width: 743px) {
  .sec-inner {
    overflow: hidden;
  }

  .about-inner {
    margin: unset;
    /* margin-top: 10rem; */
    padding: 6.25rem 0 18.25rem 0;
  }

  .title-inner {
    z-index: 100;
  }

  .contens-inner {
    margin-bottom: 30rem;
    flex-flow: initial;
  }

  .contens-inner p {
    font-size: 1rem;
    line-height: 2.4rem;
  }

  .contens-inner h2 {
    font-size: 2rem;
    margin: unset;
  }

  .contents-text {
    width: 74%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 500;
  }

  .contents-text::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 114%;
    left: 50%;
    translate: -50% -50%;
    width: 21.875rem;
    height: 60rem;
    border-radius: 10%;
    filter: blur(20px);
    background: #ffff;
    opacity: 0.5;
  }

  .contens-sub-title span {
    font-size: 0.8rem;
  }

  .parallax {
    /* height: 40vh; */
    height: 32vh;
    width: 14vw;
    margin: unset;
    /* padding: unset; */
    /* padding: 2rem 1rem; */
  }

  .parallax-inner1 {
    /* margin-left: 9rem; */
    /* width: 14vw; */
    border-radius: 0 8px 8px 0;
  }

  .parallax-img1 {
    top: 28%;
    transform: scale(2);
  }

  .parallax-inner2 {
    /* margin-right: 9rem; */
    border-radius: 8px 0 0 8px;
  }

  .parallax-img2 {
    top: 40%;
    width: 120%;
    /* left: 0%; */
    right: 20%;
  }

  .contens-inner2 {
    z-index: -100;
  }

  .parallax-inner3 {
    /* margin: 1rem; */
    height: 18vw;
    width: 16vw;
    position: relative;
    /* margin-right: 1rem; */
    right: 2%;
  }

  .parallax-img3 {
    top: 90%;
    width: 70%;
    left: 10%;
  }

  .parallax-inner4 {
    width: 10vw;
    height: 10vw;
    position: relative;
    right: 4% 15.7188px;
    top: 32rem;
  }

  .parallax-img4 {
    top: -10%;
  }

  .parallax-inner5 {
    top: 12rem;
    height: 48vw;
    position: relative;
  }

  .parallax-img5 {
    top: 98%;
  }
}
</style>
