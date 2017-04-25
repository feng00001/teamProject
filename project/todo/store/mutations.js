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
  // 高洋用 begin
  testImg: ['assets/imgs/shopList/logo.png','assets/imgs/shopList/11.jpg',
            'assets/imgs/shopList/nav.png','assets/imgs/shopList/2.jpg',
            'assets/imgs/shopList/totop.png','assets/imgs/shopList/n2.png',
            'assets/imgs/shopList/n3.png','assets/imgs/shopList/n4.png',
            'assets/imgs/shopList/n5.png','assets/imgs/shopList/n6.png',
            'assets/imgs/shopList/n7.png','assets/imgs/shopList/n8.png',
            'assets/imgs/shopList/n9.png','assets/imgs/shopList/n10.png',],
  prePage: 0,
  everyday: [],
  yourlikelist: [],
  isDisplay:'all',
  shopbuylist: [],
  shoplifelist: [],
  // 高洋用 end
  // 王春园用 begin
  userphone: 'assets/imgs/userphone.png',
  mineMsg: "",
  phonenum: null,
  chart: null,
  password: null,
  msgphone: null,
  userinfo: {},
  // 王春园用 end
  // 韩旭 begin
  classifyImg: [
    'http://k21.iblimg.com/prd/images/category/2016/09/进口面膜.jpg',
    'assets/imgs/search.png',
    'http://img32.iblimg.com/photo-1/3030/2016/12/1623634222_500x500.jpg',
    'http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/serve-logo.png',
    'http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/portrait.png',
    'http://img.iblimg.com/bl-iblapp-25/2066358001_150x150.jpg',
    'http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/star.png',
    'http://k21.iblimg.com/prd/images/brand/2016/08/saibeige.jpg',
    'http://img33.iblimg.com/photo-4/3030/642860909_200x200.jpg'],
  isHide: 'none',
  isSure: 'none',
  cartImg: 'http://m.bl.com/h5-web/ui/h5resource/css/i/h5-cart-img_r2_c2.png',
  isTop: false,
  isDown: true,
  slotListImg: 'http://m.bl.com/h5-web/ui/newH5resource/css/i/icon-close.png',
  slotList: {},
  isShow: 'everyLook',
  isPaly: 'store',
  typelist: [],
  subtypelist: [],
  priceFlag: true,
  cur: '',
  cartlist: [],
  watches: [],
  hots: [],
  buys: [],
  reportlist: []
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
  //韩旭 begin 
  setIsHide(state) {
    state.isHide = state.isHide === "none" ? "block" : "none"
  },
  setIsSure(state) {
    state.isTop = !state.isTop
    state.isDown = !state.isDown
    state.isSure = state.isSure === "none" ? "block" : "none"
  },
  setSlotList(state, test) {
    state.slotList = test
  },
  setIsShow(state, test) {
    console.log("in："+test)
    state.isShow = test
  },
  setIsPlay(state, test) {
    console.log("in："+test)
    state.isPaly = test
  },
  setTypelist(state, test) {
    state.typelist = test
  },
  setSubtypelist(state, test) {
    state.subtypelist = test
  },
  setPriceFlag(state) {
    state.priceFlag = state.priceFlag === true ? false : true
  },
  setCur(state, test) {
    state.cur = test
  },
  setCartlist(state, test) {
    state.cartlist = test
  },
  setWatches(state, test) {
    var w1 = []
    var w2 = []
    var w3 = []
    test.map((el,idx)=>{
      if(idx<6){
        w1.push(test[idx])
      }else if(idx>=6 && idx<12){
        w2.push(test[idx])
      }else{
        w3.push(test[idx])
      }
    })
    state.watches = [w1,w2,w3]
  },
  setHots(state, test) {
    var h1 = []
    var h2 = []
    var h3 = []
    test.map((el,idx)=>{
      if(idx<6){
        h1.push(test[idx])
      }else if(idx>=6 && idx<12){
        h2.push(test[idx])
      }else if(idx>=12 && idx<18){
        h3.push(test[idx])
      }
    })
    state.hots = [h1,h2,h3]
  },
  setBuys(state, test) {
    var b1 = []
    var b2 = []
    var b3 = []
    test.map((el,idx)=>{
      if(idx<6){
        b1.push(test[idx])
      }else if(idx>=6 && idx<12){
        b2.push(test[idx])
      }else if(idx>=12 && idx<18){
        b3.push(test[idx])
      }
    })
    state.buys = [b1,b2,b3]
  },
  setReportlist(state, test) {
    state.reportlist = test
  },
  //韩旭 end
  // 王春园 begin
  setMineMsg(state, arg) {
    state.mineMsg = arg;
  },
  setUserinfo(state, arg) {
    console.log("a:"+arg)
    state.userinfo = arg;
  },
  // 王春园 end
  // 高洋用 begin
  setEveryday(state, test) {
    state.everyday = test;
  },
  setPrePage(state, test) {
    state.prePage = test;
  },
  setYourlikelist(state, test) {
    state.yourlikelist = test;
  },
  setIsDisplay(state, test) {
    state.isDisplay = test
  },
  setShopBuylist(state, test) {
    state.shopbuylist = test
  },
  setShopLifelist(state, test) {
    state.shoplifelist = test
  }
  // 高洋用 end
}

export const actions = {
  // selectAll: ({ commit }) => commit('selectAll')
}
