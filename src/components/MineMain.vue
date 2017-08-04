<template>
	<div class="mine_mm">
	<main class="mine_layout">
	    <section class="mine_infos clearfix">
	        <div class="mmm_info">
	            <div class="user_icon">
	                <img :src="customer.avatar" alt="">
	            </div>
	            <div class="user_detal">
	                <p class="user_name">{{customer.name}}</p>
	                <div class="reg">
	                    <a href="#" class="reg_link">丝路乐购会员</a>
	                    <div class="vip">
	                    <span class="vip_icon">
	                        <img src="../assets/images/vip.png" alt="">
	                    </span>
                      <!--
	                        <a href="#">
	                            红包大放送 >
	                        </a>
                      -->
	                    </div>
	                </div>
	            </div>
	        </div>
          <!--
          <div class="manage_account">
          <span>
          账户管理 >
          </span>
          </div>
	        <div class="yguanzhu_box">
	            <ul class="gunzhuf">
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>已购买的商品</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>关注的店铺</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>8</span>
	                        <span>浏览记录</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
          -->
	    </section>
	    <section class="my_order_box">
	        <div class="order_top_box" @click="show_all_orders">
	            <div class="order_left">
	                <img src="../assets/images/my_order_icon.png" alt="">
	                <span>我的订单</span>
	            </div>
	            <div class="order_right">
	                <span>全部订单></span>
	            </div>
	        </div>
	        <div class="order_bottom_box">
	            <ul>
	                <li class="order_item">
	                    <a href="#/mine_order?order_status=false" class="order_item_link">
	                        <img src="../assets/images/waitpay.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">待付款</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#/mine_order?order_status=true" class="order_item_link">
	                        <img src="../assets/images/wuliu.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">待收货</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </section>
      <!--
	    <section class="my_order_box">
	        <div class="order_top_box" @click="go_to_address_list">
	            <div class="order_left">
	                <img src="../assets/images/mypackage.png" alt="">
	                <span>地址管理</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	    </section>
      -->
	</main>
	</div>
</template>
<script>
import { go } from '../libs/router'

	export default{
		data(){
			return{
				customer: {},
        user_info:{}
			}
		},
    mounted(){
      this.$nextTick(()=>{
        this.$http.get(this.$configs.api + 'customers/user_info?open_id=' + this.$store.state.userInfo.open_id).then((response)=>{
          console.info(response.body)
          this.customer = response.body.customer
        },(error) => {
          console.error(error)
        });
      })
		},
		methods:{
      show_all_orders () {
        go("/mine_order", this.$router)
      },
      go_to_address_list () {
        go("/address", this.$router)
      }
		}
	}
</script>
