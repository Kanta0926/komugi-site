<script setup lang="ts"></script>
<template>
  <section class="sec-inner">
    <div class="news-inner">
      <header class="title-inner">
        <div><span>05</span></div>
        <h1 lang="en">News</h1>
      </header>
      <div class="contens-inner">
        <h2 lang="ja">
          シンプルなものから、季節感あふれる限定ベーグルまで<br />
        </h2>
        <div class="contens-text-inner">
          <span lang="en">From simple to seasonal limited edition bagels</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-inner {
  position: relative;
  background-color: #fff7ec;
}

.news-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 14.375rem 0 11.25rem 0;
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
</style>
