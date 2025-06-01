<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<template>
  <section class="sec-inner">
    <div class="bagle-inner">
      <header class="title-inner">
        <div><span>03</span></div>
        <h1 lang="en">Bagle</h1>
      </header>
      <div class="contens-inner">
        <h2 lang="ja">
          シンプルなものから、季節感あふれる限定ベーグルまで<br />
        </h2>
        <div class="contens-text-inner">
          <span lang="en">From simple to seasonal limited edition bagels</span>
        </div>
      </div>

      <div class="bagle-contens">
        <Swiper
          class="swiper-inner"
          :slides-per-view="'auto'"
          :space-between="20"
        >
          <SwiperSlide class="bagle-contens-inner">
            <div class="bagle-img">
              <img src="/images/maja-vujic-HAP3ti6lOAw-unsplash.png" alt="" />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">01</spna>
              <spna class="bagle-contens-name" lang="en">Kinako Bagle</spna>
              <spna lang="ja">きなことあんみつ</spna>
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
              <img
                src="/images/yoga-nova-diansyah-iJVWqHKow_s-unsplash.png"
                alt=""
              />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">02</spna>
              <spna class="bagle-contens-name" lang="en">Sugar Bagle</spna>
              <spna lang="ja">シナモンと砂糖</spna>
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
              <img src="/images/vicky-ng-lIQRPsA43tw-unsplash.png" alt="" />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">03</spna>
              <spna class="bagle-contens-name" lang="en">Cheese Bagle</spna>
              <spna lang="ja">チェダーチーズ</spna>
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

          <SwiperSlide class="bagle-contens-inner bagle-contens3">
            <div class="bagle-img">
              <img src="/images/32548518_m.png" alt="" />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">04</spna>
              <spna class="bagle-contens-name" lang="en"
                >Chocolate Chip Cocoa Bagle</spna
              >
              <spna lang="ja">チョコチップココア</spna>
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

          <SwiperSlide class="bagle-contens-inner bagle-contens3">
            <div class="bagle-img">
              <img src="/images/32085879_s.png" alt="" />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">05</spna>
              <spna class="bagle-contens-name" lang="en"
                >Chocolate Lemon Bagle</spna
              >
              <spna lang="ja">チョコ檸檬ベーグル</spna>
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

          <SwiperSlide class="bagle-contens-inner bagle-contens3">
            <div class="bagle-img">
              <img src="/images/3711959_s.png" alt="" />
            </div>

            <div class="bagle-contents-title">
              <spna class="bagle-contents-num">06</spna>
              <spna class="bagle-contens-name" lang="en">Cranberry Bagle</spna>
              <spna lang="ja">クランベリーベーグル</spna>
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
    </div>
  </section>
</template>
<style scoped>
.sec-inner {
  position: relative;
}

.bagle-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 14.375rem;
}

.title-inner {
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

.title-inner h1 {
  font-size: 4rem;
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
}

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}

.bagel-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 14.375rem;
}

.bagle-contens {
  display: flex;
}

.swiper-inner {
  width: 100%;
  height: 100%;
}

.bagle-contens-inner {
  background-color: #f7e1da;
  width: 20%;
  height: 100%;
  color: #333333;
  padding: 118px 130px;
  font-family: "Gothic A1";
  font-weight: bold;
  border-radius: 2.4rem;
  padding: 7.75rem 6.25rem;
}

.bagle-contens2 {
  background-color: #fff7ec;
}

.bagle-contens3 {
  background-color: #ff8983;
}

.bagle-img {
  width: 80%;
  height: auto;
  margin: 0 auto 7.375rem auto;
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
  margin-bottom: 4.625rem;
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
}
</style>
