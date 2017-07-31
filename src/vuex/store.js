import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/user_info'
import tabbar from './modules/tabbar'
import toast from './modules/toast'
import countdown from './modules/countdown'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    web_share: 'http://ptbweb.siwei.me',
    h5_share: 'http://ptbh5.siwei.me/?#'
  },
  modules: {
    userInfo,
    tabbar,
    toast,
    countdown
  },
  strict: debug,
  middlewares: debug ? [] : []
})
