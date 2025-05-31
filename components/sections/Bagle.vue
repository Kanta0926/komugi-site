<script setup lang="ts"></script>
<template>
  <section class="sec-inner">
    <div class="bagle-inner">
      <header class="title-inner">
        <div><span>03</span></div>
        <h1>Bagle</h1>
      </header>
      <div class="contens-inner">
        <h2>シンプルなものから、季節感あふれる限定ベーグルまで<br /></h2>
        <div class="contens-text-inner">
          <span>From simple to seasonal limited edition bagels</span>
        </div>
      </div>

      <div class=""></div>
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
</style>
