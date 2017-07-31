import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/login'
import Index from '@/views/shops/index'
import GoodsDetails from '@/views/shops/goods_details'
import Dingdanzhifu from '@/views/shops/dingdanzhifu'

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
    { path: '/wait_to_shouquan',
      name: 'wait_to_shouquan',
      component: require('../views/wait_to_shouquan.vue')
    },
  ]
})
