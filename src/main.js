import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'modern-normalize';
import Register from './components/register';
Register.registerComponents();

// 使用element 的同通 组件
import { Message } from 'element-ui';
Vue.prototype.$message = Message;

/**
 * 注册Ajax
 * */
import Ajax from './ajax/ajax.js';
Vue.use(Ajax);

// 创建实例对象
Vue.config.productionTip = false;
new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
