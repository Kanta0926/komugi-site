<script setup lang="ts">
import { useRoute } from "vue-router";
import type { WPPost } from "~/types/wp";

const { data: posts } = await useFetch("/api/posts");
</script>

<template>
  <section id="News" class="sec-inner">
    <div class="news-inner">
      <header class="title-inner">
        <div><span>05</span></div>
        <h1 lang="en">News</h1>
      </header>

      <!-- RESTで取得 -->
      <div v-entry class="contens-inner fade-in">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/news/${post.id}`"
          class="news-item"
        >
          <img
            :src="
              post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.medium?.source_url ??
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url
            "
            alt="記事サムネイル"
            class="thumbnail"
          />

          <p class="date">{{ new Date(post.date).toLocaleDateString() }}</p>
          <h3 class="title" v-html="post.title.rendered" />
        </NuxtLink>
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

.contens-inner {
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.75rem;
}

/* 記事部分 */
.news-item {
  width: 14rem;
  height: 21.25rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0, 0.55, 0.45, 1),
    transform 0.3s cubic-bezier(0, 0.55, 0.45, 1);
}

.news-item:hover {
  transform: translateY(-0.4rem);
  opacity: 0.6;
}

.thumbnail {
  width: 14rem;
  height: 13.25rem;
  object-fit: cover;
}

.date {
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.875rem;
  line-height: normal;
}

.title {
  /* margin-top: 0.875rem; */

  font-weight: bold;
  font-size: 1.1rem;
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
  .contens-inner {
    display: none;
  }
}
</style>
