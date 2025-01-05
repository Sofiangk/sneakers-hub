<template>
  <div
    class="relative w-screen max-w-sm border rounded-md border-gray-600 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
  >
    <!-- <button
      class="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
    >
      <span class="sr-only">Close cart</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button> -->

    <div class="space-y-6">
      <ul class="divide-y divide-gray-300">
        <li class="flex items-center gap-4 py-4">
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt=""
            class="size-16 rounded object-cover border border-gray-300"
          />

          <div>
            <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt class="inline">Size:</dt>
                <dd class="inline">XXS</dd>
              </div>

              <div>
                <dt class="inline">Color:</dt>
                <dd class="inline">White</dd>
              </div>
            </dl>
          </div>
        </li>

        <li class="flex items-center gap-4 py-4">
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt=""
            class="size-16 rounded object-cover border border-gray-300"
          />

          <div>
            <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt class="inline">Size:</dt>
                <dd class="inline">XXS</dd>
              </div>

              <div>
                <dt class="inline">Color:</dt>
                <dd class="inline">White</dd>
              </div>
            </dl>
          </div>
        </li>

        <li class="flex items-center gap-4 py-4">
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt=""
            class="size-16 rounded object-cover border border-gray-300"
          />

          <div>
            <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt class="inline">Size:</dt>
                <dd class="inline">XXS</dd>
              </div>

              <div>
                <dt class="inline">Color:</dt>
                <dd class="inline">White</dd>
              </div>
            </dl>
          </div>
        </li>
      </ul>

      <div class="space-y-4 text-center">
        <a
          href="/"
          class="block rounded bg-slate-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-slate-600"
        >
          Checkout
        </a>
      </div>
    </div>
  </div>
</template>
