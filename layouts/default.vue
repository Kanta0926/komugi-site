<script setup lang="ts">
import { ref, provide, watch } from "vue";

import { useScrollTo } from "@/composables/useScrollTo";

import InstaIcon from "@/assets/icons/hugeicons_instagram.svg";
import XIcon from "@/assets/icons/Vector.svg";

// headerの出現処理
const showHeader = ref(false);
provide("showHeader", showHeader);

// スムーススクロールの処理
const { scrollTo } = useScrollTo();
// scrollTo("#section2", { offset: 0 });

// watch(
//   () => route.fullPath,
//   (newPath) => {
//     if (newPath === "/") {
//       // ページ最上部に戻っているか確認
//       if (window.scrollY < 100) {
//         showHeader.value = false;
//       }
//     }
//   },
//   { immediate: true }
// );
</script>

<template>
  <div>
    <Transition name="fade">
      <header v-if="showHeader" class="header-inner">
        <!-- <a href="" class="nav-logo">
        <picture class="nav-logo-inner">
          <img src="/images/小麦好日ロゴ05.png" alt="" />
        </picture>
      </a> -->

        <nav class="header-nav">
          <a @click.prevent="() => scrollTo('#About')"> ABOUT </a>
          <a @click.prevent="() => scrollTo('#Feature')"> Feature </a>
          <a @click.prevent="() => scrollTo('#Bagle')"> Bagle </a>
          <a @click.prevent="() => scrollTo('#News')"> News </a>
          <a @click.prevent="() => scrollTo('#Access')"> Access </a>
          <!-- <a @click.prevent="() => scrollTo('#Insta', { offset: -100 })">
            Insta
          </a> -->
        </nav>
      </header>
    </Transition>

    <main>
      <NuxtPage />
    </main>

    <footer class="footer-inner">
      <div class="footer-nav-inner">
        <div class="footer-nav">
          <ul>
            <li>
              <a @click.prevent="() => scrollTo('#About')">
                <span class="footer-nav-num">01</span>
                <span class="footer-nav-text">about</span>
              </a>
            </li>
            <li>
              <a @click.prevent="() => scrollTo('#Feature')">
                <span class="footer-nav-num">02</span>
                <span class="footer-nav-text">Feature</span>
              </a>
            </li>
            <li>
              <a @click.prevent="() => scrollTo('#Bagle')">
                <span class="footer-nav-num">03</span>
                <span class="footer-nav-text">Bagle</span>
              </a>
            </li>
            <li>
              <a @click.prevent="() => scrollTo('#News')">
                <span class="footer-nav-num">04</span>
                <span class="footer-nav-text">News</span>
              </a>
            </li>
            <li>
              <a @click.prevent="() => scrollTo('#Access')">
                <span class="footer-nav-num">05</span>
                <span class="footer-nav-text">Access</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-img">
          <NuxtLink to="#Top">
            <img src="/images/logo05.png" alt="" />
          </NuxtLink>
        </div>

        <div class="footer-sms">
          <span lang="en">Foolow Us</span>
          <div class="footer-icon">
            <NuxtLink to="" class="insta-icon">
              <InstaIcon />
            </NuxtLink>
            <NuxtLink to="" class="x-icon">
              <XIcon />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="policy-inner">
        <div class="policy-right">
          <NuxtLink to=""><span lang="en">Contact</span></NuxtLink>
          <NuxtLink to=""><span lang="en">Privacy Policy</span></NuxtLink>
          <NuxtLink to=""><span lang="en">Operation</span></NuxtLink>
        </div>
        <p class="policy-left">&copy; 2025 KOMUGIKOUJITU</p>
      </div>

      <div class="bigtext-inner">
        <span lang="en">KOMUGI KOUJITU</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  mix-blend-mode: exclusion;
  z-index: 600;
  justify-content: end;
  width: 100%;
  padding: 2rem 2rem 0 0;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.nav-logo {
  width: 12%;
  height: 20%;
}

.nav-logo-inner {
}

.header-nav {
  font-size: 1.8rem;
  display: flex;
  gap: 2rem;
}

.header-nav a {
  color: #ffff;
  transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.header-nav a:hover {
  transform: translateY(-0.4rem);
}

.insta-img {
  margin-top: 0.2rem;
}

/* footer */
.footer-inner {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  background-color: #c0a487;
}

.footer-nav-inner {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 4rem;
  position: relative;
  padding: 0 4rem;
  box-sizing: border-box;
}

.footer-nav-inner::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 110%;
}

.footer-nav span:first-of-type::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 50%;
  height: 1px;
  position: absolute;
  top: 90%;
  left: 50%;
}

.footer-nav {
  z-index: 100;
  position: relative;
  /* bottom: 10%;
  left: 5%; */
}

.footer-nav a {
  font-size: 1.8rem;
  text-decoration: none;
  color: inherit;
  /* transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1); */
  /* transform: translateY(0); */
  display: inline-block;
}

.footer-nav span {
  font-family: "Cormorant Garamond";
  font-weight: bold;
  position: relative;
}

.footer-nav-num {
  padding-right: 4.375rem;
  margin-right: 1.14rem;
}

.footer-nav-text {
  transform: translateX(0);
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.footer-nav a:hover .footer-nav-text {
  transform: translateX(0.4rem);
}

.footer-img {
  width: 20%;
  height: 20%;
  opacity: 1;
}

.footer-img a {
  transition: opacity 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.footer-img a:hover {
  opacity: 0.6;
}

.footer-sms {
}

.footer-sms span {
  font-size: 1.8rem;
}

.footer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;
}

.footer-icon a {
  transition: transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.footer-icon a:hover {
  transform: translateY(-0.4rem);
}

.insta-icon {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 14px;
  background-color: #ffff;
  padding: 6px;
  justify-content: center;
  align-items: center;
}

.insta-icon svg {
  fill: #333333;
  stroke: #333333;
}

.x-icon {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 14px;
  background-color: #ffff;
  padding: 6px;
  justify-content: center;
  align-items: center;
}

.x-icon svg {
  width: 1.6rem;
  height: 1.6rem;
}

.policy-inner {
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5rem;
  padding: 0 12rem;
  box-sizing: border-box;
}

.policy-right {
  display: flex;
  gap: 4rem;
}

.policy-right span {
  color: #ffff;
}

.policy-left {
  margin: 0;
}

.bigtext-inner {
}

.bigtext-inner span {
  font-size: 8rem;
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
  .header-inner {
    display: none;
  }

  .footer-inner {
    /* display: none; */
    overflow: hidden;
    padding: 6.25rem 0 0 0;
  }

  .footer-nav-inner {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  .footer-img {
    width: 60%;
    height: 60%;
  }

  .policy-inner {
    padding: unset;
    flex-direction: column;
    margin-bottom: 4rem;
  }

  .policy-right {
    margin-bottom: 2rem;
  }

  .bigtext-inner {
    align-items: center;
  }

  .bigtext-inner span {
    font-size: 5rem;
  }
}

/* タッチデバイスのhover削除 */
@media (hover: none) {
  .footer-nav a:hover .footer-nav-text,
  .footer-img a:hover,
  .footer-icon a:hover {
    transform: none;
    opacity: 1;
  }
}
</style>
