<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shopBuy">
	<header>
		<router-link to="/shopList"  active-class="special">
			<i class="iconfont l">&#x3484;</i>
		</router-link>
		<h1 class="l">雷朋Rayban</h1>
		<!-- <i class="iconfont r dot">&#xe660;</i> -->
	</header>
	<!-- <div class="list">
		<ul>
			<li>
				<router-link to="/shopList" tag="li" active-class="special">
				<i class="iconfont">&#xe632;</i>
				<b>首页</b>
				</router-link>
			</li>
			<li>
				<router-link to="/shopList" tag="li" active-class="special">
				<i class="iconfont">&#xe501;</i>
				<b>搜索</b>
				</router-link>
			</li>
			<li>
				<router-link to="/shopList" tag="li" active-class="special">
				<i class="iconfont">&#xe657;</i>
				<b>分类</b>				
				</router-link>
			</li>
			<li>
				<router-link to="/shopList" tag="li" active-class="special">
				<i class="iconfont">&#xe62a;</i>
				<b>购物车</b>
				</router-link>
			</li>
			<li>
				<router-link to="/shopList" tag="li" active-class="special">
				<i class="iconfont">&#xe6a3;</i>
				<b>我的</b>
				</router-link>
			</li>
		</ul>
	</div> -->
	<search-nav></search-nav>
	<nav>
		<ul class="nav_list">
			<li class="active">默认</li>
			<li>价格<i class="iconfont">&#xe647;</i></li>
			<li>仅显示有货</li>
			<li id="special">筛选<i class="iconfont">&#xe610;</i>
				<ul class="li_list active" style="display:none">
					<li>全部品牌</li>
					<li>雷朋</li>
					<li>
						<input type="button" value="清空选项" />
						<input type="button" value="确认" class="focus" />
						<!-- <button class="focus">确认</button> -->
						<p class="time"></p>
					</li>
				</ul>
			</li>
		</ul>
		<div class="pic">
			<img :src="$store.state.testImg[1]">
			<span class="time">11天</span>
			<button>领优惠券，享更多优惠</button>
		</div>
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
		
		
		$('#special').click(function(){
			$('.li_list').toggle();
		})
		$('.nav_list li').click(function(){
			$('.active').removeClass('active');
			$(this).addClass('active');
		})
		$('.li_list li input').click(function(){
			$('.focus').removeClass('focus');
			$(this).addClass('focus')
		})
		$('.pic span .time').html(function(){
			var data=new Date();
			function format(value){
				if(value<0){
					return value='0'+value
				}
			}
			return format(data.setDate(getDate()+3))+'天'+format(data.setDate(getHours()))+'小时'+format(data.setData(getMinuts()))+'分钟' +data.getSeconds()+'秒' 
		})
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

</script>
<style type="text/css" scoped>
.mint-swipe-item {
  background: white;
  text-align: center;
}
.active{
	color: #fe5b4a;
	border-bottom: .05rem solid #fe5b4a;
} 
.focus{
	color: #fff;
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
/*.list{
	display: none;
	height: 1rem;
	border-bottom: 0.1rem solid #fe8477;
    background-color: rgba(0,0,0,.8);
    transition: all .2s ease;
    overflow: hidden;
    position: absolute;
    width:7.5rem;
    top: .9rem;
    left: 0px;
    z-index: 11;
}
.list ul li{
	width:20%;
	height: 1.2rem;
	line-height: .45rem;
	float: left;
	color: #fff;
	padding-top:.1rem;
	box-sizing: border-box;
	text-align: center;
}
.list ul li i{
	font-size: .38rem;
}
.list ul li b{
	display: block;
}*/
nav{
	height: 5.5rem;
	width: 7.5rem;
	border-top:.02rem;
	box-sizing: border-box;
}
nav .nav_list{
	width: 7.5rem;
	height: 1rem;
	background: #fafafa;
}
nav .nav_list li{
	float: left;
	width:25%;
	box-sizing: border-box;
	height: 1rem;
	text-align: center;
	line-height: 1rem;
}
nav .nav_list li .li_list{
	position: absolute;
	width: 7.5rem;
	height: 2.8rem;
	left: 0;
	top:2.2rem;
	background: #fff;
	z-index: 100 !important;
}
nav .nav_list li .li_list li{
	clear: both;
	height: .9rem;
	width: 7.5rem;
	line-height: .9rem;
	text-align: left;
	text-indent: .3rem;
	border-bottom: 1px solid #ccc;
}
nav .nav_list li .li_list li:last-child{
	text-align: center;
	border:0;
}
nav .nav_list li .li_list li input{
	outline: none;
	border:.02rem solid #ccc;
	background: #fff;
	border-radius: .1rem;
	width: 2.5rem;
	height: .7rem;
	margin:.1rem;
}
nav .pic{
	height: 5rem;
}
nav .pic img{
	height: 2.5rem;
}
nav .pic span{
	display: block;
	text-align: center;
	line-height: .5rem;
	background: #fff;
	height: .7rem;
}
nav .pic button{
	outline: none;
	border: 0;
	width: 7rem;
	background: #fff;
	border-radius: .1rem;
	border: .02rem solid #ccc;
	color: #f60;
	font-size: .30rem;
	margin-top: .2rem;
	margin-left: .25rem;
	height: .8rem;
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
