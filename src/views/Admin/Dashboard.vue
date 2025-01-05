<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-center">Add New Sneaker</h1>
    <form submit.prevent="addSneaker">
      <div class="space-y-12 max-w-3xl mx-auto">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold text-gray-900">Product Details</h2>
          <p class="mt-1 text-sm text-gray-600">
            Add or edit the details of your product below.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="product-name"
                class="block text-sm font-medium text-gray-900"
                >Product Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="brand" class="block text-sm font-medium text-gray-900"
                >Brand</label
              >
              <div class="mt-2">
                <select
                  id="brand"
                  name="brand"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                >
                  <option value="adidas">Adidas</option>
                  <option value="nike">Nike</option>
                  <option value="converse">Converse</option>
                  <option value="jordan">Jordan</option>
                  <option value="underarmour">Under Armour</option>
                  <option value="new balance">New Balance</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium text-gray-900"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                ></textarea>
              </div>
              <p class="mt-3 text-sm text-gray-600">
                Provide a brief description of your product.
              </p>
            </div>

            <!-- image upload -->

            <h1 class="block -mb-6 text-sm font-medium text-gray-900">
              Upload Image
            </h1>
            <div class="flex items-center justify-center w-full col-span-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  @change="uploadImage"
                />
              </label>
            </div>

            <!-- image preview -->
            <h1 class="block -mb-6 text-sm font-medium text-gray-900">
              Preview
            </h1>
            <div class="flex items-center w-full col-span-full">
              <img
                v-if="sneaker.imageSrc"
                :src="sneaker.imageSrc"
                alt="Preview"
                class="max-h-64 object-contain"
              />
              <p v-else class="text-gray-500 text-sm">No image uploaded yet.</p>
            </div>

            <!-- Color Options -->
            <div class="col-span-full">
              <h3 class="block text-sm font-medium text-gray-900">Colors</h3>
              <div class="mt-2 grid grid-cols-3 gap-4">
                <div
                  v-for="(color, index) in sneaker.colors"
                  :key="index"
                  class="mt-4 -mr-7 flex items-center space-x-4"
                >
                  <input
                    v-model="color.hex"
                    type="color"
                    class="block w-16 h-10 border border-gray-300 rounded-md px-2 p-1 cursor-pointer"
                  />
                  <input
                    v-model="color.name"
                    type="text"
                    placeholder="Color Name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                  <button
                    @click="removeColor(index)"
                    type="button"
                    class="relative right-8 bottom-4 min-h-5 min-w-5 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                @click="addColor"
                type="button"
                class="mt-3 text-blue-600 hover:underline"
              >
                + Add
              </button>
            </div>
            <!-- Size Options -->
            <div class="col-span-full">
              <h3 class="block text-sm font-medium text-gray-900">Sizes</h3>
              <div class="grid grid-cols-4 mt-2 gap-4 items-center">
                <div
                  v-for="(size, index) in sneaker.sizes"
                  :key="index"
                  class="mt-4 flex items-center space-x-1"
                >
                  <input
                    v-model="size.name"
                    type="text"
                    placeholder="e.g., 37"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                  <label
                    :for="'is-in-stock-' + index"
                    class="relative inline-block h-8 min-w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                  >
                    <input
                      type="checkbox"
                      :id="'is-in-stock-' + index"
                      v-model="size.inStock"
                      class="peer sr-only"
                    />
                    <span
                      class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
                    ></span>
                  </label>
                  <button
                    @click="removeSize(index)"
                    type="button"
                    class="relative right-20 bottom-4 min-h-5 min-w-5 flex items-center justify-center cursor-pointer rounded-full bg-red-600 transition text-white hover:bg-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                @click="addSize"
                type="button"
                class="mt-3 text-blue-600 hover:underline"
              >
                + Add
              </button>
            </div>

            <!-- On Sale Toggle -->
            <div class="sm:col-span-1">
              <label class="mb-2 block text-sm font-medium text-gray-900"
                >On Sale</label
              >
              <label
                for="on-sale-toggle"
                class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
              >
                <input
                  type="checkbox"
                  id="on-sale-toggle"
                  v-model="sneaker.onSale"
                  class="peer sr-only"
                />

                <span
                  class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
                ></span>
              </label>
            </div>

            <!-- Price -->
            <div class="sm:col-span-5 grid grid-cols-2 gap-6">
              <div class="sm:col-span-1">
                <label
                  for="price"
                  class="block text-sm font-medium text-gray-900"
                  >Price ($)</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>
              </div>

              <!-- price after discount -->
              <div class="sm:col-span-1">
                <label
                  for="discounted-price"
                  class="block text-sm font-medium text-gray-900"
                  >Price after discount ($)</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    name="discounted-price"
                    id="discounted-price"
                    :disabled="!sneaker.onSale"
                    class="block w-full disabled:bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sneaker = ref({
  name: '',
  brand: '',
  price: '',
  onSale: false,
  colors: [],
  sizes: [],
  imageSrc: '',
});

const uploadImage = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    sneaker.value.imageSrc = e.target.result;
  };

  reader.readAsDataURL(file);
};

const addColor = () => sneaker.value.colors.push({ name: '' });
const removeColor = (index) => sneaker.value.colors.splice(index, 1);

const addSize = () => sneaker.value.sizes.push({ name: '', inStock: false });
const removeSize = (index) => sneaker.value.sizes.splice(index, 1);

const addSneaker = () => {
  console.log('New Sneaker:', sneaker.value);
  alert('Sneaker added successfully!');
};
</script>
