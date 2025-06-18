<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery, useMounted } from "@vueuse/core";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PageLink from "@/assets/icons/akar-icons_link-out.svg";

// swiperの処理記述
// const swiperRef = ref<any>(null);
// const onMouseEnter = () => {
//   console.log(swiperRef);

//   swiperRef.value?.swiper?.autoplay?.stop();
// };

// const onMouseLeave = () => {
//   swiperRef.value?.swiper?.autoplay?.start();
// };
// Swiperの処理
const swiperRef = ref<any>(null);
const swiperInstance = ref<any>(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onMouseEnter = () => {
  swiperInstance.value?.autoplay?.stop();
};

const onMouseLeave = () => {
  swiperInstance.value?.autoplay?.start();
};

// SP時のHTML変更処理
const isMobile = useMediaQuery("(max-width: 743px)");
const isMounted = useMounted();
</script>

<template>
  <section id="Bagle" class="sec-inner">
    <div class="bagle-inner">
      <header class="title-inner">
        <span>03</span>
        <h1 lang="en">Bagle</h1>
      </header>
      <div class="contens-inner">
        <div v-if="isMounted">
          <h2 lang="ja" v-if="isMobile">
            シンプルなものから、季節感あふれるベーグルまで。<br />
          </h2>

          <h2 lang="ja" v-else>
            シンプルなものから、季節感あふれる限定ベーグルまで。<br />
          </h2>
        </div>

        <div class="contens-sub-title">
          <span lang="en">From simple to seasonal limited edition bagels</span>
        </div>
      </div>

      <div v-entry class="bagle-contens fade-in">
        <Swiper
          class="swiper-inner"
          ref="swiperRef"
          :slides-per-view="'auto'"
          :centeredSlides="true"
          :space-between="-48"
          :loop="true"
          :loopedSlides="8"
          @swiper="onSwiper"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <SwiperSlide class="bagle-contens-inner">
            <div class="bagle-img">
              <img src="/images/Bagle01.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">01</span>
              <span class="bagle-contens-name" lang="en">Kinako Bagle</span>
              <span lang="ja">きなことあんみつ</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                香ばしいきなこと、ほのかに甘いあんみつの素材がふんわり香る、和のベーグル。
                黒蜜のようなコク、寒天の食感、あんこのやさしい甘さが、もちもちの生地と出会って、まるで和菓子のような味わいに。
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="bagle-contens-inner bagle-contens2">
            <div class="bagle-img">
              <img src="/images/Bagle02.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">02</span>
              <span class="bagle-contens-name" lang="en">Sugar Bagle</span>
              <span lang="ja">シナモンと砂糖</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                シナモンのスパイス感と、やわらかく香ばしい甘さのグラニュー糖が重なるシュガーベーグル。 
                外はカリッと香ばしく、中はもっちりと。
                一口ごとに広がる甘やかな香りが、ほっとひと息つきたい時間にぴったりです。
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="bagle-contens-inner bagle-contens3">
            <div class="bagle-img">
              <img src="/images/Bagle03.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">03</span>
              <span class="bagle-contens-name" lang="en">Cheese Bagle</span>
              <span lang="ja">チェダーチーズ</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                香ばしく焼き上げたチーズのコクと、小麦の風味が溶け合うチーズベーグル。 
                一口ごとに広がる塩気と旨みは、シンプルながら奥深く、食事にもワインにもよく合います。 
                外はパリッと香ばしく、中はもっちりと。
                大人の味わいを、ぜひじっくりと楽しんでください。
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="bagle-contens-inner bagle-contens4">
            <div class="bagle-img">
              <img src="/images/Bagle04.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">04</span>
              <span class="bagle-contens-name" lang="en"
                >Chocolate Chip Cocoa Bagle</span
              >
              <span lang="ja">チョコチップココア</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                ほんのり甘いチョコチップを散りばめたチョコチップココアベーグル。
                一口ごとに広がるビターな香りと、チョコのやさしい甘さが絶妙に溶け合い、デザートのような満足感をもたらします。
                外はカリッと香ばしく、中はしっとりもっちり。
                甘すぎず上品な味わいを、ティータイムやご褒美のひとときにどうぞ。
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="bagle-contens-inner bagle-contens5">
            <div class="bagle-img">
              <img src="/images/Bagle05.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">05</span>
              <span class="bagle-contens-name" lang="en"
                >Chocolate Lemon Bagle</span
              >
              <span lang="ja">チョコ檸檬ベーグル</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                ビターなチョコのコクと、レモンの爽やかな酸味が重なり合うチョコ檸檬ベーグル。
                一口ごとに感じる、ほろ苦さとすっきりとした香りのコントラストが、甘さを引き立てながら、あと口は軽やか。
                外は香ばしく焼き上げ、中はしっとりもっちり。
                甘さと酸味のバランスを楽しむ、大人のスイーツベーグルです。
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="bagle-contens-inner bagle-contens6">
            <div class="bagle-img">
              <img src="/images/Bagle06.webp" alt="" />
            </div>

            <div class="bagle-contents-title">
              <span class="bagle-contents-num">06</span>
              <span class="bagle-contens-name" lang="en">Cranberry Bagle</span>
              <span lang="ja">クランベリーベーグル</span>
            </div>

            <div class="bagle-contens-text">
              <p lang="ja">
                ほんのり甘酸っぱいクランベリーを練り込んだ、フルーティーなクランベリーベーグル。
                噛むたびに広がるジューシーな果実の香りと、小麦のやさしい風味が調和し、軽やかで飽きのこない味わいに。
                外は香ばしく、中はふんわりもっちり。
                朝食にも、おやつにもぴったりな、自然の甘さが嬉しい一品です。
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <NuxtLink v-entry class="btn-inner fade-in">
        <div class="bagle-btn">
          <span lang="en">menue</span>
          <PageLink class="bagle-btn-svg" />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
<style scoped>
.sec-inner {
  position: relative;
}

/* .title-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  margin-bottom: 7.5rem;
  font-weight: bold;
}

.title-inner span {
  font-family: "Cormorant Garamond";
  position: absolute;
  font-size: 2rem;
}

.title-inner span {
  left: 1.375rem;
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

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}

.bagle-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 14.375rem 0 11.25rem 0;
}

.bagle-contens {
  display: flex;
}

.swiper-inner {
  width: 100vw;
  height: 100%;
}

.bagle-contens-inner {
  background-color: #f7e1da;
  width: 20%;
  height: 100%;

  width: 20vw;
  height: 80vh;
  color: #6c5c53;
  padding: 118px 130px;
  font-family: "Gothic A1";
  font-weight: bold;
  border-radius: 2.4rem;
  padding: 7.75rem 6.25rem;
  opacity: 0.6;
  will-change: transform;
  will-change: opacity;
  /* transition: ease-in-out 0.5s; */
  transform: scale(0.8);
}

.swiper-slide-active.bagle-contens-inner {
  opacity: 1;
  transform: scale(0.9);
  z-index: 500;
}

.bagle-contens2 {
  background-color: #fff7ec;
}

.bagle-contens3 {
  background-color: #f7e1da;
}

.bagle-contens4 {
  background-color: #fff7ec;
}

.bagle-contens5 {
  background-color: #eef8f2;
}

.bagle-contens6 {
  background-color: #f2eef9;
}

.bagle-img {
  width: 20.25vw;
  height: 20.25vw;
  margin: 0 auto 7.375rem auto;
  margin: 0 auto;
}

.bagle-img img {
  position: relative;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.3));
}

.bagle-contents-title {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  margin: 4.625rem 0;
}

.bagle-contents-title::after {
  background-color: #000000;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;
  top: 100%;
  margin-top: 1.375rem;
  transform: translateY(-50%);
}

.bagle-contents-num {
  margin-top: 0.25rem;
}

.bagle-contens-name {
  font-size: 1.25rem;
}

.bagle-contens-text {
  line-height: 2rem;
  width: 100%;
  height: 26.4vh;
  width: 20.25vw;
}

.btn-inner {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.5rem auto 0;
  max-width: 240px;
  padding: 0.88rem 5.375rem;
  color: #543618;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background: #fff7ec;
  border-radius: 50px;
  transition-delay: 0.1s;
}

.bagle-btn {
  display: flex;
  align-items: center;
  color: #6c5c53;
  gap: 0.5rem;
}

.bagle-btn span {
  font-size: 1.5rem;
  font-family: "Gothic A1";
  font-weight: bold;
}

.bagle-btn-svg {
  fill: #cbac9b;
  fill-opacity: 0.5;
  stroke: #333333;
  transition: transform 0.3s ease;
}

/* btn-hover */
.btn-inner:hover {
  color: #fff7ec;
  background: #cbac9b;
}

.btn-inner:hover .bagle-btn {
  color: #fff7ec;
}

.btn-inner:hover .bagle-btn-svg {
  fill: #fff7ec;
  stroke: #ffff;
  transform: translate(4px, -4px);
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* タブレット対応：744px~1024px
============================================== */
@media screen and (min-width: 744px) and (max-width: 1024px) {
  .bagle-inner {
    padding: 6.25rem 0;
  }

  .swiper-wrapper {
    gap: 1.4rem;
  }

  .bagle-contens-inner {
    width: 68vw;
    height: 74vh;
    padding: unset;
    padding: 2.4rem;
    font-size: 1.2rem;
  }

  .bagle-img {
    width: 34vw;
    height: auto;
  }

  .bagle-contens-text {
    width: 100%;
    height: auto;
  }

  .bagle-contens-text p {
    font-size: 1.2rem;
  }

  .bagle-contents-num {
    font-size: 1.4rem;
  }

  .bagle-contens-name {
    font-size: 1.6rem;
  }

  .bagle-contents-title {
    margin: 3rem 0 4.625rem 0;
  }
}
/* タッチデバイスのhover削除 */
@media (hover: none) {
  .btn-inner:hover {
    color: #543618;
    background: #fff7ec;
  }
  .btn-inner:hover .bagle-btn {
    color: #6c5c53;
  }
  .btn-inner:hover .bagle-btn-svg {
    stroke: #333333;
    fill: #cbac9b;
    transform: none;
  }
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* SP、スマホ対応：743px以下
============================================== */
@media screen and (max-width: 743px) {
  .bagle-inner {
    padding: 6.25rem 0;
  }

  .swiper-wrapper {
    gap: 1.4rem;
  }

  .bagle-contens-inner {
    width: 68vw;
    height: 74vh;
    padding: unset;
    padding: 2.4rem;
  }
  .bagle-img {
    width: 34vw;
    height: auto;
  }
  .bagle-contens-text {
    width: 100%;
    height: 100%;
  }

  .bagle-contents-title {
    margin: 3rem 0 4.625rem 0;
  }
}

/* タッチデバイスのhover削除 */
@media (hover: none) {
  .btn-inner:hover {
    color: #543618;
    background: #fff7ec;
  }
  .btn-inner:hover .bagle-btn {
    color: #6c5c53;
  }
  .btn-inner:hover .bagle-btn-svg {
    stroke: #333333;
    fill: #cbac9b;
    transform: none;
  }
}
</style>
