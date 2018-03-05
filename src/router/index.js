// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这是基于Vue的一个插件

import Login from '../component/login/Login.vue'

import Admin from "../component/admin/Admin.vue";
// import Shopcart from "../component/admin/shopcart/Shopcart.vue";

// 配置商品模块
import goodsRouterConfig  from "./goods.js";

Vue.use(VueRouter)
// 
// const goodsRouterConfig = [
//     { name: 'goodsRouterConfig', path: 'goodsRouterConfig', component: goodsRouterConfig} //子页面路径不需要加了路径
// ]

let router = new VueRouter({
    routes:[
        { path: '/', redirect: '/login'},
        { path: '/admin', redirect: '/admin/goods/content/list'},
        // 登录
        { name: 'login', path: '/login', component:Login},
        // 后台
        { name: 'admin', path: '/admin', component: Admin, children: [...goodsRouterConfig] }
    ]
})
router.beforeEach((to, from, next) => {
    Vue.prototype.$http.get(Vue.prototype.$api.islogin).then(res=>{
        let islogin = false;
        if (res.data.code == 'logined'){
            islogin = true;
        }

        // 访问登录页面
        if(to.name == 'login'){
            if (islogin){
                // 登录过
                next({path:'/admin'})
            }else{
                // 没有登录过
                next()
            }
        }
        // 访问非登录页面
        if (to.name != 'login') {
            if (islogin) {
                // 登录过
                next()
            } else {
                // 没有登录过
                next({name:'login'})
            }
        }
    })
    
})


export default router;