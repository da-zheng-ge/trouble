<template>
  <div class="navigator border-bottom">
  	<router-link :to="item.router" tag="div" v-for="(item,index) in list" :key="item.id"
      class="nav-router" @click.native="itemToShow=item.id,boo=false" 
      :class="{ active:index==0&&boo ||itemToShow==item.id}">  		
  			<span class="content" :class="{ act:index==0&&boo ||itemToShow==item.id}">
          {{item.content}}
        </span>  	
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  data (){
    return{
      isActive:false,
      list:[
      {id:"0001",router:"/",content:"推荐"},
      {id:"0002",router:"/Rank",content:"排行榜"},
      {id:"0003",router:"/Search",content:"搜索"}],
      itemToShow:'',
      boo:true

    }
  },
  mounted:function(){
    if(this.$route.path!="/")
    this.$router.push({path: '/'})
  }
 ,methods:{
  goo (e){
    console.log(e)
  }
 }

  

  
}
</script>


<style lang="stylus" scoped>
.active{border-bottom:#31c27c solid .04rem}
.act{color:#31c27c!important}
.navigator
  height:.8rem
  display:flex
  line-height:.8rem
  font-size:.32rem
  align-items:center
  .nav-router
    flex:1
    text-align:center
    box-sizing:border-box
    .content        
      color:rgba(0,0,0,.6)

  			
  		

		
		
</style>