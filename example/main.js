'use strict'
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './modules/app';
import IndexView from './modules/index';

//使用路由
Vue.use(VueRouter);

//初始化
var router = new VueRouter()

//路由设置
router.map({
    '/layer': {
    	name: 'index',  // 路径别名
    	component: IndexView
    },
    '/shuffling': {
    	name: 'index', 
        component: IndexView
    },
})

//默认路径
router.redirect({
  '*': '/'
})
//挂载
router.start(App, '#app')