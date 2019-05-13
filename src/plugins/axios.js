import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios=axios;
Vue.prototype.$http=axios;
window.axios=axios;

// export default axios;