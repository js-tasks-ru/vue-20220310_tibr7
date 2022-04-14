import { createRouter, createWebHistory } from 'vue-router';
import PageIndex from '../views/PageIndex.vue';



export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  //history: createWebHistory(process.env.BASE_URL),
  routes: [{
  path: "/",
  name:"index",
  component: PageIndex,
  },
    {
      path: "/login",
      component:()=>import('../views/PageLogin.vue'),
      name:"login",

    },
    {
      path: "/register",
      name:"register",
      component:()=>import('../views/PageRegister.vue'),
    },


  ],
});
