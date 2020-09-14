import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import routes from './routes';

Vue.use(Router);

const router = new Router({
	routes: [...routes],
	// mode: 'history'
});

router.beforeEach((to, from, next) => {
	// console.log(to, from, next, routes);
	// iView.LoadingBar.start()
	next();
});

router.afterEach((to) => {});
// router.push('/Film');
export default router;
