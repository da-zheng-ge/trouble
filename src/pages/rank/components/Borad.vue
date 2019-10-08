<template>
  <div class="borad" ref="wrapper">
    <div>
      <div v-for="item in list" :key="item.groupId">
        <div class="borad-wrapper" v-for="top in item.toplist" :key="top.topId">
          <div class="img-wrapper">
            <div><img class="img" :src="top.frontPicUrl"/></div>
            <span class="iconfont icon">&#xe602;{{top.listenNum}}</span>
          </div>
          <div class="info-wrapper">
            <h3 class="info-title">{{top.title}}</h3>
            <div class="p-content">
              <p class="info-content" v-for="(one,index) in top.song" :key="index">
                 {{one.rank }}
                <span class="song">{{one.title}}</span >
                - {{one.singerName}}
              </p>
            </div>
            <span class="iconfont arrow">&#xe60e;</span>
          </div>
        </div> 
      </div>
    </div>   
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'RankBorad',
  props:{list:Array},
  activated (){
    let scroll=new Bscroll(this.$refs.wrapper)
    
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.borad
  overflow:hidden
  background:#f4f4f4
  padding:.15rem
  position:absolute
  left:0
  bottom:0
  top:2.6rem
  right:0
  .borad-wrapper
    margin-bottom:.2rem
    position:relative
    background:#fff
    height:2rem
    display:flex
    .img-wrapper      
      height:2rem
      width:2rem
      position:relative
      overflow:hidden
      .img
        width:100%
      .icon
        color:rgba(255,255,255,.6)
        font-size:.15rem
        display:inline-block
        position:absolute
        left:.1rem
        bottom:.1rem
    .info-wrapper
       flex:1
       min-width:0
      .info-title
        font-size:.32rem
        ellipsis()
        margin:.1rem
      .p-content
        padding:.1rem
        .info-content
          font-size:.28rem
          color:rgba(0,0,0,.5) 
          ellipsis() 
          margin:.1rem                   
          .song
            color:black
            margin:0 .1rem
      .arrow
        position:absolute
        right:0
        top:50%
        color:rgba(0,0,0,.8)
        margin-top:-0.04rem
        font-size:.08rem
      

		
</style>