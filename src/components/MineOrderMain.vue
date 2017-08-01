<template>
  <div>
    <section class="my_order_box" style="height: 44px;">
      <div class="order_top_box">
        <div class="order_left">
          <img src="../assets/images/my_order_icon.png" alt="">
          <span style="margin-left: 0;">订单号</span>
        </div>
        <div class="order_right">
          <span>{{order_id}}</span>
        </div>
      </div>
    </section>

    <MineOrderGood v-for="good in goods" :good_image="good.good_image" :good_name="good.good_name"
      :price="good.price" :quantity="good.quantity"></MineOrderGood>


    <span class="divider" style="height: 6px;"></span>

    <section class="my_order_box" style="height: 45px;">
      <div class="order_top_box">
        <div class="order_left">
          <img src="../assets/images/mypackage.png" alt="">
          <span style="margin-left: 0; font-size: 16px;">合计:</span>
        </div>
        <div class="order_right" style="color: #F23434; font-size: 20px; font-weight: 600;">
          <span>￥</span>
          <span >{{total_cost}}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
	import MineOrderGood from './MineOrderGood.vue';

	export default{
    data () {
      return {
      }
    },
    props:  {
      order_id: [String, Number],
      total_cost: [String, Number],
      goods: Array,
    },
		components:{
      MineOrderGood
		}
	}
</script>

<style scoped>
@import '../assets/css/detail.css';
@import '../assets/css/mine.css';
</style>
