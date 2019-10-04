<template>
  <div class="header border-bottom">
   	<img class="header-img" src="http://y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000"/>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  
}
</script>


<style lang="stylus" scoped>
	.header
		position:relative
		box-shadow: 0 .05rem .05rem rgba(0,0,0,.02)
		background: #fff
		overflow:hidden
		padding-bottom:22%
		height:0
		width:100%		
		.header-img
			position:absolute
			height:.7rem
			left:50%
			top:50%
			transform:translate(-50%,-50%)
</style>