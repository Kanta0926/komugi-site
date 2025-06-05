<script setup lang="ts"></script>

<template>
  <div>
    <header class="site-header">
      <nav>
        <NuxtLink to="/">ホーム</NuxtLink>
        <NuxtLink to="/news">お知らせ</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <p>&copy; 2025 My Website</p>
    </footer>
  </div>
</template>
<style scoped></style>
