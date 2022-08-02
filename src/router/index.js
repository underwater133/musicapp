import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/musicList',
    name: 'musicList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MusicListView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import('../views/SearchView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import ('../views/LoginView.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: ()=>import ('../views/MeView.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.login){
        next()
      }
      else{next('/login')}
    }
  },
  {
    path: '/me/latestPlay',
    name: 'latestPlay',
    component: ()=>import ('../views/LatestPlayView.vue')
  },
  {
    path:'/dailyRecSongs',
    name:'dailyRecSongs',
    component: ()=> import ('../views/DailyRecSongsView.vue')
  },
  {
    path:'/comments',
    name:'comments',
    component: () => import('../views/CommentsSession.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
