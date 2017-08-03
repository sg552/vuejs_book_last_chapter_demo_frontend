<template>
		<main class="cart_box">
    <p v-show="!products.length"><i>请选择商品加入到购物车</i></p>
		    <div class="cart_content clearfix" v-for="item in products" style="position: relative;">
		        <div class="cart_shop clearfix">
		            <div class="cart_check_box">
		                <div class="check_box" checked>
		                </div>
		            </div>
		            <div class="shop_info clearfix">
		                <span class="shop_name" style="font-size: 14px;">丝路乐购新疆商城</span>
		            </div>
		        </div>

            <div @click="find_item_id(item)" class="cart_del clearfix" style="display: inline-block; position: absolute; top: 10px; right: 10px;">
              <div class="del_top">
              </div>
              <div class="del_bottom">
              </div>
            </div>
		        <div class="cart_item">
		            <div class="cart_item_box">
		                <div class="check_box">

		                </div>
		            </div>
		            <div class="cart_detial_box clearfix">
		                <a class="cart_product_link">
		                    <img :src="item.image" alt="">
		                </a>
		                <div class="item_names">
		                    <a>
		                        <span>{{item.title}}</span>
		                    </a>
		                </div>
		                <div class="cart_weight">
                      <span class="my_color" style="color: #979292;">{{item.title}}</span>
                      <!--
		                    <i class="my_weigth">重量:0.45kg</i>
		                    <span class="my_color">颜色:AT800/16</span>
                      -->
		                </div>
		                <div class="cart_product_sell">
		                    <span class="product_money">￥<strong class="real_money">{{item.price}}</strong></span>
		                    <div class="cart_add clearfix">
		                        <span @click="minus(item.id)" class="my_jian">-</span>
		                        <input type="tel" class="my_count" :value="item.quantity">
		                        <span @click="add(item.id)" class="my_add">+</span>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

        <div class="pop" style="display: none">
          <div class="pop_box">
            <div class="del_info">
              确定要删除该商品吗？
            </div>
            <div class="del_cancel">
              取消
            </div>
            <div @click="deleteItem" class="del_ok">
              确定
            </div>
          </div>
        </div>

        <div class="cart_fo">
          <footer class="cart_footer">
            <!--
              <div class="all_check_box">
              <div class="check_box">
              </div>
              <span>全选</span>
              </div>
            -->
            <div class="count_money_box">
              <div class="heji">
                <strong>合计:</strong>
                <strong style="color: #ff621a; font-size: 18px;">{{ total | currency }}</strong>
              </div>
              <a :disabled="!products.length" @click="checkout(products)" class="go_pay">
                <span style="color: #f5f5f5; font-weight: 600;">结算</span>
              </a>
            </div>
          </footer>
        </div>
		</main>

</template>
<script>
 import { mapGetters } from 'vuex'
 import { go } from '../libs/router'
 import {check,animatDelBox} from '../assets/js/cart.js'

	export default{
		data(){
			return{
        need_delete_item: {},
				cartDatas:[
        {
          shop_name: "新疆沃尔玛",
          product_img_url: "http://siweitech.b0.upaiyun.com/image/silulegou/GVaBKvjIGEyDGcmk.jpeg",
          product_name: "新疆哈密瓜",
          description: "新疆克拉玛依哈密瓜,香甜可口新疆克拉玛依哈密瓜,香甜可口",
          product_uprice: 12.5,
        },
        {
          shop_name: "新疆沃尔玛",
          product_img_url: "http://siweitech.b0.upaiyun.com/image/silulegou/GVaBKvjIGEyDGcmk.jpeg",
          product_name: "新疆哈密瓜",
          description: "新疆克拉玛依哈密瓜,香甜可口",
          product_uprice: 12.5,
        },
        ],
			}
		},
    mounted(){
     check();
     animatDelBox();
    },
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total () {
        return this.products.reduce((total, item) => {
          return total + item.price * item.quantity
        }, 0)
      }
    },
    methods: {
      checkout (products) {
        //this.$store.dispatch('checkout', products)
        go("/shops/dingdanzhifu", this.$router)
      },
      add (id) {
        this.$store.dispatch('changeItemNumber', {id, type: 'add'})
      },
      minus (id) {
        this.$store.dispatch('changeItemNumber', {id, type: 'minus'})
      },
      deleteItem () {
        this.$store.dispatch('deleteItem', this.need_delete_item.id)
      },
      find_item_id (item) {
        this.need_delete_item = item
      }
    },
	}
</script>

<style >
</style>
