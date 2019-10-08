<template>
  <div>
    <swiper :list="swiperList"></swiper>
    <home-radio :list="radioList"></home-radio>
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
      hotList:[],
      radioList:[]
    }
  },
 
  mounted (){
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo (){
      const url = '/api/getHomeList'

      axios.get(url, {
        params: {_: 1570241043057,
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1}
      }).then((res) => {
        return Promise.resolve(res.data)
      })
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){    
      if (res.code === 0) { 
        const dataList = res.data          
        this.swiperList=dataList.slider
        this.radioList=dataList.radioList
        this.hotList=dataList.songList
      }

    }  
  }
}
</script>


<style scoped>
	
</style>