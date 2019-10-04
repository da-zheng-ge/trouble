<template>
  <div class="radio">
 	<h2 class="radio-item border-bottom">电台</h2>
 	<div class="radio-wrapper">
 		<div class="list">
			<div class="list-wrapper">
		 		<div><img class="list-img" src="https://y.gtimg.cn/music/photo/radio/track_radio_199_12_8.jpg?max_age=2592000"/></div>
		 		<p class="list-info">热歌</p>
	 		</div>	
 		</div>
 		<div class="list">
 			<div class="list-wrapper">
		 		<div><img class="list-img" src="https://y.gtimg.cn/music/photo/radio/track_radio_307_12_5.jpg?max_age=2592000"/></div>
		 		<p class="list-info">一人一首招牌歌</p>	
	 		</div>
 		</div>
 	</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  
}
</script>


<style lang="stylus" scoped>
.radio
	overflow:hidden
	box-sizing:border-box
	background:#f4f4f4
	.radio-item
		height:.8rem
		font-size:.32rem
		line-height:.8rem
		padding-left:.2rem
	.radio-wrapper
		overflow:hidden		
		.list
			background:#f4f4f4
			width:50%
			float:left
			box-sizing:border-box
			padding:.1rem
			.list-wrapper
				background:#fff
				.list-img
					width:100%
				.list-info
					font-size:.3rem
					line-height:.6rem
					height:.6rem
					padding: 0 .1rem
				
		
</style>