import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['../views/Home.vue'], resolve),
  },
  {
    path: '/detail',
    name: 'detail',
    component: (resolve) => require(['../views/detail.vue'], resolve),
  },
  {
    path: '/webView',
    name: 'webView',
    component: (resolve) => require(['../views/webView.vue'], resolve),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
