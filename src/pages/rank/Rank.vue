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
      let data = {"req_0":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},
                "comm":{"g_tk":5381,"uin":0,"format":"json","ct":23,"cv":0}}      
  		axios.post('/u-pro/cgi-bin/musicu.fcg',data,{
        
        params:{_: new Date().getTime()}
      }).then((res) => {
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