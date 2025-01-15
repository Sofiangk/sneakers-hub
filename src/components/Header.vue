<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto flex items-center justify-between p-6 md:p-2">
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

      <div class="flex items-center space-x-1">
        <div class="relative hidden md:flex items-center mt-auto p-4">
          <button
            @click="toggleDropdown"
            class="text-navy-lighter focus:outline-none px-2 flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p v-if="authStore.isAuthenticated">{{ authStore.name }}</p>
            <p v-else @click="router.push('/login')">Login</p>
          </button>
          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute top-12 mt-2 bg-white border border-gray-300 rounded-md shadow w-48 text-black z-10"
          >
            <ul>
              <li>
                <router-link
                  v-if="authStore.role === 'admin'"
                  to="/dashboard"
                  class="block px-4 py-3 text-sm hover:bg-gray-200"
                >
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link
                  to="/login"
                  class="block px-4 py-3 text-sm hover:bg-gray-200"
                >
                  {{ authStore.isAuthenticated ? "Logout" : "Login" }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- cart -->
        <div
          class="relative hidden md:flex items-center mt-auto p-4"
          v-if="authStore.isAuthenticated && authStore.role !== 'admin'"
        >
          <button
            @click="toggleDropdownCart"
            class="text-navy-lighter focus:outline-none px-2 flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <p :class="cartCount > 0 ? 'opacity-100' : 'opacity-0'">
              {{ cartCount }}
            </p>
          </button>
          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpenCart"
            class="absolute top-12 right-24 mt-2 bg-white border border-gray-300 rounded-md shadow w-48 text-black z-10"
          >
            <Cart />
          </div>
        </div>
      </div>

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
        to="/dashboard"
        class="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >Dashboard</router-link
      >
      <router-link
        to="/login"
        class="block py-2 text-sm font-medium text-blue-700 hover:text-gray-900"
        >Log in</router-link
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Cart from "./Cart.vue";
import { useAuthStore } from "@/stores/counter";
import router from "@/router";
const authStore = useAuthStore();

const cartCount = ref(0);

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const isDropdownOpenCart = ref(false);

const toggleDropdownCart = () => {
  isDropdownOpenCart.value = !isDropdownOpenCart.value;
};

const username = ref("Yahya Big E");
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
