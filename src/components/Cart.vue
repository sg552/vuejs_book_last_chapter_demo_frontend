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
        <img :src="p.image"/>
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
        <p><button @click="add(p.id)">Add</button></p>
        <p><button @click="minus(p.id)">Minus</button></p>
        <p><button @click="deleteItem(p.id)">Delete</button></p>
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<style scoped>
@import '../assets/css/cart.css';
</style>

<script>
import { mapGetters } from 'vuex'
import { go } from '../libs/router'

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
      /*this.$store.dispatch('checkout', products)*/
      go("/shops/dingdanzhifu", this.$router)
    },
    add (id) {
      this.$store.dispatch('changeItemNumber', {id, type: 'add'})
    },
    minus (id) {
      this.$store.dispatch('changeItemNumber', {id, type: 'minus'})
    },
    deleteItem (id) {
      this.$store.dispatch('deleteItem', id)
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
