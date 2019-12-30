// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './main.vue'
import router from './router'
import VueResource from 'vue-resource'
import vueConfig from './vue-config'
import { currency } from './currency'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VeeValidate from 'vee-validate'


Vue.filter('currency', currency)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

const configs = {
  // 这个是 远程接口的前缀。
  // 完整的接口地址形如： http://shopweb.sweetysoft.com/interface/goods/get_goods
  api: 'http://shopweb.sweetysoft.com/interface/'
}

Vue.use(vueConfig, configs)
Vue.use(VueAwesomeSwiper)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
