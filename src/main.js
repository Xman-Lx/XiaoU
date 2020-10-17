// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.Event = new Vue();
import $ from "jquery"
Vue.prototype.$ = $

import vueSwiper from "vue-awesome-swiper"
Vue.prototype.$vueSwiper = vueSwiper;

import "./assets/css/reset.css"
import "./assets/js/rem"
import "./filter/index"
import "./common/index"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
