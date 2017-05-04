import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import util from '../../../util/common.js'
import filterpaths from './filterpath.js'
import Home from '../components/Home.vue'
import Classify from '../components/Classify.vue'
import Classifyslot from '../components/Classifyslot.vue'
import SlotList from '../components/SlotList.vue'
import Cart from '../components/Cart.vue'
=======
import Home from '../components/Home.vue'
import Classify from '../components/Classify.vue'
import Order from '../components/Order.vue'
>>>>>>> d97d9b98803b432e1cc21eff6279a90782774142
import Mine from '../components/Mine.vue'
import Search from '../components/Search.vue'
import ShopList from '../components/Shoplist.vue'
import ShopDetail from '../components/ShopDetail.vue'
import ShopBuy from '../components/ShopBuy.vue'
import ShopQuality from '../components/ShopQuality.vue'
import ShopLife from '../components/ShopLife.vue'
import MyOrder from '../components/MyOrder.vue'
import Logon from '../components/Logon.vue'
import LogonPhone from '../components/LogonPhone.vue'
import Register from '../components/Register.vue'
import MySelf from '../components/MySelf.vue'
import Setting from '../components/Setting.vue'
import Apply from '../components/Apply.vue'
import Search from '../components/Search.vue'

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
<<<<<<< HEAD
      path: '/classifyslot',
      name: 'Classifyslot',
      component: Classifyslot,
      redirect: '/classify',
      children: [
        {
          path: '/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/slotlist',
          name: 'SlotList',
          component: SlotList
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
=======
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
>>>>>>> d97d9b98803b432e1cc21eff6279a90782774142
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
<<<<<<< HEAD
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
      path: '/shopbuy',
      name: 'ShopBuy',
      component: ShopBuy
    },
    {
      path: '/shoplife',
      name: 'ShopLife',
      component: ShopLife
    },
    {
      path: '/ShopQuality',
      name: 'ShopQuality',
      component: ShopQuality
    },
    {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/apply/:checkid?',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
=======
>>>>>>> d97d9b98803b432e1cc21eff6279a90782774142
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
