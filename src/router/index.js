// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这是基于Vue的一个插件

import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        { name: 'login', path: '/login', component:Login},
        { name: 'register', path: '/register', component: Register }
    ]
})