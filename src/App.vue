<template>
  <div id="app" class="h-screen font-poppins bg-cover bg-no-repeat bg-starwars">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}

</script>