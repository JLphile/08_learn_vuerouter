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
    name: 'home',
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
    path: '/login',
    component: () => import('../pages/Login.vue'),
    name: 'login',
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
//动态绑定路由
const category = {
  path: '/category',
  component: () => import('../pages/Category.vue'),
};
// 添加顶级路由对象
router.addRoute(category);
// 添加二级路由对象
router.addRoute('home', {
  path: 'moment',
  component: () => import('../pages/HomeMoment.vue'),
});

// 导航守卫
/**
 * return返回值问题：
 * 1.false：不进行导航
 * 2.undefined 或者不写，进行默认导航
 * 3.字符串：“路径” 就跳转到对应的路径中
 * 4.对象： 类似于 router.push({path:'/login',query:...})
 */
let counter = 0;
router.beforeEach((to, from) => {
  //   console.log(`进行了${++counter}路由跳转`);
  //   if (to.path.indexOf('/home') !== -1) {
  //     return '/login';
  //   }
  if (to.path != '/login') {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return '/login';
    }
  }
});
export default router;
