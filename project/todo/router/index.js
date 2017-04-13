import Vue from 'vue'
import Router from 'vue-router'
import Disciver from '../components/Discover.vue'
import Order from '../components/Order.vue'
import Mine from '../components/Mine.vue'
import ShopList from '../components/Shoplist.vue'
import ShopDetail from '../components/ShopDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopList',
      component: ShopList,
    },
    {
      path: '/detail/:shopid',
      name: 'ShopDetail',
      component: ShopDetail
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Disciver
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
