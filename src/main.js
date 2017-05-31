import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import movieSubject from './component/movie_subject.vue'
import movieList from './component/movie_list.vue'
import store from './store/store.js'
require('./css/base.css');
require('./css/movie.css');
require('./css/mixed_static.css');
require('./css/subject_movie.css');
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  //添加路由
  routes: [
  	{ path: '/movieSubject', component: movieSubject },
    { path: '/:type', component:movieList }
  ]
})
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
