import Vue from "vue";

import App from "./component/App.vue";

import vueRouter from "./router"; //自动导入该目录下的index.js

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css';

import axios from "axios";
import api,{ domain } from "./js/api.js";

import "./less/index.less";

Vue.use(ElementUI)

// 配置默认域名, 这样请求的时候就不用在url里加域名了
axios.defaults.baseURL=domain;
// 因为我们调用的接口跨域了，默认情况下接口给我们设置的cookie无效，为了有效，我们要设置
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;
// 为了使用方便，把axios和pai添加到Vue原型，将来Vue组件可以直接使用

Vue.prototype.$http=axios;
Vue.prototype.$api=api;


// axios.get(domain+api.logout).then(()=>console.log('登出'))

new Vue({
    el:'#app',
    render: creaeElement => creaeElement(App),
    router: vueRouter

})
