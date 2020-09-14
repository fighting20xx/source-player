import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'modern-normalize';

// 使用element 的同通 组件
import { Message } from 'element-ui';
Vue.prototype.$message = Message;

/**
 * 注册Ajax
 * */
import Ajax from './ajax/ajax.js';
Vue.use(Ajax);

import router from '@/router';

// 创建实例对象
Vue.config.productionTip = false;
new Vue({
	el: '#app',
	store,
	router,
	render: (h) => h(App),
});
