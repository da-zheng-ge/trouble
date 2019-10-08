<template>
  <div class="radio">
 	<h2 class="radio-item border-bottom">电台</h2>
 	<div class="radio-wrapper">
 		<div class="list" v-for="item in list" :key="item.radioid">
			<div class="list-wrapper" >
		 		<div><img class="list-img" :src="item.picUrl"/></div>
		 		<p class="list-info">{{item.Ftitle}}</p>
	 		</div>	
 		</div>
 		
 	</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props:{list:Array}
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
			padding:.1rem
			box-sizing:border-box										
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