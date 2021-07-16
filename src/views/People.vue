<template>
    <div>
      <!-- PEOPLE LIST -->
      <div class="grid grid-cols-1 md:grid-cols-3 px-10 py-10 gap-4">
        <div v-if="!people" class="col-span-3 text-center">Loading Data...</div>
        <div v-else-if="isError">Cannot Load Data</div>

        <!-- PERSON -->
        <router-link :to="{ name: 'PersonDetail', params: { id: person.url } }" v-for="person in people" :key="person.url" class="flex flex-col h-44 justify-between bg-red-400 rounded-lg gap-7 text-white p-4 transition duration-200 ease-in-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
          <p class="text-xl">{{ person.name }}</p>

          <div class="flex flex-row justify-between">
            <div>
              <p class="font-bold text-xs">Birth Year</p>
              <p>{{ person.birth_year }}</p>
            </div>
            <div>
              <p class="font-bold text-xs">Eye Color</p>
              <p>{{ person.eye_color }}</p>
            </div>
          </div>
        </router-link>
      </div>

      <!-- PAGINATION -->
      <div v-if="people" class="flex flex-row justify-between px-10 py-10">
        <div @click="handleClickPrevious" class="flex flex-row gap-2 items-center cursor-pointer" :class="{ 'text-gray-400': !previousPageUrl }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous Page</span>
        </div>
        <div @click="handleClickNext" class="flex flex-row gap-2 items-center cursor-pointer" :class="{ 'text-gray-400': !nextPageUrl }">
          <span>Next Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'People',
  data() {
    return {
      people: null,
      isError: false,
      nextPageUrl: null,
      previousPageUrl: null,
    }
  },

  methods: {
    handleClickNext: function() {
      if (this.nextPageUrl) {
        axios
        .get(this.nextPageUrl)
        .then(res => {
          this.people = res.data.results
          this.isError = false
          this.nextPageUrl = res.data.next
          this.previousPageUrl = res.data.previous
        })
        .catch(err => {
          console.log(err)
          this.isError = true
        })
      }
    },
    handleClickPrevious: function() {
      if (this.previousPageUrl) {
        axios
        .get(this.previousPageUrl)
        .then(res => {
          this.people = res.data.results
          this.isError = false
          this.nextPageUrl = res.data.next
          this.previousPageUrl = res.data.previous
        })
        .catch(err => {
          console.log(err)
          this.isError = true
        })
      }
    }
  },

  mounted() {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        this.people = res.data.results
        this.isError = false
        this.nextPageUrl = res.data.next
        this.previousPageUrl = res.data.previous
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