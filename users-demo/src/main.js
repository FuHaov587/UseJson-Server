import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Add from './components/Add'
import Details from './components/Details'
import Update from './components/Update'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/', component: Home},
    {path: '/About', component: About},
    {path: '/Add', component: Add},
    {path: '/Details/:id', component: Details},
    {path: '/Update/:id', component: Update},
  ]
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
