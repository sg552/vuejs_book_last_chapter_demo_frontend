<template>
  <div class="full_height">
    <div class="background">
      <h1>Shopping Cart</h1>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import NavBottomView from '../components/NavBottom.vue';
import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'

export default {
  mounted () {
    console.info('')
  },
  components: {
    NavBottomView,
    ProductList,
    Cart
  }
}
</script>

<style scoped>
.background {
   padding-bottom: 50px;
}
</style>
