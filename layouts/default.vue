<script setup lang="ts">
import InstaIcon from "@/assets/icons/hugeicons_instagram.svg";
import XIcon from "@/assets/icons/Vector.svg";
</script>

<template>
  <div>
    <header class="header-inner">
      <!-- <a href="" class="nav-logo">
        <picture class="nav-logo-inner">
          <img src="/images/小麦好日ロゴ05.png" alt="" />
        </picture>
      </a> -->

      <nav class="header-nav">
        <NuxtLink to="#Feature">Feature</NuxtLink>
        <NuxtLink to="#Bagle">Bagle</NuxtLink>
        <NuxtLink to="#News">News</NuxtLink>
        <NuxtLink to="#Access">Access</NuxtLink>
        <NuxtLink to="#Instagram" class="insta-img"><InstaIcon /></NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer class="footer-inner">
      <div class="footer-nav-inner">
        <div class="footer-nav">
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

        <div class="footer-img">
          <a href="">
            <img src="/images/logo05.png" alt="" />
          </a>
        </div>

        <div class="footer-sms">
          <span lang="en">Foolow Us</span>
          <div class="footer-icon">
            <a href="" class="insta-icon">
              <InstaIcon />
            </a>
            <a href="" class="x-icon">
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      <div class="policy-inner">
        <div class="policy-right">
          <a href=""><span lang="en">Contact</span></a>
          <a href=""><span lang="en">Privacy Policy</span></a>
          <a href=""><span lang="en">Operation</span></a>
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

.footer-nav {
  /* position: absolute; */
  z-index: 100;
  /* bottom: 10%;
  left: 5%; */
}

.footer-nav a {
  font-size: 1.8rem;
  text-decoration: none;
  color: inherit;
}

.footer-nav span {
  font-family: "Cormorant Garamond";
  font-weight: bold;
  position: relative;
  padding-right: 4.375rem;
  margin-right: 1.14rem;
}

.footer-nav a span::after {
  background-color: #ffff;
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  position: absolute;
  bottom: 5%;
  right: 0;
}

.footer-img {
  width: 20%;
  height: 20%;
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
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 5rem;
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
</style>
