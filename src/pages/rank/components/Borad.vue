<template>
  <div class="borad" ref="wrapper">
    <div>
      <div class="borad-wrapper" v-for="item in list" :key="item.id">
        <div class="img-wrapper">
          <div><img class="img" :src="item.imgUrl"/></div>
          <span class="iconfont icon">&#xe602;1980.0万</span>
        </div>
        <div class="info-wrapper">
          <h3 class="info-title">{{item.title}}</h3>
          <p class="info-content" v-for="one in item.parray" :key="one.id">
             {{one.id }}
            <span class="song">{{one.song}}</span >
            {{one.author}}
          </p>
          <span class="iconfont arrow">&#xe60e;</span>
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
  mounted (){
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
    overflow:hidden
    // display:flex
    .img-wrapper
      float:left
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
      .info-title
        font-size:.32rem
        margin:.1rem
        padding-left:.1rem
        ellipsis()
      .info-content
        padding:.1rem
        padding-left:.2rem
        font-size:.28rem
        color:rgba(0,0,0,.5)
        ellipsis()
        .song
          color:black
          ellipsis()
          display:inline-block
          margin:0 .1rem
      .arrow
        position:absolute
        right:0
        top:50%
        color:rgba(0,0,0,.8)
        margin-top:-0.04rem
        font-size:.08rem
      

		
</style>