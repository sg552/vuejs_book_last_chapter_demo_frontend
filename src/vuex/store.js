import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/user_info'
import tabbar from './modules/tabbar'
import toast from './modules/toast'
import countdown from './modules/countdown'
import products from './modules/products'
import shopping_car from './modules/shopping_car'

import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    web_share: 'http://ptbweb.siwei.me',
    h5_share: 'http://ptbh5.siwei.me/?#'
  },
  actions,
  getters,
  modules: {
    products,
    shopping_car,
    userInfo,
    tabbar,
    toast,
    countdown
  },
  strict: debug,
  middlewares: debug ? [] : []
})
