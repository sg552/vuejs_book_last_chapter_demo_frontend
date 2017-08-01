<template>
  <!--
	<div id="my_cart">

		<CartHeaderView></CartHeaderView>
		<CartMainView></CartMainView>
		<CartFooterView></CartFooterView>
		<div class="pop" style="display: none">
		    <div class="pop_box">
		        <div class="del_info">
		            确定要删除该商品吗？
		        </div>
		        <div class="del_cancel">
		            取消
		        </div>
		        <div class="del_ok">
		            确定
		        </div>
		    </div>
		</div>
	</div>
  -->
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<style>
@import '../assets/css/cart.css';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  }
}
/*
 import {check,animatDelBox} from '../assets/js/cart.js'
 import CartHeaderView from './CartHeader.vue';
 import CartMainView from './CartMain.vue';
 import CartFooterView from './CartFooter.vue';

 export default{
 	components:{
 		CartHeaderView,
 		CartMainView,
 		CartFooterView
 	},
 	mounted(){
 		check();
 		animatDelBox();
 	}
 }
 */
</script>
