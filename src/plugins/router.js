import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import Category from '../pages/Category.vue';
import ShoppingCart from '../pages/ShoppingCart.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import error from '../pages/error.vue';

let routes = [
    
    {path:'/home',component:home},

    {path:'/category',component:Category
},
    {path:'/shoppingcart',component:ShoppingCart},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
   
    {path:'/',redirect:'/home'},
    {path:'*',component:error},
];

let router = new VueRouter({
    mode:'history',routes});

export default router;