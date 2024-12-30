<template>
  <div class="about">
    <!-- About Section -->
    <section class="py-12 bg-white max-w-6xl mx-auto">
      <div class="container mx-auto grid md:grid-cols-2 gap-6 items-center">
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

<style></style>
