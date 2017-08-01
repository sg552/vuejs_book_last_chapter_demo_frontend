<template>
  <div>
    <div class="mine_h">
      <header class="top_bar">
        <h3 class="cartname">我的订单</h3>
      </header>
    </div>
    <span class="divider" style="height: 40px;"></span>
    <MineOrderMain></MineOrderMain>
  </div>
</template>

<script>
	import MineOrderMain from './MineOrderMain.vue';

	export default{
		components:{
			MineOrderMain
		}
	}
</script>

<style>
@import '../assets/css/mine.css';
</style>
