import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/login'
import Index from '@/views/shops/index'
import GoodsDetails from '@/views/shops/goods_details'
import Dingdanzhifu from '@/views/shops/dingdanzhifu'
import PaySuccess from '@/views/shops/paysuccess'
import PayFail from '@/views/shops/payfail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/shops/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/shops/goods_details',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/shops/dingdanzhifu',
      name: 'Dingdanzhifu',
      component: Dingdanzhifu
    },
    {
      path: '/shops/paysuccess',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/shops/payfail',
      name: 'PayFail',
      component: PayFail
    },
  ]
})
