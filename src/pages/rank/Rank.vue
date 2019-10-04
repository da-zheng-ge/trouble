<template>
  <div>
	<rank-borad :list="rankList"></rank-borad>
  </div>
</template>

<script>
import axios from 'axios'
import RankBorad from './components/Borad'
export default {
  name: 'Rank',
  components:{RankBorad
  
  },
  data (){
  	return{	rankList:[]}
  },
  mounted (){
  	this.getRankInfo()
  },
  methods:{
  	getRankInfo (){
  		axios.get('/api/index.json').then(this.getRankInfoSucc)
  	},
  	getRankInfoSucc (res){
  		res=res.data
  		if(res.ret&&res.datalist){
  			this.rankList=res.datalist.rankList
  		}

  	}
  }
  
}
</script>


<style scoped>
	
</style>