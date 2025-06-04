<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// パララックス処理
gsap.registerPlugin(ScrollTrigger);

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
});
</script>

<template>
  <section class="sec-inner">
    <div class="access-top-img">
      <div class="access-parallax" data-y="-20vw">
        <picture class="access-img-pic">
          <img src="/images/bagel-7706691_1920 (1).jpg" alt="" />
        </picture>
      </div>
    </div>
    <div class="access-inner">
      <header class="title-inner">
        <div><span>04</span></div>
        <h1 lang="en">Access</h1>
      </header>

      <div class="contens-inner">
        <div class="store-inner">
          <h2 lang="ja">店舗情報<br /></h2>
          <div class="contens-text-inner">
            <span lang="en">Store Information</span>
          </div>

          <div class="store-text">
            <span lang="ja">香麦好日</span>
            <span lang="ja">〒730-0025 広島件広島市東区39-82</span>
            <span lang="ja">OPEN. 9:30~17:00 年中無休</span>
          </div>
        </div>

        <div class="day-inner">
          <div class="day-text">
            <h2 lang="ja">カレンダー<br /></h2>
            <div class="contens-text-inner">
              <span lang="en">Calendar</span>
            </div>
          </div>
          <div>
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
      </div>

      <div class="map-inner">
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
  </section>
</template>

<style scoped>
/* parallax部分 */
.sec-inner {
  position: relative;
  background-color: rgba(255, 247, 236, 0.6);
  display: flex;
  flex-direction: column;
}

.feature-inner {
  margin-top: 14.375rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 14.375rem;
  padding-bottom: 14.375rem;
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

.access-parallax {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  height: 62vh;

  /* transform: translate3d scale(1.3); */
  will-change: transform;
  overflow: hidden;
  --parallax-scale: 1.3;
}

.access-parallax img {
  width: 100%;
  height: 100%;
}

.contens-inner {
  align-items: center;
  padding: 14.375rem 0 11.25rem 0;
}

.access-top-img {
}

.access-img-pic {
  /* transform: scale(1.5); */
  transform: translateY(var(--parallax-y, 0px));
  transform: translateY(calc(var(--parallax-y, 0px) * -4));

  /* transform: translate3d(0, calc(-1 * var(--parallax-y, 0)), 1px)
    scale(var(--parallax-scale)); */
  transition: transform 0.1s linear;
  will-change: transform;
  display: block;
  /* width: 100%;
  height: 100%; */
}

/* access部分 */
.access-inner {
  padding: 14.375rem 0 11.25rem 0;
}

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  width: 34.7%;
}

.sotre-inner {
  width: 40vw;
}
.store-text {
  font-size: 1.5rem;
  font-family: "Gothic A1";
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 6.0875rem;
}

.day-inner {
  width: 40vw;
  filter: grayscale(60%);
}

.day-text {
  margin-bottom: 6.25rem;
}

.day-inner iframe {
  width: 20rem;
  height: 20rem;
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
</style>
