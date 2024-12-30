<template>
  <div>
    <!-- Home Section -->
    <section class="relative">
      <div class="mx-auto min-w-full transition-opacity duration-300">
        <div class="relative">
          <div class="carousel overflow-visible">
            <div
              class="slide flex flex-col items-center"
              v-for="(slide, index) in slides"
              :key="index"
              v-show="currentSlide === index"
            >
              <img
                :src="slide.image"
                :alt="slide.title"
                class="h-screen -mt-12 -z-10 object-cover"
              />
              <div class="absolute w-full inset-0 bg-black opacity-40"></div>
              <div
                class="absolute w-full inset-0 flex flex-col items-center justify-center"
              >
                <p class="text-gray-200 font-bold text-lg">
                  {{ slide.subtitle }}
                </p>
                <h2 class="text-5xl font-black text-white">
                  {{ slide.title }}
                </h2>
                <router-link
                  to="/sneakers"
                  class="text-2xl mt-4 px-12 py-4 bg-cyan-800/75 hover:bg-cyan-800 text-white rounded-full"
                  >Explore</router-link
                >
              </div>
            </div>
          </div>
          <button
            class="absolute h-16 w-16 text-3xl font-bold left-48 top-1/2 transform -translate-y-1/2 bg-gray-200/40 hover:bg-gray-200/80 text-white px-4 py-1 rounded-full"
            @click="prevSlide"
          >
            ‹
          </button>
          <button
            class="absolute h-16 w-16 text-3xl font-bold right-48 top-1/2 transform -translate-y-1/2 bg-gray-200/40 hover:bg-gray-200/80 text-white px-4 py-1 rounded-full"
            @click="nextSlide"
          >
            ›
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <div id="about" class=""></div>
    <!-- About Section -->
    <section class="py-28 bg-white max-w-6xl mx-auto">
      <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://media.giphy.com/media/8cAUoSNGJrMyc/giphy-downsized-large.gif"
          alt="About"
          class="w-full h-full max-h-[500px] aspect-square object-cover rounded-lg shadow-md"
        />
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold mb-4">Our Sneakers Shop</h2>
          <h1 class="text-4xl font-black mb-4 text-cyan-800">
            We have Classics <br />
            and Modernity
          </h1>
          <p
            class="text-xl pr-24 text-justify text-gray-600 mb-4 leading-relaxed"
          >
            Our website is about e-commerce businesses, and I chose to be a
            sneaker website, so I decided to Do a simple website with five
            brands that I love I start with photo slideshows at the top, then
            sections, and end it up with another page that holds our sneakers. I
            hope You like it.
          </p>
          <router-link
            to="/about"
            class="text-blue-600 hover:underline text-lg mt-4 block font-bold bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 w-fit"
            >See More</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const slides = ref([
  {
    image:
      'https://images.milled.com/2019-05-04/wiadRvf5TDjTzKhg/rABAFo68doOy.gif',
    title: 'Exclusive!!! Travis Scott AJ1',
    subtitle: 'Delivering The Hottest Fashion Sneakers',
  },
  {
    image: 'src/assets/images/homeImg2.gif',
    title: 'Best Sneakers Brands',
    subtitle: 'Waiting To Be Delivered To You',
  },
  {
    image: 'src/assets/images/homeImg3.gif',
    title: 'Order Now',
    subtitle: 'Air Jordan and Air Force',
  },
  {
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/51d7f697411155.5ec46e7913bda.gif',
    title: 'Order Now',
    subtitle: 'Air Jordan and Air Force',
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style scoped>
.carousel {
  height: 100%;
  position: relative;
}

.slide {
  transition: opacity 0.5s ease-in-out;
}
</style>
