import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Rank from '@/pages/rank/Rank'
import Search from '@/pages/search/Search'
import RankDetail from '@/pages/rank/components/Detail'
import RankSong from '@/pages/rank/components/Song'
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
    },{
      path: '/RankDetail/:id',
      name: 'RankDetail',
      component: RankDetail
    },
    {
      path: '/RankSong/:songId',
      name: 'RankSong',
      component: RankSong
    }
  ]
})
