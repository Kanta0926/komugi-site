<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// icon
import PlusIcon from "@/assets/icons/Subtract.svg";

// パララックス処理
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray<HTMLElement>(".js-parallax").forEach((el) => {
    const y = el.dataset.y || "20vw";
    gsap.to(el, {
      y,
      scale: 1.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
      },
    });
  });
});

// liのトグル処理
const liftedIndex = ref<number | null>(null);

function toggleLift(index: number) {
  liftedIndex.value = liftedIndex.value === index ? null : index;
}
</script>

<template>
  <section id="Feature" class="sec-inner">
    <div class="feature-inner">
      <header class="title-inner">
        <div><span>02</span></div>
        <h1>Feature</h1>
      </header>
      <div class="contens-inner">
        <h2>こだわりがある、ベーグルを。<br /></h2>
        <div class="contens-text-inner">
          <span>Bagels with a Special Attention to Detail</span>
        </div>
      </div>

      <div v-entry class="feature-contens-inner fade-in">
        <li
          class="feature-contents"
          @click="toggleLift(0)"
          :class="{ lifted: liftedIndex === 0 }"
        >
          <a class="feature-contens-pointer" href="javascript:void(0)">
            <div class="feature-text">
              <div class="feature-text-inner">
                <h3>
                  <span lang="ja">素材にこだわっているからこそ</span>
                  <span lang="na"
                    >because we are particular about the materials we use</span
                  >
                </h3>

                <div class="feature-text-sub">
                  <p>小麦本来の香りと甘みを、まっすぐに伝えます。</p>
                  <p>
                    私たちは、国産小麦をはじめとした安心
                    できる素材にこだわり、余計なものを加えず、シンプルでいて深みのある味を追求しています。
                  </p>
                  <p>毎朝の手ごねから焼き上げまで、一つひとつ丁寧に。</p>
                </div>
              </div>
            </div>
            <div class="feature-btn">
              <PlusIcon />
            </div>
            <div class="feature-vell"></div>

            <div class="feature-img js-parallax" data-y="-20vw">
              <picture class="feature-img-pic">
                <img src="/images/Feature01.webp" alt="" />
              </picture>
            </div>
          </a>
        </li>

        <li
          class="feature-contents"
          @click="toggleLift(1)"
          :class="{ lifted: liftedIndex === 1 }"
        >
          <a class="feature-contens-pointer" href="javascript:void(0)">
            <div class="feature-text">
              <div class="feature-text-inner">
                <h3>
                  <span lang="ja">焼き立てのカリッと食感をあなたに</span>
                  <span lang="na"
                    >Freshly baked and crispy texture for you</span
                  >
                </h3>

                <div class="feature-text-sub">
                  <p>
                    高温のオーブンでしっかりと焼き上げたクラストは、パリッと香ばしく。
                  </p>
                  <p>噛むたびに広がる、小麦本来の風味とやさしい甘み。</p>
                  <p>
                    手間を惜しまず、心を込めて焼き上げた一つのベーグルに、きっとあなたの好きが詰まっています。
                  </p>
                </div>
              </div>
            </div>
            <div class="feature-btn">
              <PlusIcon />
            </div>
            <div class="feature-vell"></div>

            <div class="feature-img js-parallax" data-y="-20vw">
              <picture class="feature-img-pic">
                <img src="/images/Feature02.webp" alt="" />
              </picture>
            </div>
          </a>
        </li>

        <li
          class="feature-contents"
          @click="toggleLift(2)"
          :class="{ lifted: liftedIndex === 2 }"
        >
          <a class="feature-contens-pointer" href="javascript:void(0)">
            <div class="feature-text">
              <div class="feature-text-inner">
                <h3>
                  <span lang="ja">季節ごとのベーグルで新たな体験を</span>
                  <span lang="na"
                    >Feel a new experience with seasonal bagels</span
                  >
                </h3>

                <div class="feature-text-sub">
                  <p>
                    春はいちご、夏はとうもろこし、秋はかぼちゃ、冬はチョコとスパイス。
                  </p>
                  <p>
                    旬の素材をたっぷり使った、季節限定のベーグルたちは、毎回ちょっとしたワクワクを届けてくれます。
                  </p>
                  <p>今日はどんな味に出会えるか。</p>
                </div>
              </div>
            </div>
            <div class="feature-btn">
              <PlusIcon />
            </div>
            <div class="feature-vell"></div>

            <div class="feature-img js-parallax" data-y="-20vw">
              <picture class="feature-img-pic">
                <img src="/images/Feature03.webp" alt="" />
              </picture>
            </div>
          </a>
        </li>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-inner {
  position: relative;
  background-color: #fff7ec;
}

.feature-inner {
  /* margin-top: 14.375rem; */
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 14.375rem;
  padding-bottom: 14.375rem;
}

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 34.7%;
}

.contens-inner p {
  margin-top: 6.125rem;
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 3.25rem;
  width: ;
}

.feature-contens-inner {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.feature-contents {
  width: 33.3333%;
  height: 100%;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-duration: 0.6s;
  transition-property: width;
  will-change: width;
}

.feature-contents:hover {
  width: 40%;
}

.feature-contens-pointer {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}

.feature-text {
  position: relative;
  z-index: 500;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 24rem;
  margin: 0 auto;
  /* top: 70%; */
  flex-direction: column;
  mask-image: url("/images/maskGradation04.png");
  mask-size: 100% 100%;
  padding: 10rem 0 9rem 0;
  height: 100%;
  box-sizing: border-box;
}

.feature-text-inner {
  transform: translateY(10rem);
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-duration: 0.6s;
  transition-property: transform;
  will-change: transform;
}

.feature-contents a {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}

.feature-contents a h3 {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #ffff;
  text-align: center;
  margin: 2.5rem 0;
}

.feature-contents a h3 [lang="ja"] {
  font-size: 1.25rem;
  font-family: "Gothic A1";
  font-weight: bold;
}

.feature-contents a h3 [lang="en"] {
  font-size: 1rem;
}

.feature-btn {
  fill: #ffff;
  position: absolute;
  z-index: 500;
  display: flex;
  justify-content: center;
  left: 50%;
  bottom: 3rem;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-duration: 0.6s;
  transition-property: transform;
  will-change: transform;
  /* top: 70%; */
}

.feature-img {
  position: absolute;
  top: 18%;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: scale(1.4);
  will-change: transform;
  overflow: hidden;
}

.feature-img img {
  object-fit: cover;
  transition: transform 0.5s ease; /* 変形のトランジション */
}

/* クリック時のテキスト */
.feature-text-sub {
  color: #ffff;
  font-size: 1rem;
  font-family: "Gothic A1";
  font-weight: bold;
}

.feature-vell {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgb(60, 60, 60);
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-duration: 0.6s;
  transition-property: opacity;
  will-change: opacity;
}

.lifted .feature-text-inner {
  transform: translateY(0);
}

.lifted .feature-btn {
  transform: rotate(90deg);
}

.lifted .feature-vell {
  opacity: 0.2;
}

.feature-img-pic {
  /* transition: transform 0.1s linear; */
  will-change: transform;
  height: 100%;
  display: block;
  width: 100%;
}
</style>
