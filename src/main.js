import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

import 'element-ui/lib/theme-chalk/index.css';

//import VueSocketIO from 'vue-socket.io'
//import io from "socket.io-client"
Vue.config.productionTip = false
//Vue.prototype.io=io('http://localhost:4000');
Vue.prototype.gonline="danger"
Vue.prototype.$show=false

Vue.use(ElementUI);
axios.defaults.withCredentials = true;

axios.defaults.baseURL="/api";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 


Vue.prototype.$echarts = echarts;
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
  render: h => h(App),
  
}).$mount('#app')
