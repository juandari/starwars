<template>
  <nav class="flex flex-col gap-5 lg:flex-row justify-around items-center font-bold text-gray-600">
      <!-- Horizontal Line -->
      <div class="hidden lg:inline-block lg:order-0 lg:h-0.5 lg:w-96 lg:bg-gray-300"></div>

      <router-link to="/" class="order-2 lg:order-1 w-5/6 lg:w-36 text-center">
        <div class="border-2 text-blue-400 border-blue-400 px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white">
          Films
        </div>
      </router-link>

      <router-link to="/" class="order-1 lg:order-2">
        <img src="@/assets/star-wars.svg" alt="star wars logo" class="w-20" />
      </router-link>

      <router-link to="/People" class="order-3 w-5/6 lg:w-36 text-center">
        <div class="border-2 text-red-400 border-red-400 px-4 py-1 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white">
          People
        </div>
      </router-link>

      <!-- Horizontal Line -->
      <div class="hidden lg:inline-block lg:order-4 lg:h-0.5 lg:w-96 lg:bg-gray-300"></div>
    </nav>
</template>

<script>
export default {

}
</script>