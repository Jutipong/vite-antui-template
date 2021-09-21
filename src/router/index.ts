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
		component: () => import('../layout/default.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('_VIEWS_/home/index.vue'),
			},
		]
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import('../layout/admin.vue'),
		children: [
			{
				path: '1',
				name: 'Test1',
				component: () => import(/* webpackChunkName: "attention" */ '_VIEWS_/test1/index.vue'),
			},
			{
				path: '2',
				name: 'Test2',
				component: () => import(/* webpackChunkName: "hostList" */ '_VIEWS_/test2/index.vue'),
			},
		]
	},
	{
		path: '/:catchAll(.*)*',
		name: "pagenotfound",
		component: () => import('@/views/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router



// import { createRouter, createWebHistory } from 'vue-router';

// interface RoutesType {
// 	path: string;
// 	name: string;
// 	component: () => {};
// 	meta?: {
// 		index?: number;
// 		keepAlive?: boolean;
// 	};
// 	children?: RoutesType[];
// }

// const routes: RoutesType[] = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: () => import('_VIEWS_/index.vue'),
// 		children: [
// 			{
// 				path: '',
// 				name: 'Home',
// 				component: () => import('_VIEWS_/home/index.vue'),
// 			},
// 			{
// 				path: 'test1',
// 				name: 'Test1',
// 				component: () => import(/* webpackChunkName: "attention" */ '_VIEWS_/test1/index.vue'),
// 			},
// 			{
// 				path: 'test2',
// 				name: 'Test2',
// 				component: () => import(/* webpackChunkName: "hostList" */ '_VIEWS_/test2/index.vue'),
// 			},
// 		]
// 	},
// 	{
// 		path: '/:catchAll(.*)*',
// 		name: "pagenotfound",
// 		component: () => import('@/views/404.vue'),
// 	},
// ]
//=============================================================================
// import { createRouter, createWebHistory } from 'vue-router'
// import home from "_VIEWS_/home/index.vue";
// import test1 from "_VIEWS_/test1/index.vue";
// import test2 from "_VIEWS_/test2/index.vue";

// const routes = [
// 	{ path: '/', component: home, meta: { layout: 'default' } },
// 	{ path: '/test1', component: test1, meta: { layout: 'admin' } },
// 	{ path: '/test2', component: test2, meta: { layout: 'admin' } }
// ]

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes
// })

// export default router