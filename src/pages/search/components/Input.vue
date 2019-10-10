<template>
	<div>
	  <div class="input-wrapper">
	  	<div class="input-content" >
	  		<span class="iconfont search-icon">&#xe62b;</span>	  		
			<input class="search" type="text" placeholder="搜索歌曲、歌单、专辑"/>
		</div>
	  </div>
	  <h3 class="hot">热门搜索</h3>
	  <div @click="change">在哪里</div>
	  <div class="recommend">
	  	<div><a :href="list.special_url" class="recommend-list active">{{list.special_key}}</a></div>
	  	<div class="recommend-list" v-for="(item,index) in list.hotkey" :key="index" v-if="index<=5">
	  		{{item.k}}
	  	</div>	  	
	  </div>
  	</div>
</template>

<script>


export default {
  name: 'SearchInput',
  props:{list:Object},
  methods:{
  	change (test){
  		this.$store.commit("changeTest","随便")
  	}
  }
  
}
</script>


<style lang="stylus" scoped>
.active{color:red;float:left;border:red solid .02rem!important}
.input-wrapper
	height:1.2rem
	background:#f4f4f4
	padding:.2rem
	box-sizing:border-box
	.input-content
		padding-left:.3rem
		background:#fff
		position:relative
		.search-icon
			font-size:.46rem
			line-height:.4rem
			display:inline-block
			position:absolute
			left:.1rem
			bottom:50%
			margin-bottom:-.18rem
		.search
			height:.8rem
			display:inline-block
			box-sizing:border-box
			border-radius:.06rem
			padding-left:.3rem
			width:100%
.hot
	margin:.2rem
.recommend
	height:2.5rem
	overflow:hidden
	.recommend-list
		border:rgba(0,0,0,.6) solid .02rem
		float:left
		margin:.14rem
		border-radius:.99rem
		height:.6rem
		line-height:.6rem
		font-size:.28rem
		padding:0 .2rem
		box-sizing:border-box

		
		
</style>