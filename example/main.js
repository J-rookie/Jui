'use strict'
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './modules/app.vue';
import IndexView from './modules/indexView.vue';
import LayerView from './modules/layerView.vue';


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
    '/shuffling': {
        component: IndexView
    }
})

//默认路径
router.redirect({
  '*': '/'
})
//挂载
router.start(App, '#app')