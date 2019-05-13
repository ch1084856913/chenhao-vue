import actions from './action';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex)
let store = new vuex.Store({
    actions,mutations,state,getters
})
export default store;