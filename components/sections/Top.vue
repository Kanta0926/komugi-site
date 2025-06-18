<script setup lang="ts">
import { inject, onMounted, ref } from "vue";

import titleText from "@/assets/images/Group14.png";
import logo from "@/assets/images/小麦好日ロゴ05.png";

// icon
import MapIcon from "@/assets/icons/ph_map-pin-light.svg";
import ClockIcon from "@/assets/icons/basil_clock-outline.svg";
import InstaIcon from "@/assets/icons/hugeicons_instagram.svg";

const currentIndex = ref(0);

const images = [
  useRuntimeConfig().app.baseURL + "images/Rectangle19.webp",
  useRuntimeConfig().app.baseURL + "images/Rectangle20.webp",
  useRuntimeConfig().app.baseURL + "images/Rectangle21.webp",
];

// header用の終端の監視処理
const topSectionRef = ref<HTMLElement | null>(null);
const showHeader = inject("showHeader") as Ref<boolean>;
if (!inject) throw new Error("showHeaderがinjectされていません");

let observer: IntersectionObserver;

onMounted(() => {
  // 画面切り替えの処理
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 6000);

  // header用の監視処理
  observer = new IntersectionObserver(
    // 画面ないに要素があるとき、.valueはfalse
    ([entry]) => {
      if (showHeader) {
        showHeader.value = !entry.isIntersecting;
      }
    },
    {
      threshold: 0,
    }
  );

  if (topSectionRef.value) {
    observer.observe(topSectionRef.value);
  }
});
</script>

<template>
  <section id="Top" ref="topSectionRef" class="top-inner">
    <div class="logo-inner">
      <NuxtLink>
        <img :src="logo" class="logo" alt="小麦好日" />
      </NuxtLink>

      <div>
        <img :src="titleText" class="title-text" alt="" />
      </div>
    </div>

    <div class="global-nav">
      <ul>
        <li>
          <NuxtLink to="#About">
            <span class="global-nav-num">01</span>
            <span class="global-nav-text">about</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#Feature"
            ><span class="global-nav-num">02</span>
            <span class="global-nav-text">Feature</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#Bagle">
            <span class="global-nav-num">03</span>
            <span class="global-nav-text">Bagle</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#News">
            <span class="global-nav-num">04</span>
            <span class="global-nav-text">News</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#Access">
            <span class="global-nav-num">05</span>
            <span class="global-nav-text">Access</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="topimage-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-inner"
        :class="{ active: currentIndex === index }"
      >
        <img :src="image" class="image" />
      </div>
    </div>

    <!-- 画像の数だけ白い丸を作成 -->
    <div class="dots-container">
      <div
        v-for="(image, index) in images"
        :key="'dot-' + index"
        :class="['dot', { active: currentIndex === index }]"
      ></div>
    </div>

    <div class="bottom-inner">
      <div class="bottom-news">
        <p class="bottom-news-text">NEWS</p>
        <div class="bottom-bar"></div>
        <div class="scroll-inner">
          <p class="bottom-news-scroll">
            春の新作メニューが発売になりました！ぜひご賞味ください！
          </p>
        </div>
      </div>
      <div class="bottom-bar bottom-bar-sp"></div>
      <div class="bottom-daily">
        <ClockIcon class="svg-icon" />
        <p>OPEN. 9:30~17:00 年中無休</p>
        <a href="" class="svg-icon svg-sp-insta">
          <InstaIcon />
        </a>
      </div>
      <div class="bottom-map">
        <MapIcon class="svg-icon" />
        <p>〒730-0025 広島件広島市東区39-82</p>
      </div>
      <a href="" class="svg-icon svg-insta">
        <InstaIcon />
      </a>
    </div>
    <div ref="sentinel" class="scroll-sentinel"></div>
  </section>
</template>

<style scoped>
.top-inner {
  position: relative;
  overflow: hidden;
}

.logo-inner {
  display: flex;
  justify-content: space-between;
  padding: 0 5.375rem;
  margin-top: 4rem;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  z-index: 100;
}

.logo-inner a {
  position: relative;
  width: 10%;
  height: 20%;
  max-width: 100%;
  display: flex;
  transition: opacity 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.logo-inner a:hover {
  opacity: 0.6;
}

.title-text {
  /* position: absolute; */
}

.logo {
  /* position: absolute; */
  width: 100%;
  height: 100%;
}
.global-nav {
  position: absolute;
  z-index: 100;
  bottom: 10%;
  left: 5%;
}

.global-nav a {
  font-size: 1.8rem;
  text-decoration: none;
  color: inherit;
}

.global-nav span {
  font-family: "Cormorant Garamond";
  font-weight: bold;
  position: relative;
  /* padding-right: 4.375rem;
  margin-right: 1.14rem; */
}

/* .global-nav a span::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;
  bottom: 5%;
  right: 0;
} */

.global-nav span:first-of-type::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 50%;
  height: 1px;
  position: absolute;
  top: 90%;
  left: 50%;
}

.global-nav-num {
  padding-right: 4.375rem;
  margin-right: 1.14rem;
}

.global-nav-text {
  transform: translateX(0);
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.global-nav a:hover .global-nav-text {
  transform: translateX(0.4rem);
}

/* top画像のトランジション */
.topimage-inner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.image-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 0;
}

/* activeな画像だけ scaleダウンアニメーションを付ける */
.image-inner.active {
  opacity: 1;
  z-index: 10;
  animation: scaleDown 6s linear forwards; /* ここ重要 */
}
@keyframes scaleDown {
  0% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

/* image単体のtransitionはフィルターのみ */
.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: filter 0.4s ease-in-out; /* 明るさだけトランジション */
}

/* activeじゃない画像は明るくする */
.image-inner:not(.active) .image {
  filter: brightness(150%) blur(5px);
}

.dots-container {
  position: absolute;
  bottom: 5.5rem;
  right: 5.375rem;
  display: flex;
  gap: 1.4rem;
  z-index: 20;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: transparent; /* 中は透明 */
  border: 2px solid rgba(255, 255, 255, 1); /* 縁だけ白（少し薄めでもいい） */

  border-radius: 50%;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.dot.active {
  background-color: #ffff;
  border-color: #ffff;
}

.bottom-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  width: 100%;
  background-color: #c0a487;
  position: absolute;
  bottom: 0;
  font-family: inter;
  font-size: 1.3rem;
  /* padding: 0.8rem 0; */
  justify-content: space-around;
}

.bottom-inner p {
  margin: 1.2rem 0;
}

.bottom-news {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-news-text {
  opacity: 0.6;
}

.bottom-bar {
  background: #ffffff;
  flex: none;
  height: 20px;
  margin: 0px 0px 0px 0px;
  /* opacity: 0.2; */
  width: 1px;
  max-width: 100%;
  margin: 0 1rem;
}

.scroll-inner {
  position: relative;
  overflow: hidden;
  width: 300px; /* 表示したい幅だけ設定 */
  height: 2em; /* テキスト高さに合わせる */
  display: flex;
  align-items: center;
}

.bottom-news-scroll {
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

.bottom-daily {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-map {
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-icon {
  margin-right: 0.5rem;
  display: flex;
  stroke: #ffff;
  width: 32px;
  height: 32px;
}

.svg-insta {
  width: 2rem;
  height: 2rem;
}

.svg-sp-insta {
  display: none;
}

.scroll-sentinel {
  height: 1px;
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* タブレット対応：744px~1024px
============================================== */
@media screen and (min-width: 744px) and (max-width: 1024px) {
  .logo-inner {
    padding: 0 2.375rem;
  }

  .logo-inner a {
    top: 32rem;
    width: 12rem;
    height: 12rem;
  }

  .logo-inner div {
    width: 8rem;
    height: auto;
  }

  .bottom-inner {
    font-size: 1rem;
  }

  .bottom-inner p {
    /* margin: unset; */
  }

  .scroll-inner {
    width: 18rem;
  }

  .bottom-map {
    display: none;
  }

  .bottom-daily .svg-icon {
    stroke-width: 0.2px;
  }

  .svg-insta {
    stroke-width: 2px;
    margin: unset;
  }
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* SP、スマホ対応：743px以下
============================================== */
@media screen and (max-width: 743px) {
  .global-nav {
    display: none;
  }

  .logo-inner {
    justify-content: space-between;
    margin: unset;
    padding: unset;
    height: 100%;
  }

  .logo-inner div {
    width: 5rem;
    height: auto;
    height: 14rem;
    padding: 2rem;
  }

  .logo-inner div img {
    object-fit: contain;
  }

  .logo-inner a {
    left: 4%;
    top: 66%;
    width: 12rem;
    height: 12rem;
    margin: unset;
    padding: unset;
  }

  .dots-container {
    top: 84%;
    right: 6%;
    bottom: 0;
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
  }

  .bottom-inner {
    /* display: none; */
    position: relative;
    flex-direction: column;
    align-items: baseline;
    font-size: 1rem;
    padding: 0.8rem;
    box-sizing: border-box;
  }

  .bottom-inner p {
    margin: unset;
  }

  .bottom-bar-sp {
    display: none;
  }

  .scroll-inner {
    width: 18rem;
  }

  .svg-icon {
    width: 20px;
    height: 20px;
    stroke-width: 0.2;
  }

  .svg-insta {
    display: none;
  }

  .svg-pc-insta {
    display: inline-block;
    stroke-width: 2;
    height: 28px;
    width: 28px;
    margin-left: 2.4rem;
  }
}

/* タッチデバイスのhover削除 */
@media (hover: none) {
  .logo-inner a:hover {
    opacity: 1;
  }

  .global-nav a:hover .global-nav-text {
    transform: none;
  }
}
</style>
