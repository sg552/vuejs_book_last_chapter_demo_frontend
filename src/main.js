// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './main.vue'
import router from './router'
import VueResource from 'vue-resource'
import vueConfig from './vue-config'
import VuePreview from 'vue-preview'
import vuePicturePreview from 'vue-picture-preview'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.use(VuePreview)
Vue.use(vuePicturePreview)

const configs = {
    //api: 'http://queentown.wenyc.cn/interface/'
//  api: 'http://api.dingxinzhiye.com/interface/'
  api: 'http://localhost:3000/interface/'
}

Vue.use(vueConfig, configs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
