import Vue from 'vue'
import Router from 'vue-router'
import util from '../../../util/common.js'
import filterpaths from './filterpath.js'
import Home from '../components/Home.vue'
import Classify from '../components/Classify.vue'
import Cart from '../components/Cart.vue'
import Mine from '../components/Mine.vue'
import ShopList from '../components/Shoplist.vue'
import ShopDetail from '../components/ShopDetail.vue'
import ShopBuy from '../components/ShopBuy.vue'
import ShopQuality from '../components/ShopQuality.vue'
import ShopLife from '../components/ShopLife.vue'
import Logon from '../components/Logon.vue'
import LogonPhone from '../components/LogonPhone.vue'
import Register from '../components/Register.vue'
import MySelf from '../components/MySelf.vue'
import Setting from '../components/Setting.vue'


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
      path: '/cart',
      name: 'Cart',
      component: Cart
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
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/ShopBuy',
      name: 'ShopBuy',
      component: ShopBuy
    },
    {
      path: '/ShopLife',
      name: 'ShopLife',
      component: ShopLife
    },
    {
      path: '/ShopQuality',
      name: 'ShopQuality',
      component: ShopQuality
    },
     {
      path: '*',
      redirect: '/shopList'
    }
  ]
})

router.beforeEach((to, from, next) => {
  
  var len = filterpaths.length;
  var pathflag = true;
  for(var i = 0;i<len;i++){
    if((to.path===filterpaths[i])&&(!util.getCookie("user") || util.getCookie("user")=='undefined')){
      pathflag = false;
      break;
    }
  }

  if(!pathflag){
    next({
      path: '/mine'
    })
  }else{
    next()
  }
})

export default router
