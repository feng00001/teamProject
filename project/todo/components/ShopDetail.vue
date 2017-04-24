<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shop-detail">
    <div id="header">
      <ul @touchend='switchover($event)'>
        <router-link to="/classify" class="l" tag="li"><i class="iconfont">&#x3484;</i></router-link>
        <li class="l store">商品</li>
        <li class="l detail">详情</li>
        <li class="l parameter">参数</li>
        <li class="l commence">评论</li>
        <router-link to="/classify" class="l" tag="li"><i class="iconfont">&#xe62a;</i></router-link>
        <router-link to="/classify" class="r" tag="li"><i class="iconfont">&#xe660;</i></router-link>
      </ul>
    </div>
    <detail-report v-if="$store.state.isPaly==='store'"></detail-report>
    <particular v-else-if="$store.state.isPaly==='detail'"></particular>
    <commence v-else-if="$store.state.isPaly==='commence'"></commence>
    <parameter v-else="$store.state.isPaly==='parameter'"></parameter>
  	<div id="footer">
  		<ul>
  			<router-link to="/mine/logon" class="l" tag="li">立即购买</router-link>
  			<router-link to="/cart" class="l" tag="li">加入购物车</router-link>
  		</ul>
  	</div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import DetailReport from './DetailReport.vue'
import Parameter from './Parameter.vue'
import Commence from './Commence.vue'
import Particular from './Particular.vue'

export default {
	// 页面加载完成后调用，
	mounted (){
		
	},
	methods: {
    switchover(e) {
      console.log(e.target.className)
      if(e.target.className === 'l store'){
        this.$store.commit('setIsPlay', 'store')
      }else if(e.target.className === 'l detail'){
        this.$store.commit('setIsPlay', 'detail')
      }else if(e.target.className === 'l parameter'){
        this.$store.commit('setIsPlay', 'parameter')
      }else{
        this.$store.commit('setIsPlay', 'commence')
      }
      
    },
		...mapActions([
		  
		])
	},
	components: {
    DetailReport,
    Parameter,
    Commence,
    Particular
  }
}
</script>

<style scoped>
.shop-detail {
	display: flex;
	flex-direction:column;
}
#header{
    height: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background:rgba(255,255,255,0.6)
}

#footer{
  height:1rem;
  position: fixed;
  bottom:0;
  width: 100%;
}
#header ul li {
  text-align: center;
  padding:0 .3rem;
  line-height:1rem;
}
#footer ul{
	display: flex;
	flex-direction: row;
}
#footer ul li{
	flex:50%;
	height:1rem;
	line-height: 1rem;
	color:#fff;
	text-align: center;
}
#footer ul li:nth-of-type(1){
	background:#faa62d;
}
#footer ul li:nth-of-type(2){
	background:#e6133c;
}
</style>