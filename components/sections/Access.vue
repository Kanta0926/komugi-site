<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useMediaQuery, useMounted } from "@vueuse/core";

import InstaIcon from "@/assets/icons/hugeicons_instagram.svg";

// パララックス処理
gsap.registerPlugin(ScrollTrigger);

const currentIndex = ref(0);

// SP時のHTML変更処理
const isMobile = useMediaQuery("(max-width: 743px)");
const isMounted = useMounted();

onMounted(() => {
  // liの上下parallax
  const elements = document.querySelectorAll<HTMLElement>(".access-parallax");
  elements.forEach((el) => {
    gsap.to(el, {
      "--parallax-y": "0px", // 初期値
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress; // 0〜1 の値
          const offset = 80 * progress; // パララックス量
          el.style.setProperty("--parallax-y", `${offset}px`);
        },
      },
    });
  });

  // 一時的にSP対応のためコメントアウト
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3;
  }, 4500);
});
</script>

<template>
  <section id="Access" class="sec-inner">
    <div class="access-top-img">
      <div class="access-parallax" data-y="-20vw">
        <div v-if="isMounted">
          <picture v-if="isMobile" class="access-img-pic">
            <img src="/images/Access-sp01.webp" alt="" />
          </picture>
          <picture v-else class="access-img-pic">
            <img src="/images/Access01.webp" alt="" />
          </picture>
        </div>
      </div>
    </div>
    <div class="access-inner">
      <header class="title-inner">
        <span>04</span>
        <h1 lang="en">Access</h1>
      </header>

      <div v-entry class="contens-inner fade-in">
        <div class="store-inner">
          <h2 lang="ja">店舗情報<br /></h2>
          <div class="contens-sub-title">
            <span lang="en">Store Information</span>
          </div>

          <div class="store-text">
            <span lang="ja">香麦好日</span>
            <span lang="ja">〒730-0025 広島件広島市東区39-82</span>
            <span lang="ja">OPEN. 9:30~17:00 年中無休</span>
          </div>

          <!-- SP表示 -->
          <div v-if="isMounted">
            <div v-if="isMobile" v-entry class="map-inner fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6583.889862660348!2d132.4591055!3d34.402745599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a98a6eaf7e7c3%3A0xf57be92cb5339632!2z5bqD5bO25Z-O!5e0!3m2!1sja!2sjp!4v1749025109920!5m2!1sja!2sjp"
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="day-inner">
          <div class="day-text">
            <h2 lang="ja">カレンダー<br /></h2>
            <div class="contens-sub-title">
              <span lang="en">Calendar</span>
            </div>
          </div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=kanta.sato0926%40gmail.com&ctz=Asia%2FTokyo"
            style="border: 0"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      <!-- PC表示 -->
      <div v-if="isMounted">
        <div v-if="!isMobile" v-entry class="map-inner fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6583.889862660348!2d132.4591055!3d34.402745599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a98a6eaf7e7c3%3A0xf57be92cb5339632!2z5bqD5bO25Z-O!5e0!3m2!1sja!2sjp!4v1749025109920!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <NuxtLink v-entry class="btn-inner fade-in">
        <div class="access-btn">
          <span>instagram</span>
          <InstaIcon class="access-btn-svg" />
        </div>
      </NuxtLink>

      <!-- 背景テキスト -->
      <div class="bg-text-inner">
        <div>
          <transition name="fade" mode="out-in">
            <div class="bg-text-scroll" v-if="currentIndex === 0" key="slide-0">
              <span>Bagels</span>
              <span>for you</span>
              <span>my dear.</span>
            </div>

            <div
              class="bg-text-scroll"
              v-else-if="currentIndex === 1"
              key="slide-1"
            >
              <span>Bagels</span>
              <span>for</span>
              <span>everyday moments.</span>
            </div>

            <div class="bg-text-scroll" v-else key="slide-2">
              <span>Bagels</span>
              <span>with</span>
              <span>loved ones.</span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* parallax部分 */
.sec-inner {
  position: relative;
  background-color: rgba(255, 247, 236, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.feature-inner {
  margin-top: 14.375rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 14.375rem;
  padding-bottom: 14.375rem;
}

.access-parallax {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  height: 62vh;
  will-change: transform;
  overflow: hidden;
  --parallax-scale: 1.3;
}

.access-parallax img {
  width: 100%;
  height: 100%;
}

.access-top-img {
}

.access-img-pic {
  transform: translateY(var(--parallax-y, 0px));
  transform: translateY(calc(var(--parallax-y, 0px) * -4));
  transition: transform 0.1s linear;
  will-change: transform;
  display: block;
}

/* access部分 */
.access-inner {
  padding: 14.375rem 0 11.25rem 0;
}

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  margin: 0 auto 7.5rem;
  gap: 18.625rem;
}

.store-inner {
  width: 22vw;
  margin-left: 10rem;
}

.store-text {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 6.125rem;
}

.day-inner {
  width: 22vw;
  filter: grayscale(60%);
}

.day-text {
}

.day-inner iframe {
  width: 20rem;
  height: 20rem;
  margin-top: 6.125rem;
}

.map-inner {
  display: flex;
  justify-content: center;
  filter: grayscale(60%);
}

.map-inner iframe {
  width: 80rem;
  height: 26.75rem;
}

/* ボタン */
.btn-inner {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 6.75rem auto 0;
  max-width: 240px;
  padding: 0.88rem 5.375rem;
  color: #543618;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background: #fff7ec;
  border-radius: 50px;
  transition-delay: 0.1s;
}

.access-btn {
  display: flex;
  justify-self: center;
  align-items: center;
  color: #6c5c53;
  gap: 0.5rem;
}

.access-btn span {
  font-size: 1.5rem;
  font-family: "Gothic A1";
  font-weight: bold;
}

.access-btn-svg {
  fill: #cbac9b;
  fill-opacity: 0.5;
  transition: transform 0.3s ease;
  width: 2rem;
  height: 2rem;
}

/* btn-hover */
.btn-inner:hover {
  color: #fff7ec;
  background: #cbac9b;
}

.btn-inner:hover .access-btn {
  color: #fff7ec;
}

.btn-inner:hover .access-btn-svg {
  fill: #fff7ec;
  stroke: #ffff;
  transform: translate(4px, -4px);
}

/* 背景テキスト */
.bg-text-inner {
  font-size: 14.375rem;
  font-weight: bold;
  color: #c0a487;
  position: absolute;
  filter: blur(6px);
  z-index: -100;
  width: 100%;
  overflow: hidden;
  top: 70%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 28%;
  left: 8%;
  font-family: "Gothic A1";
  font-weight: bold;
  line-height: normal;
}

.bg-text-scroll {
  display: inline-block;
  flex-direction: column;
  display: flex;
}

.fade-enter-active {
  transition: opacity 1.5s ease-in;
}
.fade-leave-active {
  transition: opacity 1.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* タブレット対応：744px~1024px
============================================== */
@media screen and (min-width: 744px) and (max-width: 1024px) {
  .contens-inner {
    margin: 0 auto 6.125rem;
  }

  .access-inner {
    padding: 6.25rem 0 5rem 0;
  }

  .access-parallax {
    height: 32vh;
  }

  .bg-text-inner {
    /* display: none; */
    font-size: 9.2rem;
    top: 20.5%;
    left: -4%;
    filter: blur(4px);
  }

  .access-img-pic {
    transform: translateY(calc(var(--parallax-y, 0px) * -2)) scale(1.4);
  }

  .contens-inner {
    flex-direction: column;
    width: 74%;
    gap: 6.4rem;
  }

  .store-inner {
    width: 100%;
    margin: unset;
  }

  .store-text {
    font-size: 1.25rem;
    margin-bottom: 3.75rem;
  }

  .day-inner {
    width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .day-text {
    width: 100%;
  }

  .day-inner iframe {
    margin-top: 6.125rem;
  }

  .map-inner {
    width: 74%;
    height: 34vh;
    margin: 0 auto;
  }

  .map-inner iframe {
    height: 34vh;
  }

  .btn-inner {
    padding: 0.88rem 1rem;
  }
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* SP、スマホ対応：743px以下
============================================== */
@media screen and (max-width: 743px) {
  .contens-inner {
    margin: 0 auto 3.75rem;
  }

  .access-inner {
    padding: 6.25rem 0 5rem 0;
  }

  .bg-text-inner {
    /* display: none; */
    font-size: 9.2rem;
    top: 20.5%;
    left: -4%;
    filter: blur(4px);
  }

  .access-img-pic {
    transform: translateY(calc(var(--parallax-y, 0px) * -2)) scale(1.4);
  }

  .contens-inner {
    flex-direction: column;
    width: 74%;
    gap: 9.4rem;
  }

  .store-inner {
    width: 100%;
    margin: unset;
  }

  .store-text {
    font-size: 1.25rem;
    margin-bottom: 3.75rem;
  }

  .day-inner {
    width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .day-text {
    width: 100%;
  }

  .day-inner iframe {
    margin-top: 6.125rem;
  }

  .map-inner {
    width: 74%;
    height: 34vh;
    margin: 0 auto;
  }

  .map-inner iframe {
    height: 34vh;
  }

  .btn-inner {
    padding: 0.88rem 1rem;
  }
}

/* タッチデバイスのhover削除 */
@media (hover: none) {
  .btn-inner:hover {
    color: #543618;
    background: #fff7ec;
  }
  .btn-inner:hover .access-btn {
    color: #6c5c53;
  }
  .btn-inner:hover .access-btn-svg {
    fill: #cbac9b;
    /* stroke: #ffff; */
    transform: none;
  }
}
</style>
