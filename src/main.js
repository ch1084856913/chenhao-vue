import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//引入路由
import router from './plugins/router';

//引入axios
//  import  './plugins/axios';
import axios from 'axios';
 //引入ui库
 import Vant from 'vant';
 import 'vant/lib/index.css';
import store from './store';
//  import './plugins/axios';
Vue.prototype.axios = axios;
 Vue.use(Vant);


new Vue({
  render: h => h(App),
  router,
  active:0,
  store
}).$mount('#app')
