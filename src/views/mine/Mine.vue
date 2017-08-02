<template>
	<div class="user_i">
	<MineHeaderView></MineHeaderView>
	<MineMainView></MineMainView>
  <NavBottomView></NavBottomView>
	</div>
</template>
<script>
	import MineHeaderView from '../../components/MineHeader.vue';
	import MineMainView from '../../components/MineMain.vue';
  import NavBottomView from '../../components/NavBottom.vue';
	export default{
		components:{
			MineMainView,
			MineHeaderView,
      NavBottomView
		}
	}
</script>
<style>
@import '../../assets/css/mine.css';
</style>
