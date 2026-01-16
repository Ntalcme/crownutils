import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PetExpeditionView from '@/views/PetExpeditionView.vue'
import LeagueBonusView from '@/views/LeagueBonusView.vue'
import ItemListView from '@/views/ItemListView.vue'
import ShopSimulatorView from '@/views/ShopSimulatorView.vue'
import PetListView from '@/views/PetListView.vue'

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
    {
      path: '/itemList',
      name: 'itemList',
      component: ItemListView,
    },
    {
      path: '/shopSimulator',
      name: 'shopSimulator',
      component: ShopSimulatorView,
    },
    {
      path: '/petList',
      name: 'petList',
      component: PetListView,
    },
  ],
})

export default router
