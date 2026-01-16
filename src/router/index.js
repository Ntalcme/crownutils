import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PetExpeditionView from '@/views/PetExpeditionView.vue'
import LeagueBonusView from '@/views/LeagueBonusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/petExpedition',
      name: 'petExpedition',
      component: PetExpeditionView,
    },
    {
      path: '/leagueBonus',
      name: 'leagueBonus',
      component: LeagueBonusView,
    },
  ],
})

export default router
