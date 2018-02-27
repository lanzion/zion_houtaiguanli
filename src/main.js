import Vue from "vue";

import App from "./component/App.vue";

import vueRouter from "./router"; //自动导入该目录下的index.js


new Vue({
    el:'#app',
    render: creaeElement => creaeElement(App),
    router: vueRouter

})