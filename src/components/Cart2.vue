<template>
  <div class="background">
    <div id="my_cart">
      <CartHeaderView></CartHeaderView>
      <CartMainView></CartMainView>
      <NavBottomView></NavBottomView>
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
