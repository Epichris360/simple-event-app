import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowEvent from '../views/ShowEvent'
import CreateEvent from '../views/CreateEvent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'showEvent',
    component: ShowEvent
  },
  {
    path: '/event-create',
    name: 'createEvent',
    component: CreateEvent
  }
]

const router = new VueRouter({
  routes
})

export default router