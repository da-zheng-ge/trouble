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
  		axios.get('/api/getRankList').then((res) => {
        return Promise.resolve(res.data)
      }).then(this.getRankInfoSucc)
      
  	},
  	getRankInfoSucc (res){    
  		if (res.code === 0) { 

       this.rankList = res.req_0.data.group          
        
      }

  	}
  }
  
}
</script>


<style scoped>
	
</style>