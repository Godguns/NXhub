import Vue from 'vue'
import VueRouter from 'vue-router'
import sign from '../views/sign.vue'
import Home from '../views/Home.vue'
import nxhome from '../views/NXhome.vue'
import Peason from '../views/Peason.vue'
import blank from '../views/blank.vue'
import pixiv from '../views/Pixiv.vue'
import people from '../views/people.vue'
import picinfo from '../views/picinfo.vue'
import userupdate from '../views/userupdate'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/userupdate',
      component:userupdate
    },
    {
      path:'/picinfo:id',
      component:picinfo
    },
    {
      path:'/pixiv',
      component:pixiv
    },
    {
      path:'/people/:username',
      component:people,
      props: true
    },
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path:'/blank',
    component:blank
    
  },
  {
    path:'/peason',
    component:Peason
    
  },
  {
    path:'/nxhome',
    component:nxhome
  },
  {
    path:'/sign',
    component:sign

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
