<template>
	<div class="user_i">
	<MineHeaderView></MineHeaderView>
	<MineMainView></MineMainView>
  <NavBottomView></NavBottomView>
	</div>
</template>
<script>
	import MineHeaderView from './MineHeader.vue';
	import MineMainView from './MineMain.vue';
  import NavBottomView from './NavBottom.vue';
	export default{
		components:{
			MineMainView,
			MineHeaderView,
      NavBottomView
		}
	}
</script>
<style>
@import '../assets/css/mine.css';
</style>
