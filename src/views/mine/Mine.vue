<template>
	<div class="user_i">
	<MineHeaderView></MineHeaderView>
	<MineMainView></MineMainView>
  <NavBottomView :is_mine="is_mine"></NavBottomView>
	</div>
</template>
<script>
	import MineHeaderView from '../../components/MineHeader.vue';
	import MineMainView from '../../components/MineMain.vue';
  import NavBottomView from '../../components/NavBottom.vue';
	export default{
    data () {
      return {
        is_mine: true
      }
    },
		components:{
			MineMainView,
			MineHeaderView,
      NavBottomView
		}
	}
</script>

<style scoped>
@import '../../assets/css/mine.css';
</style>
