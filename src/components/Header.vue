<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto flex items-center justify-between p-2">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center text-xl font-bold text-gray-800"
      >
        Sneakers Hub.
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-12 transition-colors duration-150">
        <router-link
          to="/"
          class="text-base font-medium text-gray-600 hover:text-gray-900"
          >Home</router-link
        >
        <a
          href="#about"
          class="text-base font-medium text-gray-600 hover:text-gray-900"
          >About</a
        >
        <router-link
          to="/sneakers"
          class="text-base font-medium text-gray-600 hover:text-gray-900"
          >Sneakers</router-link
        >
      </div>

      <!-- Login Button -->
      <router-link
        to="/login"
        class="hidden md:block text-base font-medium text-blue-600 px-4 py-2 rounded-lg hover:text-blue-500 transition-colors duration-150"
        >Log in</router-link
      >

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden text-gray-700" @click="toggleMenu">
        <i :class="isMenuOpen ? 'bx bx-x text-2xl' : 'bx bx-menu text-2xl'"></i>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-50 p-4">
      <router-link
        to="/"
        class="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >Home</router-link
      >
      <router-link
        to="/about"
        class="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >About</router-link
      >
      <router-link
        to="/sneakers"
        class="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >Sneakers</router-link
      >
      <router-link
        to="/login"
        class="block mt-4 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
        >Log in</router-link
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
header {
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
}
nav {
  max-width: 1200px;
}
</style>
