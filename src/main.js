import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import './assets/css/cssreset.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import router from './assets/js/router.js'
import Vuex from 'vuex'
import store from './assets/js/data.js'
Vue.use(Mint);
Vue.use(vueRouter)
Vue.use(Vuex)
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store

})
