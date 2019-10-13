<template>
	<div>
	  <audio ref='myaudio' autoplay="autoplay" :src="playUrl!=''?playUrl:''"></audio>
	  <div class="input-wrapper">
	  	<div class="input-content" >
	  		<span class="iconfont search-icon">&#xe62b;</span>	  		
			<input class="search" ref="input" @focus="onfucus" @keyup.enter="submit" type="text" placeholder="搜索歌曲、歌单、专辑"/>		
		</div>
		<div class="cancel" @click="cancelClick" v-show="cancelShow">取消</div>
	  </div>
	  <h3 class="hot" v-show="recommendShow">热门搜索</h3>
	  <div class="recommend" ref="recommend" v-show="recommendShow">
	  	<div><a :href="list.special_url" class="recommend-list active">{{list.special_key}}</a></div>
	  	<div class="recommend-list" @click="searchClick(index)" v-for="(item,index) in list.hotkey" :key="index" v-if="index<=5">
	  		{{item.k}}
	  	</div>	  	
	  </div>
	  <ul class="searchInfo" v-show="searchInfoShow">
	  	<li class="searchItem border-bottom" :ref="'item'+index"
	  	 v-for="(item,index) in songList" @click="getVkey(index)" 
	  	 :class="{act:itemActive==index}">
	  		<h2 class="songName">{{item.songname}}</h2>
	  		<p class="songSinger">	  			
	  			<span v-for="(singer,index) in item.singer">{{singer.name}}
	  				<span v-show="index!==item.singer.length-1"> / </span>
	  			</span>
	  		</p>
	  	</li>
	  </ul>
	  <ul class="history" v-show="historyShow">
	  	<li class="history-item border-bottom"  @click="historyClick(index)" v-for="(item,index) in arrList">{{item}}
	  	</li>
	  	<p class="clear" @click="clearHistory" v-show="JSON.stringify(objList)!=='{}'">清除历史记录</p>
	  </ul>
  	</div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'SearchInput',
  props:{list:Object},
  data(){
  	return {
  		songList:[],recommendShow:true,searchInfoShow:false,cancelShow:false,i:0,historyShow:false,obj:{},objList:{},arrList:[],searchValue:'',playUrl:'',itemActive:9999
  	}
  },
  // watch:{
  // 	searchValue:{
  // 		function(){
  // 			this.recommendShow=false
  // 		}
  // 	}
  // },
  methods:{
  	onfucus (){
  		this.recommendShow=false
  		this.cancelShow=true
  		this.historyShow=true
  		this.arrList=[]
		for(let i in this.objList){
  					this.arrList.unshift(i)
  				}

  	},
  	cancelClick(){
  		this.recommendShow=true
  		this.searchInfoShow=false
  		this.cancelShow=false
  		this.$refs.input.value=""
  		this.historyShow=false

  	},
  	submit(){
  		let parm={
  			_: 1570936104897,
			g_tk: 1675855322,
			uin: 1975770247,
			format: 'json',
			inCharset: 'utf-8',
			outCharset: 'utf-8',
			notice: 0,
			platform: 'h5',
			needNewCode: 1,
			w: `${this.$refs.input.value}`,
			zhidaqu: 1,
			catZhida: 1,
			t: 0,
			flag: 1,
			ie: 'utf-8',
			sem: 1,
			aggr: 0,
			perpage: 20,
			n: 20,
			p: 1,
			remoteplace: 'txt.mqq.all'
  		}
  		axios.get('c-pro/soso/fcgi-bin/search_for_qq_cp',{
  			params:parm
  		}).then(res=>{
  			this.songList=res.data.data.song.list
  			this.searchInfoShow=true
  			let value=this.$refs.input.value  
  			if(!this.obj.hasOwnProperty(value)){
  				this.obj[value]=value
  			}		
  				localStorage.setItem('searchList',JSON.stringify(this.obj))
  				this.objList=JSON.parse(localStorage.getItem('searchList'))	
  				this.arrList=[]
  				this.searchValue=this.$refs.input.value
  		})
  	},
  	clearHistory(){
  		localStorage.removeItem("searchList")
  		this.arrList=[]
  		this.objList={}
  	},
  	historyClick(index){
  		this.$refs.input.value=this.arrList[index]
  		this.submit()
  	},
  	searchClick(index){
  		this.$refs.input.value=this.list.hotkey[index].k
  		this.recommendShow=false
  		this.submit()
  	},
  	getVkey(index){  	
  		this.itemActive=index
	    let parm={
	      '-': 'getplaysongvkey028088772474332613',
	      g_tk: 1675855322,
	      loginUin: 1975770247,
	      hostUin: 0,
	      format: 'json',
	      inCharset: 'utf8',
	      outCharset: 'utf-8',
	      notice: 0,
	      platform: 'yqq.json',
	      needNewCode: 0,
	      data: {"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"8388388325","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"8388388325","songmid":[this.songList[index].songmid],"songtype":[0],"uin":"1975770247","loginflag":1,"platform":"20"}},"comm":{"uin":1975770247,"format":"json","ct":24,"cv":0}}
	    }
    axios.get('u-pro/cgi-bin/musicu.fcg',{
      params:parm
    }).then((res)=>{
      if(res.data.code===0)
      {
      const data=res.data
      this.playUrl=`http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/${data.req_0.data.midurlinfo[0].purl}`
    }    
      //this.$refs.myaudio.play()
    })

  },

  }
  
  	
  
  
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.act{background-color:#ccc}
input::-webkit-input-placeholder {color:rgba(0,0,0,.4)}
.active{color:red;float:left;border:red solid .02rem!important}
.input-wrapper
	height:1.2rem
	background:#f4f4f4
	padding:.2rem
	box-sizing:border-box
	display:flex
	justify-content:center
	align-items:center
	.input-content
		padding-left:.3rem
		background:#fff
		position:relative
		flex:1	
		.search-icon
			font-size:.46rem
			line-height:.4rem
			display:inline-block
			position:absolute
			left:.1rem
			bottom:50%
			margin-bottom:-.18rem
		.search
			height:.7rem
			display:inline-block
			box-sizing:border-box
			border-radius:.06rem
			padding-left:.3rem
			width:100%
	.cancel
		text-align:center
		margin-left:.2rem
		display:flex
		justify-content:center
		align-items:center
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
		ellipsis()
.searchInfo
	.searchItem
		padding:.1rem
		.songName
			margin: .2rem 0 .04rem .6rem
			line-height: .36rem
			font-size: .32rem
			font-weight: 400
			color: #000
			ellipsis()
		.songSinger
			color:#808080
			margin:.1rem 0 .1rem .6rem
			font-size:.28rem
			ellipsis()
.history
	padding:.1rem
	.history-item
		padding:.2rem 0 .2rem .9rem
		heitht:.88rem
		ellipsis()
	.clear
		color: #47c88a
		text-align:center
		font: 12px/1.5 "hiragino sans gb",arial
		line-height:.8rem
		

		
		
</style>