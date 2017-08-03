<template>
	<div id="my_cart">

		<CartHeaderView></CartHeaderView>
		<CartMainView></CartMainView>
    <NavBottomView></NavBottomView>
	</div>
</template>

<style>
@import '../assets/css/cart.css';
</style>

<script>
/*
export default {
}
*/

 import CartHeaderView from './CartHeader.vue';
 import CartMainView from './CartMain.vue';
 import CartFooterView from './CartFooter.vue';
 import NavBottomView from './NavBottom.vue';

 export default{
   data () {
     return {
     }
   },
   mounted(){
   },
   components:{
     CartHeaderView,
     CartMainView,
     CartFooterView,
     NavBottomView
   }
 }
</script>
