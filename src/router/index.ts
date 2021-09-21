import { createRouter, createWebHistory } from 'vue-router';

interface RoutesType {
	path: string;
	name: string;
	component: () => {};
	meta?: {
		index?: number;
		keepAlive?: boolean;
	};
	children?: RoutesType[];
}

const routes: RoutesType[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../layouts/layout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../views/home/index.vue'),
			},
			{
				path: 'test1',
				name: 'Test1',
				component: () => import(/* webpackChunkName: "attention" */ '../views/test1/index.vue'),
			},
			{
				path: 'test2',
				name: 'Test2',
				component: () => import(/* webpackChunkName: "hostList" */ '../views/test2/index.vue'),
			},
		]
	},
	{
		path: '/:catchAll(.*)*',
		name: "pagenotfound",
		component: () => import('../views/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router