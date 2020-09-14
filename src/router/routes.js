const Main = () => import('@/components/main/main.vue');
export default [
	{
		path: '/',
		name: '/',
		redirect: '/Film',
		meta: {},
		component: Main,
		children: [
			{
				path: 'Film',
				name: 'Film',
				component: () => import('@/views/Film.vue'),
			},
			{
				path: 'Play',
				name: 'Play',
				component: () => import('@/views/Play.vue'),
			},
			{
				path: 'Detail',
				name: 'Detail',
				component: () => import('@/views/Detail.vue'),
			},
			{
				path: 'History',
				name: 'History',
				component: () => import('@/views/History.vue'),
			},
			{
				path: 'Setting',
				name: 'Setting',
				component: () => import('@/views/Setting.vue'),
			},
			{
				path: 'Share',
				name: 'Share',
				component: () => import('@/views/Share.vue'),
			},
			{
				path: 'Star',
				name: 'Star',
				component: () => import('@/views/Star.vue'),
			},
		],
	},
];
