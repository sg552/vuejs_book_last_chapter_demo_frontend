<template>
  <div class="background">
    <div id="my_cart">
      <CartHeaderView></CartHeaderView>
      <CartMainView></CartMainView>
      <NavBottomView :is_cart="is_cart"></NavBottomView>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/css/cart.css';
.background {
  margin-bottom: 30px;
}
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
       is_cart: true
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
