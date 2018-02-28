// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这是基于Vue的一个插件

import Login from '../component/login/Login.vue'

import Admin from "../component/admin/Admin.vue";
import Shopcart from "../component/admin/shopcart/Shopcart.vue";

Vue.use(VueRouter)
// 
const shopcart = [
    { name: 'shopcart', path: 'shopcart', component: Shopcart} //子页面路径不需要加了路径
]

export default new VueRouter({
    routes:[
        // 登录
        { name: 'login', path: '/login', component:Login},
        // 后台
        { name: 'admin', path: '/admin', component: Admin,children:[...shopcart] }
    ]
})