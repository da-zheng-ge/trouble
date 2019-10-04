<template>
  <div>
    <swiper :list="swiperList"></swiper>
    <home-radio></home-radio>
    <home-hot :list="hotList"></home-hot>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from './components/Swiper'
import HomeRadio from './components/Radio'
import HomeHot from './components/Hot'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components:{
  	Swiper,
  	HomeRadio,
  	HomeHot,
    HomeFooter
  },
  data (){
    return {
      swiperList:[],
      hotList:[]
    }
  },
 
  mounted (){
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo (){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res=res.data
      if(res.ret&&res.datalist)
       { 
        this.swiperList=res.datalist.swiperList
        this.hotList=res.datalist.hotList
      }

    }  
  }
}
</script>


<style scoped>
	
</style>