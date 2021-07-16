<template>
    <!-- MOVIE LIST -->
    <div class="grid grid-cols-1 lg:grid-cols-3 px-10 py-10 gap-4">
      <div v-if="!movies" class="col-span-3 text-center">Loading Data...</div>
      <div v-else-if="isError">Cannot Load Data</div>
      <!-- MOVIE -->
      <router-link :to="{ name: 'MovieDetail', params: { id: index + 1 } }" v-else v-for="(movie, index) in movies" :key="movie.episode_id" class="flex flex-col justify-between bg-blue-400 rounded-lg gap-7 text-white p-4 transition duration-200 ease-in-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
        <p class="text-xl">{{ movie.title }}</p>

        <div class="flex flex-col gap-2 justify-between">
          <div>
            <p class="font-bold text-xs">Release Date</p>
            <p>{{ movie.release_date }}</p>
          </div>
          <div>
            <p class="font-bold text-xs">Director</p>
            <p>{{ movie.director }}</p>
          </div>
          <div>
            <p class="font-bold text-xs">Producer</p>
            <p>{{ movie.producer }}</p>
          </div>
        </div>
      </router-link>
      
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      movies: null,
      isError: false
    }
  },

  mounted() {
    axios
      .get('https://swapi.dev/api/films/')
      .then(res => {
        this.movies = res.data.results
        this.isError = false
      })
      .catch(err => {
        console.log(err)
        this.isError = true
      })
  }
}
</script>
