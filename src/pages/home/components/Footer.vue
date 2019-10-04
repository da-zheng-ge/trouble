<template>
  <div class="footer">
    <div class="logo">
      <img class="logo-img" src="http://y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000"/>
    </div>
    <p class="copyRight">{{test}}</p>
    <p class="copyRight">Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
    <p class="copyRight">联系电话：0755-86013388 QQ群：55209235</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeNav',
  computed:{
    ...mapState(['test'])
  }
}
</script>


<style lang="stylus" scoped>
.footer
  background:#f4f4f4
  .logo
    position:relative
    box-shadow: 0 .05rem .05rem rgba(0,0,0,.02)
    overflow:hidden
    padding-bottom:22%
    height:0
    width:100%        
    .logo-img
      position:absolute
      height:.7rem
      left:50%
      top:50%
      transform:translate(-50%,-50%)
  .copyRight
    text-align:center
    color:rgba(0,0,0,.6)
    font-size:.2rem
  			
  		

		
		
</style>