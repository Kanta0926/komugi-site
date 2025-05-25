<script setup>
import { ref, onMounted } from "vue";

import titleText from "@/assets/images/Group14.png";
import logo from "@/assets/images/小麦好日ロゴ05.png";

// import img1 from "@/assets/images/Rectangle19.png";
// import img2 from "@/assets/images/Rectangle20.png";
// import img3 from "@/assets/images/Rectangle21.png";

// icon
import MapIcon from "@/assets/icons/ph_map-pin-light.svg";
import ClockIcon from "@/assets/icons/basil_clock-outline.svg";
import InstaIcon from "@/assets/icons/hugeicons_instagram.svg";

const currentIndex = ref(0);
// const images = [img1, img2, img3];

const images = [
  useRuntimeConfig().app.baseURL + "images/Rectangle19.png",
  useRuntimeConfig().app.baseURL + "images/Rectangle20.png",
  useRuntimeConfig().app.baseURL + "images/Rectangle21.png",
];

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 6000); // 5秒ごとに切り替え
});
</script>

<template>
  <section class="top-inner">
    <div class="logo-inner">
      <a href="">
        <img :src="logo" class="logo" alt="小麦好日" />
      </a>

      <div>
        <img :src="titleText" class="title-text" alt="" />
      </div>
    </div>
    <div class="global-nav">
      <ul>
        <li>
          <a href="#about"><span>01</span>about</a>
        </li>
        <li>
          <a href="#feature"><span>02</span>Feature</a>
        </li>
        <li>
          <a href="#bagle"><span>03</span>Bagle</a>
        </li>
        <li>
          <a href="#news"><span>04</span>News</a>
        </li>
        <li>
          <a href="#access"><span>05</span>Access</a>
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
      <div class="bottom-bar"></div>
      <div class="bottom-daily">
        <ClockIcon class="svg-icon" />
        <p>OPEN. 9:30~17:00 年中無休</p>
      </div>
      <div class="bottom-map">
        <MapIcon class="svg-icon" />
        <p>〒730-0025 広島件広島市東区39-82</p>
      </div>
      <a href="" class="svg-icon">
        <InstaIcon />
      </a>
    </div>
  </section>
</template>

<style scoped>
.top-inner {
  position: relative;
}

.logo-inner {
  display: flex;
  justify-content: space-between;
  padding: 0 5.375rem;
  margin-top: 4rem;
  width: 100%;
  box-sizing: border-box;
}

.logo-inner a {
  position: relative;
  width: 10%;
  height: 20%;
  max-width: 100%;
  display: flex;
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
  padding-right: 4.375rem;
  margin-right: 1.14rem;
}

.global-nav a span::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;
  bottom: 5%;
  right: 0;
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

.logo-inner {
  position: absolute;
  z-index: 100;
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
}
</style>
