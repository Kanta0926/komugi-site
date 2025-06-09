<script setup lang="ts">
const { data: posts } = await useFetch(
  "https://example.com/wp-json/wp/v2/posts?per_page=4&_embed"
);
</script>

<template>
  <section id="News" class="sec-inner">
    <div class="news-inner">
      <header class="title-inner">
        <div><span>05</span></div>
        <h1 lang="en">News</h1>
      </header>
      <div class="contens-inner">
        <!-- RESTで取得 -->
        <!-- <div class="news-inner">
          <div v-for="post in posts" :key="post.id" class="news-item">
            <img
              :src="post._embedded['wp:featuredmedia']?.[0]?.source_url"
              alt="thumbnail"
              class="thumbnail"
            />
            <p class="date">{{ new Date(post.date).toLocaleDateString() }}</p>
            <h3 class="title" v-html="post.title.rendered" />
          </div>
        </div> -->
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

/* 記事部分 */
.news-inner {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.news-item {
  border: 1px solid #ccc;
  padding: 1rem;
}
.thumbnail {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.date {
  font-size: 0.9rem;
  color: #888;
}
.title {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
