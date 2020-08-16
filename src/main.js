import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
Vue.prototype.$axios = axios;

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Optionally install the BootstrapVue icon components p
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
