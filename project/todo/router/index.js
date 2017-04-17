import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Classify from '../components/Classify.vue'
import Order from '../components/Order.vue'
import Mine from '../components/Mine.vue'
import ShopList from '../components/Shoplist.vue'
import ShopDetail from '../components/ShopDetail.vue'
import ShopBuy from '../components/ShopBuy.vue'
import Logon from '../components/Logon.vue'
import LogonPhone from '../components/LogonPhone.vue'
import Register from '../components/Register.vue'
import MySelf from '../components/MySelf.vue'
import util from '../../../util/common.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home,
      redirect: '/shopList',
      children: [
        {
          path: '/shopList',
          name: 'ShopList',
          component: ShopList
        },
        {
          path: '/detail/:shopId',
          name: 'ShopDetail',
          component: ShopDetail
        }
      ]
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      redirect:'/mine/logon',
      children: [{
        path: '/mine/logon',
        name: 'Logon',
        component: Logon
      },{
        path: '/mine/logonphone',
        name: 'LogonPhone',
        component: LogonPhone
      }]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/myself',
      name: 'MySelf',
      component: MySelf
    },
    {
      path: '/ShopBuy',
      name: 'ShopBuy',
      component: ShopBuy
    },
     {
      path: '*',
      redirect: '/shopList'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // alert(sessionStorage.getItem('accessToken'))
  //    console.log(to);
    console.log(!util.getCookie("user") || util.getCookie("user")=='undefined')
  if ((to.path==='/myself')&&(!util.getCookie("user") || util.getCookie("user")=='undefined')) {
    console.log(1)
    console.log(to.path)
    next({
      path: '/mine'
    })
  } else {
    console.log(2)
    next()
  }
})

export default router
