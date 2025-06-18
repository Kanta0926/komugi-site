<script setup lang="ts">
import { useRoute } from "vue-router";
import type { WPPost } from "~/types/wp";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useMediaQuery, useMounted } from "@vueuse/core";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const { data: posts } = await useFetch("/api/posts");

// SP時のHTML変更処理
const isMobile = useMediaQuery("(max-width: 743px)");
const isTablet = useMediaQuery("(min-width: 744px) and (max-width: 1024px)");
const isPC = useMediaQuery("(min-width: 1025px)");
const isMounted = useMounted();

// Swiperの処理
const swiperRef = ref<any>(null);
const swiperInstance = ref<any>(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};
</script>

<template>
  <section id="News" class="sec-inner">
    <div class="news-inner">
      <header class="title-inner">
        <span>05</span>
        <h1 lang="en">News</h1>
      </header>

      <!-- <div v-if="isMounted"> -->
      <!-- SP表示 -->
      <div v-if="isMounted && isMobile" v-entry class="contens-inner fade-in">
        <Swiper
          class="swiper-inner"
          ref="swiperRef"
          :slides-per-view="'auto'"
          :centeredSlides="true"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="post in posts" :key="post.id" class="news-slide">
            <NuxtLink :to="`/news/${post.id}`" class="news-item">
              <img
                :src="
                  post._embedded?.['wp:featuredmedia']?.[0]?.media_details
                    ?.sizes?.medium?.source_url ??
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                "
                alt="記事サムネイル"
                class="thumbnail"
              />

              <p class="date">
                {{ new Date(post.date).toLocaleDateString() }}
              </p>
              <h3 class="title" v-html="post.title.rendered" />
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- TB表示 -->
      <div
        v-else-if="isMounted && isTablet"
        v-entry
        class="contens-inner fade-in"
      >
        <Swiper
          class="swiper-inner"
          ref="swiperRef"
          :slides-per-view="'auto'"
          :centeredSlides="true"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="post in posts" :key="post.id" class="news-slide">
            <NuxtLink :to="`/news/${post.id}`" class="news-item">
              <img
                :src="
                  post._embedded?.['wp:featuredmedia']?.[0]?.media_details
                    ?.sizes?.medium?.source_url ??
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                "
                alt="記事サムネイル"
                class="thumbnail"
              />

              <p class="date">
                {{ new Date(post.date).toLocaleDateString() }}
              </p>
              <h3 class="title" v-html="post.title.rendered" />
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- RESTで取得 -->
      <!-- PC表示 -->
      <div v-else v-entry class="contens-inner fade-in">
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
    <!-- </div> -->
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
  .sec-inner {
    overflow: hidden;
  }

  .news-inner {
    padding: 6.25rem 0;
  }

  .contens-inner {
    width: 96%;
    margin: unset;
    margin-left: 0.8rem;
  }

  .swiper-slide {
    width: 84%;
    margin-right: 2.5rem;
  }

  .news-item {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .thumbnail {
    width: 100%;
    height: 32vh;
  }

  .date {
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.25rem;
  }
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
/* SP、スマホ対応：743px以下
============================================== */
@media screen and (max-width: 743px) {
  .sec-inner {
    overflow: hidden;
  }

  .news-inner {
    padding: 6.25rem 0;
  }

  .contens-inner {
    width: 96%;
    margin: unset;
    margin-left: 0.8rem;
  }

  .swiper-slide {
    width: 78%;
    margin-right: 2.5rem;
  }

  .news-item {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .thumbnail {
    width: 18rem;
  }
}

/* タッチデバイスのhover削除 */
@media (hover: none) {
  .news-item:hover {
    transform: none;
    opacity: 1;
  }
}
</style>
