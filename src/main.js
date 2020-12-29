import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
import './utils/rem.js';

import router from './router/index.js';


Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
