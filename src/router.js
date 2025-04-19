import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Games from './views/Games.vue'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('./views/Home.vue')
  // },
  {
    path: '/',
    name: 'Games',
    component: () => import('./views/Games.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('./views/Games.vue')
  },
  {
    path: '/software',
    name: 'Software',
    component: () => import('./views/Software.vue')
  },
  {
    path: '/misc',
    name: 'Misc',
    component: () => import('./views/Misc.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('./views/Resume.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/AboutDetails.vue')
  },
  {
    path: '/meme',
    name: 'Meme',
    component: () => import('./views/Meme.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('./views/Reports.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./views/Contact.vue')
  },
  {
    path: '/feelthedisaster',
    name: 'FeelTheDisaster',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/projViews/FeelTheDisaster.vue')
  },
  {
    path: '/touchinghearts',
    name: 'TouchingHearts',
    component: () => import('./views/projViews/TouchingHearts.vue')
  },
  {
    path: '/timeloopmetroid',
    name: 'TimeloopMetroid',
    component: () => import('./views/projViews/TimeloopMetroid.vue')
  },
  {
    path: '/getmeowtofhere',
    name: 'GetMeowtOfHere',
    component: () => import('./views/projViews/GetMeowtOfHere.vue')
  },
  {
    path: '/tronreplica',
    name: 'TronReplica',
    component: () => import('./views/projViews/TronReplica.vue')
  },
  {
    path: '/jengafortress',
    name: 'JengaFortress',
    component: () => import('./views/projViews/JengaFortress.vue')
  },
  {
    path: '/jengafortresspc',
    name: 'JengaFortress_PC',
    component: () => import('./views/projViews/JengaFortressPC.vue')
  },
  {
    path: '/raphlanim',
    name: 'RaphlAnim',
    component: () => import('./views/projViews/RaphlAnim.vue')
  },
  {
    path: '/dummypark',
    name: 'DummyPark',
    component: () => import('./views/projViews/DummyPark.vue')
  },
  {
    path: '/cybercar',
    name: 'Cybercar',
    component: () => import('./views/projViews/Cybercar.vue')
  },
  {
    path: '/worldgenerator',
    name: 'WorldGenerator',
    component: () => import('./views/projViews/WorldGenerator.vue')
  },
  {
    path: '/scarabdescent',
    name: 'Scarab Descent',
    component: () => import('./views/projViews/ScarabDescent.vue')
  },
  {
    path: '/index.html',
    redirect: '/games'
  },
  {
    path: '*',
    name: 'catchAll',
    component: Games
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
