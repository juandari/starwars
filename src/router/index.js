import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import PersonDetail from '../views/PersonDetail.vue'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/people/:id',
    name: 'PersonDetail',
    component: PersonDetail
  },

]

const router = new VueRouter({
  routes
})

export default router
