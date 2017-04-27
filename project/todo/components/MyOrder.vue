<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="order-detail">
    <div id="header">
      <div class="top">
        <router-link to="/classify" class="l" tag="a"><i class="iconfont">&#x3484;</i></router-link>
        <span>订单管理</span>
      </div>
      <ul @touchend='switchover($event)'>
        <li class="l all active">全部</li>
        <li class="l payment">代付款</li>
        <li class="l send">代发货</li>
        <li class="l receive">待收货</li>
        <li class="l evaluate">待评价</li>
        
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
        this.$store.commit('setIsPlay', 'all')
      }else if(e.target.className.indexOf('payment') !== -1){
        this.$store.commit('setIsPlay', 'payment')
      }else if(e.target.className.indexOf('send') !== -1){
        this.$store.commit('setIsPlay', 'send')
      }else if(e.target.className.indexOf('receive') !== -1){
        this.$store.commit('setIsPlay', 'receive')
      }else{
        this.$store.commit('setIsPlay', 'commence')
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
  width: 7.5rem;
  line-height: 1rem;
  border-bottom: .02rem solid #ccc;
}  
#header .top span{
  text-align: center;
  width: 7rem;
  font-size: 16px;
  display: inline-block;
}
#header ul li {
  text-align: center;
  padding:0 .3rem;
  line-height:1rem;
  box-sizing: border-box;
}
.active{
  border-bottom: .05rem solid #f60;
}
</style>