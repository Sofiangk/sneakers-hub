<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { ref } from 'vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
const route = useRoute();
</script>
<template>
  <Header
    v-if="route.name !== 'login' && route.name !== 'signup'"
    class="sticky top-0 z-50"
  />
  <RouterView class="min-h-screen mx-auto w-full" />

  <Footer v-if="route.name !== 'login' && route.name !== 'signup'" />
</template>

<style scoped></style>
