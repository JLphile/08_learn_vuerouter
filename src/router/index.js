import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';
// 配置映射表
const routes = [
  { path: '/', redirect: '/home' },
  // component要求函数返回一个promise，而import函数正好满足,而且是懒加载
  {
    path: '/home',
    component: () =>
      import(/*webpackChunkName:"home-chunk"*/ '../pages/Home.vue'),
    // 当某个路由有子级路由时，父级路由需要一个默认的路由，因此父级路由不能定义name属性
    // name: 'home',
    meta: {
      name: 'why',
      age: 18,
    },
    children: [
      // 重定向
      {
        path: '',
        redirect: '/home/message',
      },
      {
        path: 'message',
        component: () => import('../pages/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue'),
      },
    ],
  },

  {
    path: '/about',
    component: () => import('../pages/About.vue'),
    name: 'about',
  },
  {
    //动态绑定路由
    path: '/user/:username/id/:id',
    component: () => import('../pages/User.vue'),
    name: 'user',
  },
  {
    // path: '/:pathMatch(.*)*',
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue'),
  },

  // { path: '/about', component: Home },
  // { path: '/about', component: About },
];
// 创建一个路由对象router
const router = createRouter({
  routes,
  //   history: createWebHashHistory(),
  history: createWebHistory(),
});

export default router;
