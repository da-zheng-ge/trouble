<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item in list" :key="item.id" v-if="list.length">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>    
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
      list:Array
    },
    data () {
      return {
        swiperOption: {
          pagination:{
          el: '.swiper-pagination',
        },
          loop:true,
          autoplay : true,          
          speed:1000
        },
        // list:[
        //       {id:"0001",imgUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1736642.jpg"},
        //       {id:"0002",imgUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1735896.jpg"},
        //       {id:"0003",imgUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1737197.jpg"},
        //       {id:"0004",imgUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1736974.jpg"},
        //       {id:"0005",imgUrl:"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1728679.jpg"}]
      }
    },
  
    
  
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    height:0
    width:100%
    padding-bottom:40%
    over-flow:hidden
    .swiper-img
      width:100%
      
</style>