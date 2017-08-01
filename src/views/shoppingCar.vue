<template>
  <div class="full_height">
    <div class="background">
      <h1>Shopping Cart Example</h1>
      <hr>
      <h2>Products</h2>
      <product-list></product-list>
      <hr>
      <cart></cart>
    </div>
    <NavBottomView></NavBottomView>
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
