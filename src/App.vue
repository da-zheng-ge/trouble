<template>
<div>
	<home-header></home-header>
	<home-nav></home-nav>
  	<div id="app">
      <keep-alive exclude="RankDetail">
    	<router-view/>
    </keep-alive>
  	</div>
</div>
</template>

<script>
	import HomeHeader from '@/pages/common/header/Header'
	import HomeNav from '@/pages/common/nav/Nav'
export default {
  name: 'App',components:{
  	HomeHeader,HomeNav
  }
}
</script>

<style>

</style>
