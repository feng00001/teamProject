<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shopBuy">
	<header>
		<router-link to="/shopList"  active-class="special">
			<i class="iconfont l">&#x3484;</i>
		</router-link>
		<h1 class="l">北大荒 秋田小町 第二件1折</h1>
		<!-- <i class="iconfont r dot">&#xe660;</i> -->
	</header>
	<search-nav></search-nav>
	<nav>
		<img :src="$store.state.testImg[1]">
	</nav>
	<section>
		<ul>
			<li>
				<div class="pic">
    				<img :src="$store.state.testImg[1]">
				</div>
				<div class="con">
					<p>潘娜托尼 男童秋款风衣 休闲冲锋衣 JC-Q157</p>
					<p>每人限购200件</p>
					<span>￥258.00</span>
					<button>立即抢购</button>
				</div>
			</li>
			<li>
				<div class="pic">
    				<img :src="$store.state.testImg[1]">
				</div>
				<div class="con">
					<p class="top">潘娜托尼 男童秋款风衣 休闲冲锋衣 JC-Q157</p>
					<p class="bt">每人限购200件</p>
					<span>￥258.00</span>
					<button>立即抢购</button>
				</div>
			</li>
			<li>
				<div class="pic">
    				<img :src="$store.state.testImg[1]">
				</div>
				<div class="con">
					<p>潘娜托尼 男童秋款风衣 休闲冲锋衣 JC-Q157</p>
					<p>每人限购200件</p>
					<span>￥258.00</span>
					<button>立即抢购</button>
				</div>
			</li>
			<li>
				<div class="pic">
    				<img :src="$store.state.testImg[1]">
				</div>
				<div class="con">
					<p class="top">潘娜托尼 男童秋款风衣 休闲冲锋衣 JC-Q157</p>
					<p class="bt">每人限购200件</p>
					<span>￥258.00</span>
					<button>立即抢购</button>
				</div>
			</li>
		</ul>
	</section>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import SearchNav from './SearchNav.vue'
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import { Swipe, SwipeItem} from 'mint-ui'
var obj = {};
obj[Swipe.name]= Swipe;
obj[SwipeItem.name]= SwipeItem;
obj.BottomNav= BottomNav
obj.SearchNav= SearchNav
export default {
	// 页面加载完成后调用，
	mounted (){
		var that = this;
		$.ajax({
			method:"get",
			url:"/exp",
			success:function(data){
				// 对store的操作需要调用mutations
				that.$store.commit('setShoplist', data)				
			}
		})
		$(".dot").click(function(){
  		$(".list").toggle();
		});
	},
	components: obj,
	methods: {
		searchByName () {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/search",
				data: {
					shopname: that.$refs.ipt.value
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		insertVal () {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/insertVal",
				data: {
					shopname: that.$refs.ipt.value
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		deleteById (id) {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/deleteById",
				data: {
					shopid: id
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		// 不需要传递参数的时候可以使用结构赋值，否则没必要用
		...mapActions([
		  
		])
	}
}
$(".dot").click(function(){
  	$(".list").toggle();
});

</script>
<style type="text/css" scoped>
.mint-swipe-item {
  background: white;
  text-align: center;
} 
.shopBuy{
	background: #f4f4f4;
}
 header{
 	width: 7.5rem;
	height: 0.9rem;
}
header i{
	width: .6rem;
	line-height: .9rem;
}
header i.l{
	margin-left:.2rem;
}
header h1{
	width: 5.85rem;
	text-align: center;
	line-height: .9rem;
	font-weight: 1;
	font-size: .24rem;
}
nav{
	height: 3.6rem;
	width: 7.5rem;
	box-sizing: border-box;
	padding:0 .2rem;
}
nav img{
	height: 3.5rem;
	width: 7.1rem;
}
section{
	overflow: hidden;
	width: 7.5rem;
	box-sizing: border-box;
	padding: .2rem;
	margin-bottom: 2rem;
}
section ul{
	width: 100%;
	overflow: hidden;	
}
section ul li{
	float: left;
	width: 3.4rem;
	height: 5.72rem;
	padding:.1rem;
	background: #fff;
	margin-right: .2rem;
	margin-bottom: .2rem;
	border: .02rem solid #ccc;
	box-sizing: border-box;
}
section ul li:nth-child(even){
	margin-right: 0;
}
section ul li .pic img{
	width: 3.2rem;
	height: 3.4rem;
	border-bottom: .02rem solid #ccc;
}
section ul li .con{
	width: 3.2rem;
	overflow: hidden;
}
section ul li .con p{
	width: 3.2rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	line-height: .4rem;
	font-size: .16rem;
}
section ul li .con span{
	color: #8b001b;
	line-height: .5rem;
}
section ul li .con button{
	width: 3.2rem;
	display: block;
    height: .46rem;
    line-height: .46rem;
    color: #fff;
    border: 0;
    outline: none;
    text-align: center;
    background: #ff5d7d;
}
</style>
