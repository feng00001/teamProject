<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div class="shopList">
  	<!-- <h1>Shoplist</h1>
  	<input type="text" ref="ipt"/>
  	<button @click="searchByName">Search</button>
  	<button @click="insertVal">Insert</button>
    <button @click="selectAll">查询</button>
    <ul>
    	<li v-for="item in $store.state.shoplist"><a :href="'#/detail/'+item.shopid">{{item.shopname}}</a><span @click="deleteById(item.shopid)">删除</span></li>
    </ul> -->
    <header>
    	<a href="#" class="l logo">
    		<img :src="$store.state.testImg[0]">
    	</a>
    	<div class="search l ">
    		搜索你要的商品
    	</div>
    	<a href="" class="list l">
    		ooo
    	</a>
    	<a href="" class="card l">
    		000
    	</a>
    </header>
    <div class="swiper-container" id="slide">
    	<mt-swipe-item>
	        <ul class="swiper-slide" >
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	        </ul>
      	</mt-swipe-item>
    </div>
     <div id="nav">
        <ul class="swiper-slide" >
          <li>
            <img :src="$store.state.testImg[2]">
            <p>逛百联</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>第一医药</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>礼品卡</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>电器城</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>特色中国</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>充值缴费</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>停车</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>免费领</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>领券中心</p>
          </li>
          <li>
            <img :src="$store.state.testImg[2]">
            <p>精选篮筐</p>
          </li>
        </ul>
    </div>
	<div id="news">
		<div class="news_left l">
			<a href="#">
				<img :src="$store.state.testImg[1]">
			</a>
		</div>
		<div class="news_right l">
			<span>
				<a href="#">
					<img :src="$store.state.testImg[1]">
				</a>
			</span>
			<span>
				<a href="#">
					<img :src="$store.state.testImg[1]">
				</a>
			</span>
		</div>
	</div>
	<div id="buy">
		<div class="top">
			<h1 class="l">天天抢购</h1>
			<a href="" class="r">更多&gt;</a>
		</div>
		<mt-swipe-item>
	        <ul class="swiper-slide" >
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	          <li>
	            <img :src="$store.state.testImg[3]">
	            <p>葡萄干</p>
	            <span>￥29.9</span>
	          </li>
	        </ul>
      	</mt-swipe-item>
	</div>
	<div id="life">
		<div class="top">
			<h1>生活馆</h1>
		</div>
		<div class="life_tp">
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
		</div>
		<div class="life_bt">
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
		</div>
	</div>
	<div id="special">
		<div class="top">
			<h1>精品馆</h1>
		</div>
		<div class="spe_tp">
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
			<a href="#" class="l">
				<img :src="$store.state.testImg[1]">
			</a>
		</div>
		<div class="spe_bt">
			<img :src="$store.state.testImg[1]">
		</div>
	</div>
	<div class="swiper-container" id="slide2">
    	<mt-swipe-item>
	        <ul class="swiper-slide" >
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	          <li>
	            <img :src="$store.state.testImg[1]">
	          </li>
	        </ul>
      	</mt-swipe-item>
    </div>
	<div id="like">
		<div class="top">
			<h1 class="l">猜你喜欢</h1>
			<a href="#" class="r">登录之后，更加准确</a>
		</div>
		<ul>
			<li>
				<img :src="$store.state.testImg[1]">
				<p>玉薇Wellcake 酸奶蔓越莓慕斯蛋糕 8寸</p>
				<span>¥238.00</span>
			</li>
			<li>
				<img :src="$store.state.testImg[1]">
				<p>玉薇Wellcake 酸奶蔓越莓慕斯蛋糕 8寸</p>
				<span>¥238.00</span>
			</li>
			<li>
				<img :src="$store.state.testImg[1]">
				<p>玉薇Wellcake 酸奶蔓越莓慕斯蛋糕 8寸</p>
				<span>¥238.00</span>
			</li>
			<li>
				<img :src="$store.state.testImg[1]">
				<p>玉薇Wellcake 酸奶蔓越莓慕斯蛋糕 8寸</p>
				<span>¥238.00</span>
			</li>
		</ul>
	</div>
	<bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import { Swipe, SwipeItem} from 'mint-ui'
var obj = {};
obj[Swipe.name]= Swipe;
obj[SwipeItem.name]= SwipeItem;
obj.BottomNav= BottomNav
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
				new Swiper(".swiper-container", {
          		pagination: '.swiper-pagination',
          		loop:true
        		});
			}
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
.shopList{
	width: 7.5rem;
	height: 100%;
}
.shopList header{
	height: 0.9rem;
	/*position: fixed;
	top:0;
	left: 0;*/
	padding-top: 0.1rem;
	background: #f4f4f4;
}
.shopList header .logo{
	width: 1.2rem;
    margin-left: 0.3rem;
    float: left;
    display: inline;
}
.shopList header .logo img{
	height: 0.8rem;
	width: 1.1rem;
}
.shopList header .search{
	width: 3.68rem;
	height: 0.7rem;
    font-size: 0.14rem;
    margin-left: 0.2rem;
    display: inline;
    line-height: 0.7rem;
    border-bottom: 1px solid #ddd;
    color: #999;
}
.shopList header .list{
	padding: 0 0.2rem;
    font-size: 0.18rem;
    margin-left: 0.2rem;
    display: inline;
    color: #e6133c;
}
.shopList header .card{
	padding: 0 0.2rem;
    font-size: 0.18rem;
    font-family: "iconfont";
    margin-left: 0.2rem;
    display: inline;
    color: #e6133c;
}
.shopList  #slide{
	height: 2.3rem;
	width: 7.5rem;
	overflow: hidden;
}
.shopList  #slide2 ul{
	width: 7.5rem;
	height: 2.3rem;
	overflow: hidden;
}
.shopList #slide ul li{
	float: left;
}
.shopList #slide img{
	height: 2.3rem;
	width: 7.5rem;
}
.shopList #nav{
	height: 3.32rem;
	width: 7.5rem;
}
.shopList #nav .swiper-slide li{
	float: left;
	width: 1.5rem;
	height: 1.66rem;
	background: white;
	box-sizing: border-box;
	text-align: center;
	padding-top: .2rem;
	font-size: .14rem; 
	color: #666;
}
.shopList #nav .swiper-slide li img{
  	width: 0.9rem;
    height: 0.9rem;
    display: inline-block;
}
.shopList #news{
	width: 7.5rem;
	height: 4.6rem;
	margin-top: 0.3rem;
	box-sizing: border-box;
	border-top:0.02rem solid #ccc ;
	border-bottom:0.02rem solid #ccc ;
}
.shopList #news .news_left{
	box-sizing: border-box;
	width: 2.9rem;
	height: 4.6rem;
	border-right: 0.02rem solid #ccc;
}
.shopList #news .news_left img{
	width: 2.88rem;
	height: 4.55rem;
}
.shopList #news .news_right span{
	display: block;
	width: 4.6rem;
	height: 2.3rem;
	box-sizing: border-box;
	border-bottom: 0.02rem solid #ccc;
}
.shopList #news .news_right span img{
	width: 4.58rem;
	height: 2.25rem;
}
.shopList #news .news_right span:last-child{
	border:0;
}
.shopList #buy{
	overflow: hidden;
	height: 3.6rem;
	margin-top: 0.3rem;
	background: #fff;
	border: 0.02rem solid #ccc;
	box-sizing: border-box;
}
.shopList #buy .top{
	height: 0.6rem;
	color: #666;
	line-height: 0.6rem;
}
.shopList #buy .top h1{
	font-size: 0.14rem;
	font-weight: 100;
	margin-left:0.25rem;
}
.shopList #buy .top a{
	font-size: 0.12rem;
	margin-right: 0.25rem;
	color: #666;
}
.shopList #buy ul{
	height: 6.9rem;
	border-top:.02rem solid #ccc;
}
.shopList #buy ul li{
	float: left;
	box-sizing: border-box;
	border-right: 0.02rem solid #ccc
}
.shopList #buy ul li:last-child{
	border:0;
}
.shopList #buy ul li img{
	width: 2rem;
	height: 2rem;
}
.shopList #buy ul li p{
	width: 2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
}
.shopList #buy ul li span{
	width: 2rem;
	display: block;
	color: #e6133c;
	text-align: center;
}
.shopList #life{
	width: 7.5rem;
	height: 5.56rem;
	margin-top: .3rem;
	background: #fff;
}
.shopList #life .top{
	height: 0.6rem;
	color: #666;
	line-height: 0.6rem;
}
.shopList #life .top h1{
	font-size: 0.14rem;
	font-weight: 100;
	margin-left:0.25rem;
}
.shopList #life .life_tp{
	border-top:.02rem solid #ccc; 
	border-bottom:.02rem solid #ccc; 
	height: 2.52rem;
	box-sizing: border-box;
}
.shopList #life .life_tp a{
	display: inline-block;
	width: 3.74rem;
	height: 2.52rem;
	border-right: 0.02rem solid #ccc;
}
.shopList #life .life_tp img{
	width: 3.72rem;
	height: 2.52rem;
	box-sizing: border-box;
}
.shopList #life .life_tp a:last-child,.shopList #life .life_bt a:last-child{
	border: 0;
}
.shopList #life .life_bt{
	height: 2.44rem;
}
.shopList #life .life_bt a{
	display: inline-block;
	width: 2.5rem;
	height: 2.44rem;
	box-sizing: border-box;
	border-right: 0.02rem solid #ccc;
}
.shopList #life .life_bt img{
	width: 2.47rem;
	height: 2.44rem;
	box-sizing: border-box;
}
.shopList #special{
	width: 7.5rem;
	height: 5.56rem;
	margin-top: .3rem;
	background: #fff;
}
.shopList #special .top{
	height: 0.6rem;
	color: #666;
	line-height: 0.6rem;
}
.shopList #special .top h1{
	font-size: 0.14rem;
	font-weight: 100;
	margin-left:0.25rem;
}
.shopList #special .spe_tp{
	border-top:.02rem solid #ccc; 
	border-bottom:.02rem solid #ccc; 
	height: 2.52rem;
	box-sizing: border-box;
}
.shopList #special .spe_tp a{
	display: inline-block;
	width: 2.5rem;
	height: 2.5rem;
	box-sizing: border-box;
	border-right: 0.02rem solid #ccc;
}
.shopList #special .spe_tp img{
	width: 2.5rem;
	height: 2.44rem;
	box-sizing: border-box;
	border-right: 0.02rem solid #ccc;
}
.shopList #special .spe_tp  a:last-child{
	border: 0;
}
.shopList #special .spe_bt img{
	width: 7.5rem;
	height: 2.44rem;
}
.shopList  #slide2{
	height: 2.3rem;
	width: 7.5rem;
	margin-top: .3rem;
}
.shopList  #slide2 ul{
	width: 7.5rem;
	height: 2.3rem;
	overflow: hidden;
}
.shopList  #slide2 ul li{
	float: left;
}
.shopList #slide2 img{
	height: 2.3rem;
	width: 7.5rem;
}
.shopList #like{
	width: 7.5rem;
	background: #fff;
	margin-top: .3rem;
}
.shopList #like .top{
	width: 7.5rem;
	height: 0.6rem;
	color: #666;
	border-bottom: .02rem solid #ccc;
	line-height: 0.6rem;
}
.shopList #like .top h1{
	font-size: 0.14rem;
	font-weight: 100;
	margin-left:0.25rem;
}
.shopList #like .top .r{
	font-size: 0.12rem;
	margin-right: 0.25rem;
	color:#e6133c;
}
.shopList #like ul{
	width: 7.5rem;
	overflow: hidden;
	margin-top: .1rem;
}
.shopList #like ul li{
	width: 3.57rem;
	float: left;
	box-sizing: border-box;
	border-right: .02rem solid #ccc;
	border-bottom: .02rem solid #ccc;
	height: 4.86rem;
}
.shopList #like ul li:nth-child(even){
	border:0;
}
.shopList #like ul li img{
	width: 3.4rem;
	height: 4.84rem;
}
</style>
