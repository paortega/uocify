import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Playlist from '@/views/PlaylistDetail'
import Artist from '@/views/ArtistDetail'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name:'home',
      component: Home
  },  
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },        
  {
    path: '/search/:q',
    name:'search',
    component: SearchResults
  },  
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: Playlist
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: Artist
  },  
  {
      path: '*',
      name:'notfound',
      component: NotFound
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router