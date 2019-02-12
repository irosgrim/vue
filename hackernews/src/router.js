import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Posts from './views/Posts.vue';
import NewPosts from './views/Newposts.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/newposts',
			name: 'newposts',
			component: NewPosts
		},
		{
			path: '/tech',
			name: 'tech',
			component: Posts
		},
		{
			path: '/programming',
			name: 'programming',
			component: Posts
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
});
