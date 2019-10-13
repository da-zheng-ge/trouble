<template>
  <div>
	<search-input :list="searchList"></search-input>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from './components/Input'
export default {
  name: 'Search',
  components:{
  SearchInput
  },
  data (){
  	return{
  		searchList:{}
  	}
  },
   mounted (){
   	this.getsearchList()
   },
   methods:{
   	getsearchList(){
   		axios.get('/c-pro/splcloud/fcgi-bin/gethotkey.fcg').then((res) => {
        return Promise.resolve(res.data)
      }).then(this.getsearchListSucc)
   	},
   	getsearchListSucc(res){
   		if(res.code===0)
   		this.searchList=res.data
   	}
   }
  
}
</script>


<style scoped>
	
</style>