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
  classifyImg: ['http://k21.iblimg.com/prd/images/category/2016/09/进口面膜.jpg','assets/images/search.png'],
  // 测试用
  testImg: ['assets/imgs/logo.png','assets/imgs/11.jpg','assets/imgs/nav.png','assets/imgs/2.jpg'],
  // 高洋用 begin
  // gyimg: []
  // 高洋用 end
  // 王春园用 begin
  userphone: 'assets/imgs/userphone.png'
  // 王春园用 end
}

// 这里对state进行操作，对state的操作最好放在这里，不要私自动用state
export const mutations = {
  setShoplist (state, test) {
    state.shoplist = test
  },
  setShopDetail (state, test) {
  	state.shopDetail = test
  	console.log("name:"+test.shopname)
  }
}

export const actions = {
  // selectAll: ({ commit }) => commit('selectAll')
}
