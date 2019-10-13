<template>
  <div class="detail">
    <div class="img-wrap">
      <img class="img-content" :src="songTitle.frontPicUrl"/>
    </div>
    <div class="info-wrap">
      <h3 class="title">{{songTitle.title}}</h3>
      <p class="title">{{songTitle.titleDetail}}</p>
      <p class="date">更新时间：{{songTitle.updateTime}}</p>
      <div class="play">
        <svg class="icon_svg">
          <svg  viewBox="0 0 32 32">
            <title>圆角三角形</title>
              <path d="M29.4,17.6c-0.3,0.4-0.6,0.8-1.1,1L6.7,31.6c-1.4,0.9-3.4,0.4-4.2-1C2.2,30,2,29.5,2,28.9V3.1C2,1.4,3.4,0,5.1,0
                c0.6,0,1.2,0.2,1.7,0.4l21.6,12.9C29.8,14.2,30.3,16.1,29.4,17.6z">      
              </path>   
          </svg>
        </svg>
      </div>
    </div>
    <h3 class="rank">排行榜  共{{songTitle.totalNum}}首</h3>
    <ul class="song">
      <router-link :to="'/RankSong/'+item.songId" tag="li"  class="song-item border-bottom" v-for="item in songList" :key="item.rank">
        <div class="song-index">
          <span class="index-num" :class="{active:item.rank==1||item.rank==2||item.rank==3}">{{item.rank}}</span>
          <span class="hot-wrap">
            <svg class="hot-icon">
              <svg viewBox="0 0 32 32">
                <title>飙升</title>
                  <path fill="#f56273" d="M11.9,14.4c-1.3,1.2-3.3,1-4.4-0.5S6.6,10.2,7.9,9l8.8-8.2c1.1-1,2.7-1.1,3.9-0.1l9.3,8.2
                  c1.4,1.2,1.6,3.4,0.5,4.9s-3,1.8-4.4,0.6L18.7,8L11.9,14.4z M15.9,8c-0.2-1.7,1.1-3.2,2.7-3.3c1.7-0.2,3.2,1.1,3.3,2.7
                  C23.5,23.2,17.3,32,4,32c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3C13.3,25.9,17.1,20.5,15.9,8z"></path>
              </svg>
            </svg>{{item.rankValue}}
          </span>          
        </div>
        <div class="song-info">
          <p class="song-name">{{item.title}}</p>
          <p class="song-desc">{{item.singerName}}</p>
          <div class="icon">
            <svg class="icon-svg">
                <svg viewBox="0 0 32 32">
                  <title>下载</title>
                  <path d="M14.7,1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v19.2c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6V1.6
                    z M16.3,20.7l9.6-9.8c0.6-0.6,1.6-0.4,2.2,0.3c0.6,0.6,0.6,1.6,0,2.3L17.9,24c-0.6,0.6-2.4,0.6-3,0L4,13.4c-0.6-0.6-0.6-1.6,0-2.3
                    c0.6-0.6,1.6-0.6,2.3,0L16.3,20.7z M5.3,32c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6h21.3c0.9,0,1.6,0.7,1.6,1.6
                    c0,0.9-0.7,1.6-1.6,1.6H5.3z">    
                  </path>
                </svg>
            </svg>
          </div>
        </div>
      </router-link>
    </ul>
    <div class="foot-wrap">
      <h3 class="foot-title">榜单简介</h3>
      <p class="foot-content" v-html="songTitle.intro"></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'RankDetail',
  data(){
    return {songTitle:{},
      songList:[]
}
  },
  mounted (){
    this.getdetailList()
  },
  methods:{
    getdetailList(){   
      let Id=this.$route.params.id
      let parm={
        ADTAG: 'myqq',
        from: 'myqq',
        channel: 10007100,
        id: Id

      }
      axios.get('/i-pro/n2/m/share/details/toplist.html',{params:parm}).then(this.getdetailListSucc)
    },
    getdetailListSucc(res){
      
        if(res.statusText=="OK"){
        let data=res.data.match(/firstPageData\s\=\s({.*})/)[1]   

        data=JSON.parse(data)
        this.songTitle=data.toplistData
        this.songList=data.toplistData.song
      }
   
     
   
        
    }
  }
  
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
div{background-color:#f8f8f8}
.active{color:red}
.detail
  .img-wrap
    width:4rem
    height:4rem
    box-shadow: 0 7px 13px rgba(0,0,0,.21)
    border-radius:.36rem
    margin:.2rem auto
    .img-content
      width:100%
      border-radius:.36rem
  .info-wrap
    text-align:center
    font-weight: 400
    .title
      margin:.3rem 0
      font-size:.36rem
    .date
      color: grey
    .play
      width: 3.8rem
      height: .8rem
      border-radius: .4rem
      box-shadow: 0 6px 32px rgba(24,213,156,.5)
      background-color: #22d59c
      margin:.3rem auto
      display:flex
      justify-content:center
      align-items:center
      .icon_svg
        width: .4rem
        height: .4rem
        fill: #fff
  .rank
    margin:.1rem .1rem .1rem .4rem
  .song
    .song-item
      padding:.2rem .2rem .2rem 0 
      display:flex
      .song-index
        width:.9rem
        height:.9rem
        text-align:center
        .index-num
          line-height:.28rem
          margin-top:.1rem
          display:block
        .hot-wrap
          font-size:.14rem
          .hot-icon
            margin-right: .06rem
            width: .12rem
            height: .12rem
            fill:red
      .song-info
        flex:1
        min-width:0
        position:relative
        .song-name         
          font-weight: 400
          line-height:.28rem   
          margin:.1rem      
          ellipsis() 
        .song-desc
          color:grey
          margin:.1rem
          color: rgba(0,0,0,.4)
          font-size:.24rem
          ellipsis() 
        .icon
          position:absolute
          right:0
          top:0
          .icon-svg
            fill: #b3b3b3
            width: .3rem
            height: .3rem
  .foot-wrap
    padding:.3rem
    .foot-title
      font-size:.32rem
      margin:.2rem 0 
    .foot-content
      font:300 12px/1.5 sans-serif
      color: #121212
      line-height:.35rem


            
       
          
    
    

</style>