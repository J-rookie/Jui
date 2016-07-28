'use strict'
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './modules/app.vue';
import IndexView from './modules/indexView.vue';
import LayerView from './modules/layerView.vue';
import swipeView from './modules/swipeView.vue';
import toastView from './modules/toastView.vue';

//使用路由
Vue.use(VueRouter);

//初始化
var router = new VueRouter()

//路由设置
router.map({
	'/':{
		component:IndexView
	},
    '/layer': {
    	component: LayerView
    },
    '/swipe': {
        component: swipeView
    },
    '/toast': {
        component: toastView
    }
})

//默认路径
router.redirect({
  '*': '/'
})
//挂载
router.start(App, '#app')