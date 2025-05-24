<script setup lang="ts">
import { ref, onMounted } from "vue";

import img1 from "@/assets/images/american-heritage-chocolate-HJUae0j54tI-unsplash.jpg";
import img2 from "@/assets/images/brenna-huff-PpxsF4LBOg-unsplash.png";
import img3 from "@/assets/images/brenna-unsplash.png";

// icon
import PlusIcon from "@/assets/icons/Subtract.svg";

// 画像のホバー時のイージング処理
// const featureRef = ref<HTMLElement | null>(null);

// const animateWidth = (
//   el: HTMLElement,
//   start: number,
//   end: number,
//   duration: number
// ): void => {
//   // アニメーションの開始を記録
//   const startTime = performance.now();

//   const step = (currentTime: number) => {
//     // アニメーション開始してから時刻を計算
//     const elapsed = currentTime - startTime;

//     // 0-1の範囲でアニメーションの進行具合
//     const progress = Math.min(elapsed / duration, 1);
//     const newWidth = start + (end - start) * progress;

//     el.style.width = `${newWidth}%`;

//     if (progress < 1) {
//       requestAnimationFrame(step);
//     }
//   };

//   requestAnimationFrame(step);
// };

// // ホバー時の関数
// const expand = () => {
//   if (featureRef.value) {
//     animateWidth(featureRef.value, 33.33, 40, 400);
//   }
// };

// // ホバー解除時の関数
// const shrink = () => {
//   if (featureRef.value) {
//     animateWidth(featureRef.value, 40, 33.33, 400);
//   }
// };
</script>

<template>
  <section class="sec-inner">
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
        <li ref="featureRef" class="feature-contents">
          <a class="feature-contens-pointer" href="">
            <div class="feature-text">
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
            <div class="feature-btn">
              <PlusIcon />
            </div>
            <div class="feature-img">
              <img :src="img1" alt="" />
            </div>
          </a>
        </li>

        <li ref="featureRef" class="feature-contents">
          <a class="feature-contens-pointer" href="">
            <div class="feature-text">
              <h3>
                <span lang="ja">焼き立てのカリッと食感をあなたに</span>
                <span lang="na">Freshly baked and crispy texture for you</span>
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
            <div class="feature-btn">
              <PlusIcon />
            </div>
            <div class="feature-img">
              <img :src="img2" alt="" />
            </div>
          </a>
        </li>

        <li ref="featureRef" class="feature-contents">
          <a class="feature-contens-pointer" href="">
            <div class="feature-text">
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
            <div class="feature-btn">
              <PlusIcon></PlusIcon>
            </div>
            <div class="feature-img">
              <img :src="img3" alt="" />
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
  margin-top: 14.375rem;
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
  height: 48.9375rem;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-duration: 0.6s;
  transition-property: width;
  will-change: width;
}

/* .feature-contents:hover {
  width: 40%;
} */

.feature-contents:hover img {
  /* transform: scaleX(1.2); */
}

.feature-contens-pointer {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}

.feature-text {
  position: relative;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  margin: 0 auto;
  top: 70%;
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
  position: relative;
  z-index: 500;
  display: flex;
  justify-content: center;
  margin-top: 3.25rem;
  top: 70%;
}

.feature-img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: translate3d scale(1.3);
  will-change: transform;
}

.feature-img img {
  object-fit: cover;
  transition: transform 0.5s ease; /* 変形のトランジション */
}

/* クリック時のテキスト */
.feature-text-sub {
  display: none;
}
</style>
