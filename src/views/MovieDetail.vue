<template>
    <div class="flex flex-row py-10">
      <!-- MOVIE DETAIL -->
      <div v-if="!movie" class="text-center w-full">Loading...</div>
      <div v-else-if="isError">Cannot Load Data</div>
      <div v-else class="flex flex-col justify-between w-5/6 lg:w-1/2 mx-auto border-2 border-blue-400 rounded-lg gap-7 text-gray-700 p-7">
        <p class="text-xl">{{ movie.title }}</p>

        <div class="grid grid-rows-1 gap-4 justify-between">
          <div>
            <p class="font-bold">Opening Crawl</p>
            <p>{{ movie.opening_crawl }}</p>
          </div>
          <div>
            <p class="font-bold">Director</p>
            <p>{{ movie.director }}</p>
          </div>
          <div>
            <p class="font-bold">Producer</p>
            <p>{{ movie.producer }}</p>
          </div>
          <div>
            <p class="font-bold">Release Date</p>
            <p>{{ movie.release_date }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
      isError: false
    }
  },
  mounted() {
    axios
      .get('https://swapi.dev/api/films/' + this.id)
      .then(res => {
        this.movie = res.data
      })
      .catch(err => {
        console.log(err)
        this.isError = true
      })
  }
}
</script>

<style>

</style>