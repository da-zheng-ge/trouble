<template>
  <div class="song">
     <div class="song-info">
         <h1 class="song-title">10,000 Hours</h1>
         <h2 class="song-author">Dan + Shay / Justin Bieber</h2>
     </div>
     <div class="song-content">
        <div class="img-wrap"><img class="img" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000Rk6JS0KKIUJ_1.jpg?max_age=2592000"/>
        </div>
     </div>
     <div class="fun-chose">
       <div class="icon" v-for="item in iconlist" :key="item.id">
         <svg class="icon-item">
           <svg  viewBox="0 0 32 32">
            <title>MV</title>
            <path :d="item.d"></path>
            </svg>
         </svg>
       </div>
     </div>
     <div class="background">
       <img class="img-background" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000Rk6JS0KKIUJ_1.jpg?max_age=2592000"/>
     </div>
     <div class="download">下载歌曲</div>
     <div class="recommend">
       <h3 class="recommend-title">猜你喜欢</h3>
       <ul class="recommend-items">
         <li class="recommend-item">
           <div class="photo-wrap"><img class="photo" src="https://y.gtimg.cn/music/photo_new/T002R150x150M000000TSwQz4E7Y4E_1.jpg?max_age=2592000"/></div>
           <div class="content">
             <p class="song-name">林中鸟</p>
             <p class="song-singer">葛林</p>
             <span class="iconfont icon">&#xe60e;</span>
           </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'RankSong',
data (){
  return {
    iconlist:[{id:"001",d:"M24.364 21.94l5.455-13.94h2.182l-6.545 16.727h-2.182l-6.545-16.727h2.182l5.455 13.94zM8.727 18.909h-2.182l-4.364-7.273v13.091h-2.182v-16.727h2.182l5.455 9.091 5.455-9.091h2.909v16.727h-2.182v-14.303l-5.091 8.485z"},
    {id:"002",d:"M11.909 24.758l10.941-7.94-10.941-8.709v16.65zM9.727 5.091c0-0.164 0.056-0.324 0.159-0.453 0.25-0.314 0.708-0.367 1.022-0.116l14.799 11.78 0.136 0.142c0.236 0.325 0.164 0.78-0.161 1.016l-14.799 10.74c-0.124 0.090-0.273 0.139-0.427 0.139-0.401 0-0.727-0.326-0.727-0.727v-22.52z"},
    {id:"003",d:"M15.847 24.347l0.172-0.119 1.974-1.555c0.851-0.676 1.569-1.266 2.252-1.855 1.9-1.641 3.319-3.111 4.201-4.428 0.505-0.753 0.799-1.409 0.889-1.936 0.502-2.932-0.616-4.739-2.639-5.298-1.953-0.54-4.038 0.306-4.897 2.112-0.784 1.649-3.124 1.663-3.929 0.025-0.914-1.862-2.848-2.612-4.685-2.018-1.914 0.619-3.001 2.451-2.533 5.179 0.12 0.698 0.668 1.703 1.617 2.889 0.859 1.073 1.996 2.239 3.367 3.484 1.239 1.124 2.169 1.895 4.131 3.467l0.078 0.053zM15.831 10.332c0.755-1.121 1.228-1.758 1.418-1.911 3.861-3.477 11.553-1.277 10.239 6.402-0.688 4.022-7.079 8.704-10.11 11.113-0.621 0.476-1.611 1.142-1.611 1.142s-1.133-0.954-1.247-0.99c-2.887-2.311-9.359-7.438-10.016-11.265-1.236-7.207 6.048-9.896 9.904-6.404 0.194 0.219 0.669 0.857 1.424 1.913z"}]
  }
}
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.song 
  position:relative
  .song-info
    display:block
    text-align:center
    .song-title
      margin:.2rem auto
      max-width: 6.4rem
      ellipsis()
      font-size: .4rem
      font-weight: 400
    color: #000;
    .song-author
      margin: 0 .4rem .3rem
      text-align: center
      ellipsis()
      font-size: .14rem
      color:#808080
  .song-content
    .img-wrap
      width:4.68rem
      height:4.68rem
      margin:.2rem auto
      box-shadow: 0 0.05rem 0.2rem rgba(0,0,0,.2)
      .img
        width:100%
  .fun-chose
    over-flow:hidden
    display: -webkit-box
    -webkit-box-pack: center
    -webkit-box-align: center
    .icon
      display: -webkit-box
      width: .76rem
      height: .76rem
      margin: 0 .4rem
      border: solid 1px rgba(0,0,0,.2)
      border-radius: 100%
      display:flex
      justify-content:center
      align-items:center
      margin:.2rem
      .icon-item
        display: block
        width: .44rem
        height: .44rem
        fill: #000
  .background
    position:absolute
    left:0
    top:0
    z-index:-2  
    width:100%
    .img-background
      width:100%
      opacity: .06
  .download
    width: 4.68rem
    height: .8rem
    line-height: .8rem
    margin: 0 auto
    letter-spacing: .02rem
    text-align: center
    font-size: .36rem
    border-radius: .4rem
    color: #fff
    background: #22d59c
  .recommend
    .recommend-title
      display: -webkit-box
      -webkit-box-pack: center
      -webkit-box-align: center
      height: 1.1rem
      font-size: .32rem
      font-weight: 400
      color: #000
    .recommend-items
      margin-bottom: .3rem
      .recommend-item 
        position: relative
        display: -webkit-box
        -webkit-box-align: center
        margin: 0 0 .04rem .32rem 
        display:flex
        .photo-wrap
          width:1.3rem
          .photo
            width:100%
        .content
          flex:1
          font-size: .28rem
          color: #000
          padding:.1rem
          line-height:.4rem
          .song-name
            ellipsis()
            margin:.1rem
            font-weight: 300
          .song-singer  
            ellipsis()
            color:#808080
            margin:.1rem
          .icon
            position:absolute
            right:.2rem
            top:50%
            color:rgba(0,0,0,.8)
            margin-top:-0.18rem
            font-size:.36rem
      
		
</style>