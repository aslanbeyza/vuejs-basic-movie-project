<script setup></script>

<template>
  <div id="id">
    <!-- Ana sayfaya gitmek için RouterLink -->
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/brazil">Brazil</RouterLink> |
    <RouterLink to="/hawaii">Hawaii</RouterLink> |
    <RouterLink to="/jamaica">jamaica</RouterLink> |
    <RouterLink to="/panama">panama</RouterLink> |
  </div>

  <div class="continer">
    <router-view />
  </div>
</template>
