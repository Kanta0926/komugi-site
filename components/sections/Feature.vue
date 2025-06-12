<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useHoverWidth } from "@/composables/useHoverWidth";

// icon
import PlusIcon from "@/assets/icons/Subtract.svg";

// パララックス処理
gsap.registerPlugin(ScrollTrigger);

// const { expand, shrink } = useHoverWidth();

// const featureEl = ref<HTMLElement | null>(null);

onMounted(() => {
  // if (featureEl.value) {
  //   // 初期幅を明示的に指定してもOK（省略可能）
  //   shrink(featureEl.value);
  // }
  // const expand = () => {
  //   if (featureEl.value) expand(featureEl.value);
  // };
  // const shrink = () => {
  //   if (featureEl.value) shrink(featureEl.value);
  // };
  // liの上下parallax
  // const elements = document.querySelectorAll<HTMLElement>(".js-parallax");
  // elements.forEach((el) => {
  //   gsap.to(el, {
  //     "--parallax-y": "0px", // 初期値
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: false,
  //       onUpdate: (self) => {
  //         const progress = self.progress; // 0〜1 の値
  //         const offset = 250 * progress; // パララックス量
  //         el.style.setProperty("--parallax-y", `${offset}px`);
  //       },
  //     },
  //   });
  // });

  gsap.utils.toArray<HTMLElement>(".js-parallax").forEach((el) => {
    const y = el.dataset.y || "-20vw"; // data属性の値を使う
    gsap.to(el, {
      y,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
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

      <div class="feature-contens-inner">
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
                <img
                  src="/images/american-heritage-chocolate-HJUae0j54tI-unsplash.webp"
                  alt=""
                />
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
                <img
                  src="/images/brenna-huff-PpxsF4LBOg-unsplash.webp"
                  alt=""
                />
              </picture>
            </div>
          </a>
        </li>

        <li
          class="feature-contents"
          @click="toggleLift(2)"
          :class="{ lifted: liftedIndex === 2 }"
          ref="featureEl"
          @mouseenter="() => featureEl && expand(featureEl)"
          @mouseleave="() => featureEl && shrink(featureEl)"
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
                <img src="/images/brenna-unsplash.webp" alt="" />
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

/* .contens-inner h2 {
  font-size: 1.375rem;
  font-weight: 600;
} */

/* .contens-text-inner {
  margin-top: 1.375rem;
} */

/* .contens-text-inner::after {
  background-color: #000000;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;

  margin-top: 1.375rem;
} */

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

/* .feature-contents:hover {
  width: 40%;
} */

/* .feature-contents:hover img {
  transform: scaleX(1.2);
} */

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
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: scale(1.3);
  will-change: transform;
  overflow: hidden;
  --parallax-scale: 1.3;
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

/* .feature-text {
  transition: transform 0.4s ease;
} */

.lifted .feature-text-inner {
  transform: translateY(0); /* 上に20px浮かせる */
}

.lifted .feature-btn {
  transform: rotate(90deg); /* 上に20px浮かせる */
}

.lifted .feature-vell {
  opacity: 0.2;
}

/* .lifted.feature-img {
  transform: translateY(-20px);
} */

.feature-img-pic {
  /* transform: scale(1.5);
  transform: translateY(var(--parallax-y, 0px)); */
  transform: translate3d(0, calc(1 * var(--parallax-y, 0)), 1px)
    scale(var(--parallax-scale));
  /* transition: transform 0.1s linear; */
  will-change: transform;
  height: 100%;
  display: block;
  width: 100%;
}
</style>
