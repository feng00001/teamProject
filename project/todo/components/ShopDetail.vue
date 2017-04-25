<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shop-detail">
    <div id="header">
      <ul @touchend='switchover($event)'>
        <router-link to="/slotlist" class="l" tag="li"><i class="iconfont">&#x3484;</i></router-link>
        <li class="l store">商品</li>
        <li class="l detail">详情</li>
        <li class="l parameter">参数</li>
        <li class="l commence">评论</li>
        <router-link to="/cart" class="l" tag="li">
          <i class="iconfont" style="position: relative;">&#xe62a;
            <span ref="count" class="cart-count">0</span>
          </i>
        </router-link>
        <search-nav></search-nav>
      </ul>
    </div>
    <detail-report v-if="$store.state.isPaly==='store'"></detail-report>
    <particular v-else-if="$store.state.isPaly==='detail'"></particular>
    <commence v-else-if="$store.state.isPaly==='commence'"></commence>
    <parameter v-else="$store.state.isPaly==='parameter'"></parameter>
  	<div id="footer">
  		<ul>
  			<router-link to="/mine/logon" class="l" tag="li">立即购买</router-link>
  			<li class="l" v-on:touchend="fly2cart">加入购物车</li>
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
import SearchNav from './SearchNav.vue'
import util from '../../../util/common.js'

export default {
	// 页面加载完成后调用，
	mounted (){
		
	},
	methods: {
    switchover(e) {
      console.log(e.target.className)
      if(e.target.className === 'l commence'){
        this.$store.commit('setIsPlay', 'commence')
      }else if(e.target.className === 'l detail'){
        this.$store.commit('setIsPlay', 'detail')
      }else if(e.target.className === 'l parameter'){
        this.$store.commit('setIsPlay', 'parameter')
      }else{
        this.$store.commit('setIsPlay', 'store')
      }   
    },
    fly2cart(e) {
      this.$refs.count.innerText++
      var str=location.href
      var str1 = str.match(/detail.*/)
      var shopid = str1[0].match(/\d.*/)[0]
      var userid = util.getCookie("user")
      $.ajax({
        type:"get",
        url:"/exp/cartcount/ins",
        data: {
          shopid: shopid,
          userid: userid
        },
        success:function(data){
          console.log(data)
        }
      })
      
    },
		...mapActions([
		  
		])
	},
	components: {
    DetailReport,
    Parameter,
    Commence,
    Particular,
    SearchNav
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
#header ul .cart-count{
    position: absolute;
    top: -.2rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    background: red;
    border-radius: 50%;
    color:#fff;
    font-size:12px;
}
</style>
