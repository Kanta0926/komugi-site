<script setup lang="ts">
import { useRoute } from "vue-router";
import type { WPPost } from "~/types/wp";
import PageLink from "@/assets/icons/akar-icons_link-out.svg";

// URLから現在のidを取得
const route = useRoute();
const postId = route.params.id;

const { data: post } = await useFetch<WPPost>(
  // idの記事を取得
  `https://xs666826.xsrv.jp/wp-json/wp/v2/posts/${postId}`,
  {
    query: { _embed: "" },
  }
);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString();
}
</script>

<template>
  <div v-if="post" class="post-inner">
    <h1 v-html="post.title.rendered" class="post-title" />
    <p class="post-day">{{ formatDate(post.date) }}</p>
    <div class="post-image">
      <img
        :src="
          post._embedded?.['wp:featuredmedia']?.[0]?.media_details
            ?.source_url ??
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url
        "
        alt="記事サムネイル"
        class="thumbnail"
      />
    </div>
    <div v-html="post.content.rendered" class="post-content" />

    <NuxtLink :to="`/`" class="btn-inner">
      <div class="post-btn">
        <span>home</span>
        <PageLink class="post-btn-svg" />
      </div>
    </NuxtLink>
  </div>
  <p v-else>読み込み中...</p>
</template>

<style scoped>
.post-inner {
  /* width: 60vw; */
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 7.5rem 0;
  align-items: center;
}

.post-title {
  color: #333333;
}

.post-day {
  color: #888;
  font-size: 1rem;
}

.post-image {
  width: 59.53125rem;
  height: 39.6875rem;

  margin: 4rem;
}

.post-image img {
  object-fit: contain;
  object-fit: cover;
}

.post-content {
  font-size: 1rem;
  color: #333333;
  line-height: 2rem;
  font-family: "Gothic A1";
  font-weight: bold;
}

/* 下部ボタン */
.btn-inner {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 6rem auto 0;
  max-width: 240px;
  padding: 0.88rem 5.375rem;
  color: #543618;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background: #fff7ec;
  border-radius: 50px;
  transition-delay: 0.1s;
}

.post-btn {
  display: flex;
  justify-self: center;
  align-items: center;
  color: #6c5c53;
  gap: 0.5rem;
}

.post-btn span {
  font-size: 1.5rem;
  font-family: "Gothic A1";
  font-weight: 600;
}

.post-btn-svg {
  fill: #cbac9b;
  fill-opacity: 0.5;
  stroke: #333333;
  transition: transform 0.3s ease;
}

/* btn-hover */
.btn-inner:hover {
  color: #fff7ec;
  background: #cbac9b;
}

.btn-inner:hover .post-btn {
  color: #fff7ec;
}

.btn-inner:hover .post-btn-svg {
  fill: #fff7ec;
  stroke: #ffff;
  transform: translate(4px, -4px);
}
</style>
