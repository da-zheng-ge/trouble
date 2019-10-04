<template>
  <div class="hot">
 	<h2 class="hot-item border-bottom">热门歌单</h2>
 	<div class="hot-wrapper">		
	 	<div class="list" v-for="item in list" :key="item.id">
	 		<div class="list-wrapper">	
		 		<div><img class="list-img" :src="item.imgUrl"/></div>
		 		<p class="list-info">{{item.song}}</p>
		 		<p class="list-author">{{item.author}}</p>	
	 		</div>
	 	</div>	
 	</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props:{
  	list:Array
  },
  data (){
  	return {
  	// 	list:
  	// }[
  	// 	{id:"0001",imgUrl:"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",song:"催泪大杀器！盘点演唱会经典万人大合唱",author:"金青松"},
  	// 	{id:"0002",imgUrl:"https://y.gtimg.cn/music/photo_new/T006R300x300M0000013j8zs1jRnLQ.jpg?max_age=2592000",song:"纳尼？这些华语歌手竟然会唱日语歌！",author:"风吹草地"},
  	// 	{id:"0003",imgUrl:"https://y.gtimg.cn/music/photo_new/T006R300x300M000004bFmjW2PXSqF.jpg?max_age=2592000",song:"精选内地十大民谣歌手代表作",author:"１'s   ヽ"},
  	// 	{id:"0004",imgUrl:"https://y.gtimg.cn/music/photo_new/T006R300x300M000000cL0xT2csmd7.jpg?max_age=2592000",song:"2016billboard嘻哈榜",author:"CREAMSAUCEONMEBABY"},
  	// 	{id:"0005",imgUrl:"https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000",song:"浮光掠影：ACG纯音乐赏析合辑",author:"黎桐同"},
  	// 	{id:"0006",imgUrl:"https://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1",song:"trip-hop单曲大推荐",author:"哑忍"}
  	// 	]
  }
  
}
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl' 
.hot
	background:#f4f4f4	
	.hot-item
		height:.8rem
		font-size:.32rem
		line-height:.8rem
		padding-left:.2rem
	.hot-wrapper
		.list
			padding:.1rem
			background:#f4f4f4
			width:50%
			float:left
			box-sizing:border-box
			.list-wrapper				
				background:#fff								
				.list-img
					width:100%
				.list-info
					padding: 0 .1rem
					font-size:.2rem
					line-height:.4rem
					height:.4rem
					ellipsis()
				.list-author
					padding: 0 .1rem
					font-size:.2rem
					line-height:.4rem
					height:.4rem
					ellipsis()
				
		
</style>