import Vue from 'vue';
import Mini from './Mini';
import 'modern-normalize';

// 使用element 的同通 组件
import { Message } from 'element-ui';
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(Mini),
}).$mount('#app');
