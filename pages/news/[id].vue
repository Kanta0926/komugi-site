<script setup lang="ts">
import { useRoute } from "vue-router";
import type { WPPost } from "~/types/wp";

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
    <img
      :src="
        post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium
          ?.source_url ?? post._embedded?.['wp:featuredmedia']?.[0]?.source_url
      "
      alt="記事サムネイル"
      class="thumbnail"
    />
    <div v-html="post.content.rendered" class="post-content" />
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

.thumbnail {
  width: 59.53125rem;
  height: 39.6875rem;
  margin-bottom: 1rem;
  object-fit: contain;
}

.post-content {
  line-height: 1.8;
  font-size: 1.4rem;
  color: #333333;
}
</style>
