<template>
    <div class="flex flex-row py-10">
      <!-- PERSON DETAIL -->
      <div v-if="!person" class="text-center w-full">Loading...</div>
      <div v-else-if="isError">Cannot Load Data</div>
      <div v-else class="flex flex-col justify-between w-5/6 lg:w-1/2 mx-auto border-2 border-red-400 rounded-lg gap-7 text-gray-700 p-7">
        <p class="text-xl">{{ person.name }}</p>

        <div class="grid grid-cols-2 gap-4 justify-between">
          <div>
            <p class="font-bold">Birth Year</p>
            <p>{{ person.birth_year }}</p>
          </div>
          <div>
            <p class="font-bold">Eye Color</p>
            <p>{{ person.eye_color }}</p>
          </div>
          <div>
            <p class="font-bold">Hair Color</p>
            <p>{{ person.hair_color }}</p>
          </div>
          <div>
            <p class="font-bold">Skin Color</p>
            <p>{{ person.skin_color }}</p>
          </div>
          <div>
            <p class="font-bold">Gender</p>
            <p>{{ person.gender }}</p>
          </div>
          <div>
            <p class="font-bold">Height</p>
            <p><span>{{ person.height }}</span> cm</p>
          </div>
          <div>
            <p class="font-bold">Mass</p>
            <p><span>{{ person.mass }}</span> kg</p>
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
      url: this.$route.params.id,
      person: null,
      isError: false
    }
  },
  mounted() {
    axios
      .get(this.url)
      .then(res => {
        this.person = res.data
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