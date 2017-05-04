<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="order-detail">
    <div id="header">
      <div class="top">
        <div class="l back" @click="$router.go(-1)">
          <i class="iconfont">&#x3484;</i>
        </div>
        <span>订单管理</span>
      </div>
      <ul @touchend='switchover($event)'>
        <li class=" all active">全部</li>
        <li class=" payment">待付款</li>
        <li class=" send">待发货</li>
        <li class=" receive">待收货</li>
        <li class=" evaluate">待评价</li>
      </ul>
    </div>
    <all-report v-if="$store.state.isDisplay==='all'"></all-report>
    <payment v-else-if="$store.state.isDisplay==='payment'"></payment>
    <send v-else-if="$store.state.isDisplay==='send'"></send>
    <receive v-else-if="$store.state.isDisplay==='receive'"></receive>
    <evaluate v-else="$store.state.isDisplay==='evaluate'"></evaluate>
  	
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import  AllReport from './AllReport.vue'
import Payment from './Payment.vue'
import Send from './Send.vue'
import Receive from './Receive.vue'
import Evaluate from './Evaluate.vue'
var obj = {
  AllReport,
  Payment,
  Send,
  Receive,
  Evaluate
};



export default {
	// 页面加载完成后调用，
	mounted (){
		
	},
	methods: {
    switchover(e) {
      console.log(e.target.className)
      $('.active').removeClass('active');
      $(e.target).addClass('active')
      if(e.target.className.indexOf('all') !== -1){
        this.$store.commit('setIsDisplay', 'all')
      }else if(e.target.className.indexOf('payment') !== -1){
        this.$store.commit('setIsDisplay', 'payment')
      }else if(e.target.className.indexOf('send') !== -1){
        this.$store.commit('setIsDisplay', 'send')
      }else if(e.target.className.indexOf('receive') !== -1){
        this.$store.commit('setIsDisplay', 'receive')
      }else{
        this.$store.commit('setIsDisplay', 'commence')
      }
    },
		...mapActions([
		  
		])
	},
	components: obj
}
</script>

<style scoped>
.order-detail{
	display: flex;
	flex-direction:column;
  margin-bottom:2.2rem;
}
#header{
    height: 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background:rgba(255,255,255,0.6)
}
#header .top{
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  border-bottom: .02rem solid #ccc;
}  
#header .top span{
  text-align: center;
  width: 6.5rem;
  font-size: 16px;
  display: inline-block;
}
#header ul {
  text-align: center;
}
#header ul li {
  padding:0 .2rem;
  line-height:1rem;
  display: inline-block;
  box-sizing: border-box;
}
.active{
  border-bottom: .05rem solid #f60;
}
.back{
  margin-left: .2rem;
}
</style>