<template>
  <div>
    <section class="my_order_box" style="height: 44px;">
      <div class="order_top_box">
        <div class="order_left">
          <img src="../assets/images/my_order_icon.png" alt="">
          <span style="margin-left: 0;">订单号:</span>
        </div>
        <div class="order_right" style="float: left;">
          <span>{{order_id}}</span>
        </div>
        <div class="" style="float: right;">
          <span style="color: #ff621a;">{{status_text}}</span>
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
        <div class="order_right" style="font-size: 20px;">
          <span style="color: #ff621a;">￥</span>
          <span style="color: #ff621a; font-weight: 600;">{{total_cost}}</span>
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
      is_dispatch: Boolean,
      order_status: Boolean,
      url_is_dispatch: String,
      url_order_status: String,
      goods: Array,
    },
    computed: {
      status_text () {
        if (!this.order_status) {
          return "未支付"
        } else if (this.is_dispatch) {
          return "已发货"
        } else {
          return "未发货"
        }
      }
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
