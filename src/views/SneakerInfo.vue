<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <router-link
                :to="breadcrumb.href"
                class="mr-2 text-sm font-medium text-gray-900"
                >{{ breadcrumb.name }}</router-link
              >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <router-link
              :to="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              >{{ name }}</router-link
            >
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 max-h-screen"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="imgUrl + image"
          alt=""
        />

        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <!-- Options -->
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p
              class="text-3xl tracking-tight text-gray-900"
              :class="
                price_after_discount > 0 ? 'line-through text-red-500' : ''
              "
            >
              {{ price }} $
            </p>
            <p v-if="price_after_discount > 0">{{ price_after_discount }} $</p>

            <!-- Reviews -->
            <div class="mt-6">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      reviews.average > rating
                        ? 'text-gray-900'
                        : 'text-gray-200',
                      'size-5 shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                <a
                  :href="reviews.href"
                  class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >{{ reviews.totalCount }} reviews</a
                >
              </div>
            </div>

            <form class="mt-10">
              <!-- Colors -->
              <div>
                <h3 class="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" class="mt-4">
                  <RadioGroup
                    v-model="selectedColor"
                    class="flex items-center gap-x-3"
                  >
                    <RadioGroupOption
                      as="template"
                      v-for="color in colors"
                      :key="color.name"
                      :value="color"
                      :aria-label="color.name"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          color.selectedClass,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            color.class,
                            'size-8 rounded-full border border-black/10',
                          ]"
                        />
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>

              <!-- Sizes -->
              <div class="mt-10">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >Size guide</a
                  >
                </div>

                <fieldset aria-label="Choose a size" class="mt-4">
                  <RadioGroup
                    v-model="selectedSize"
                    class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    <RadioGroupOption
                      as="template"
                      v-for="size in sizes"
                      :key="size.name"
                      :value="size"
                      :disabled="!size.inStock"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          active ? 'ring-2 ring-indigo-500' : '',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                        ]"
                      >
                        <span>{{ size.name }}</span>
                        <span
                          v-if="size.inStock"
                          :class="[
                            active ? 'border' : 'border-2',
                            checked
                              ? 'border-indigo-500'
                              : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-md',
                          ]"
                          aria-hidden="true"
                        />
                        <span
                          v-else
                          aria-hidden="true"
                          class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            class="absolute inset-0 size-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vector-effect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ name }}
          </h1>
        </div>

        <!-- Options -->

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li
                  v-for="highlight in product.highlights"
                  :key="highlight"
                  class="text-gray-400"
                >
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
import router from "@/router";
import axios from "axios";
const imgUrl = import.meta.env.VITE_APP_Image_Url;
const name = ref("");
const price = ref(0);
const images = ref([]);
const colors = ref([]);
const sizes = ref([]);
const brand = ref("");
const description = ref("");
const price_after_discount = ref(0);
const id = router.currentRoute.value.params.id;
const product = {
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Sneakers", href: "/sneakers" },
  ],

  highlights: [
    "Mesh and synthetic upper for lightweight breathability",
    "Dual-density foam midsole for cushioning",
    "Max Air 270 unit delivers unrivaled, all-day comfort",
    "Rubber outsole for durable traction",
  ],
  details:
    "The Nike Air Max 270 is the first Air Max designed specifically for all-day comfort. The shoe's design is inspired by the Air Max 93 and 180, and it features Nike's largest heel Air unit yet at 32-mm tall. The result is a shoe that's perfect for all-day wear, whether you're running errands or hitting the town.",
};

const reviews = { href: "#", average: 4.5, totalCount: 1875 };

const selectedColor = ref(colors);
const selectedSize = ref(sizes);
const fetchProduct = async () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  try {
    const response = await axios.get(apiUrl + "products/" + id);
    const productData = response.data;
    name.value = productData.name;
    price.value = productData.price;
    images.value = productData.images;
    colors.value = productData.colors;
    sizes.value = productData.sizes;
    brand.value = productData.brand;
    description.value = productData.description;
    price_after_discount.value = productData.price_after_discount;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => fetchProduct());
</script>
