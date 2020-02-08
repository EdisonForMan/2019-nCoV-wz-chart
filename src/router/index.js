import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '@/views/Map.vue'
import Risk from '@/views/Risk.vue'
import Analyze from '@/views/Analyze.vue'
import Estate from '@/views/Estate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map
  },
  {
    path: '/risk',
    name: 'Risk',
    component: Risk
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Analyze
  },
  {
    path: '/estate',
    name: 'Estate',
    component: Estate
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
