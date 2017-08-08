// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './main.vue'
import router from './router'
import VueResource from 'vue-resource'
import vueConfig from './vue-config'
import { currency } from './currency'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.filter('currency', currency)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

const configs = {
  api: 'http://ptbweb.siwei.me/interface/'
  //api: 'http://localhost:3000/interface/'
}

Vue.use(vueConfig, configs)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
