<script setup lang="ts">
import type { WPPost } from "~/types/wp";

const CATEGORY_ID = 7;
// API呼び出し
const { data: posts } = await useFetch<WPPost[]>(
  "http://xs666826.xsrv.jp/wp-json/wp/v2/posts",
  {
    query: {
      categories: CATEGORY_ID,
      _embed: "",
      per_page: 4,
    },
  }
);
console.log(posts.value);
</script>

<template>
  <section id="News" class="sec-inner">
    <div class="news-inner">
      <header class="title-inner">
        <div><span>05</span></div>
        <h1 lang="en">News</h1>
      </header>

      <!-- RESTで取得 -->
      <div class="contens-inner">
        <div v-for="post in posts" :key="post.id" class="news-item">
          <!-- <img
            :src="post._embedded['wp:featuredmedia']?.[0]?.source_url"
            alt="thumbnail"
            class="thumbnail"
          /> -->

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
</style>
