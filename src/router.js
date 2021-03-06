//生产环境route按需加载
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const article = () => import(/* webpackChunkName: "article" */ './article/index.vue'),
	articleList = () => import(/* webpackChunkName: "articleList" */ './article/articleList.vue'),
	articleDetails = () => import(/* webpackChunkName: "articleDetails" */ './article/articleDetails.vue'),
	crawler = () => import(/* webpackChunkName: "crawler" */ './crawler/index.vue'),
	register = () => import(/* webpackChunkName: "register" */ './user/register.vue'),
	messageBoard = () => import(/* webpackChunkName: "messageBoard" */ './messageBoard/index.vue'),
	profile = () => import(/* webpackChunkName: "profile" */ './profile/index.vue');

export default new VueRouter({
  mode: 'history',
  routes: [
		{ path: '/',  redirect:{name: 'articleList'}, name: 'index'},
		{ path:'/article', name:'article', component: article ,
			children:[
				{ path: 'list.html', name: 'articleList', component: articleList },
				{ path: 'articleDetails.html', name: 'articleDetails', component: articleDetails }
			]
		},
		{ path: '/crawler.html', name: 'crawler', component: crawler },
		{ path: '/register.html', name: 'register', component: register },
		{ path: '/messageBoard.html', name: 'messageBoard', component: messageBoard},
		{ path: '/profile.html', name: 'profile', component: profile }
  ]
});