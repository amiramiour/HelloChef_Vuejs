import { createRouter, createWebHashHistory } from 'vue-router'
import ARenommerVue from '../components/ARenommer.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : ARenommerVue
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router