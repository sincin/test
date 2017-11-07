// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [{
  path: '/goods',
  name: 'goods',
  component: goods
}, {
  path: '/seller',
  name: 'seller',
  component: seller
}, {
  path: '/ratings',
  name: 'ratings',
  component: ratings
}]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
