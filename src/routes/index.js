import Vue from 'vue';
import VueRouter from 'vue-router';
import config from './config';
//安装VUE-router
//1.安装
Vue.use(VueRouter);
//2.创建路由对象
var router = new VueRouter(config);

export default router;