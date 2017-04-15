export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  // 常量 begin
  allLoaded: false,
  loadmore: "loadmore",
  transitionName: "transitionName",
  // 常量 end
  // 首页所有shop
  shoplist: [],
  // 单个shop信息
  shopDetail: {},
  // 测试用
  testImg: ['assets/imgs/shopList/logo.png','assets/imgs/shopList/11.jpg',
            'assets/imgs/shopList/nav.png','assets/imgs/shopList/2.jpg',
            'assets/imgs/shopList/totop.png','assets/imgs/shopList/n2.png',
            'assets/imgs/shopList/n3.png','assets/imgs/shopList/n4.png',
            'assets/imgs/shopList/n5.png','assets/imgs/shopList/n6.png',
            'assets/imgs/shopList/n7.png','assets/imgs/shopList/n8.png',
            'assets/imgs/shopList/n9.png','assets/imgs/shopList/n10.png',],
  // 高洋用 begin
  // gyimg: []
  // 高洋用 end
  // 王春园用 begin
  userphone: 'assets/imgs/userphone.png',
  mineMsg: "",
  phonenum: null,
  chart: null,
  password: null,
  userinfo: {},
  // 王春园用 end
  // 韩旭 begin
  classifyImg: ['http://k21.iblimg.com/prd/images/category/2016/09/进口面膜.jpg','assets/imgs/search.png'],
  isHide: 'none',
  cartImg: 'http://m.bl.com/h5-web/ui/h5resource/css/i/h5-cart-img_r2_c2.png'
  //韩旭 
}

// 这里对state进行操作，对state的操作最好放在这里，不要私自动用state
export const mutations = {
  setShoplist (state, test) {
    state.shoplist = test
  },
  setShopDetail (state, test) {
  	state.shopDetail = test
  	console.log("name:"+test.shopname)
  },
  setIsHide(state) {
    state.isHide = state.isHide === "none" ? "block" : "none"
  },
  // 王春园 begin
  setMineMsg(state, arg) {
    state.mineMsg = arg;
  },
  setUserinfo(state, arg) {
    console.log("a:"+arg)
    state.userinfo = arg;
  }
  // 王春园 end
}

export const actions = {
  // selectAll: ({ commit }) => commit('selectAll')
}
