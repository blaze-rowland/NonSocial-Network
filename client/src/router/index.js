import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// })

export default router;
