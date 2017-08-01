<template>
  <div>
    <div class="mine_h">
      <header class="top_bar">
        <h3 class="cartname">我的订单</h3>
      </header>
    </div>
    <span class="divider" style="height: 45px;"></span>
    <MineOrderMain v-for="order in orders" :goods="order.goods" :order_id="order.order_id" :total_cost="order.total_cost"></MineOrderMain>
  </div>
</template>

<script>
	import MineOrderMain from './MineOrderMain.vue';

	export default{
    data(){
      return {
        orders: [],
        buy_count: 1,
      }
    },
		components:{
			MineOrderMain
		},
    mounted(){
      this.$http.get(this.$configs.api + 'orders/get_all_orders').then((response)=>{
        console.info(response.body)
        this.orders = response.body.orders
      },(error) => {
        console.error(error)
      });
    },
    methods:{
    }
	}
</script>

<style>
@import '../assets/css/mine.css';
</style>
