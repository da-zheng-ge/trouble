import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Rank from '@/pages/rank/Rank'
import Search from '@/pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    },{
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
