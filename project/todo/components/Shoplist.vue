<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shopList">
    <a class="toTop" href="#">
    	<img :src="$store.state.testImg[4]">
    </a>
    <header id="top">
    	<a href="#" class="l logo">
    		<img :src="$store.state.testImg[0]">
    	</a>
    	<div class="search l ">
    		<i class="iconfont">&#xe501;</i>
    		<input class="l" type="text" placeholder="搜索你要的商品">
    	</div>
    	<a href="" class="list l">
    		<i class="iconfont">&#xe657;</i>
    	</a>
    	<a href="" class="card l">
    		<i class="iconfont">&#xe62a;</i>	
    	</a>
    </header>
    <div id="slide">
	    <mt-swipe :auto="4000" >
	    	<mt-swipe-item>
				<!-- <img :src="$store.state.testImg[1]"> -->
				<img  style="background:url(http://img23.iblimg.com/market-2/images/content/1985932398.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/1913242316.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img23.iblimg.com/market-2/images/content/531205495.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/1758104514.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/784170849.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img23.iblimg.com/market-2/images/content/2026052681.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/784170849.jpg) no-repeat center">
	    	</mt-swipe-item>

	    </mt-swipe>
    </div>
    <div id="nav">
        <ul class="list" >
          <li>
            <img :src="$store.state.testImg[2]">
            <p>逛百联</p>
          </li>
          <li>
            <img :src="$store.state.testImg[5]">
            <p>第一医药</p>
          </li>
          <li>
            <img :src="$store.state.testImg[6]">
            <p>礼品卡</p>
          </li>
          <li>
            <img :src="$store.state.testImg[7]">
            <p>电器城</p>
          </li>
          <li>
            <img :src="$store.state.testImg[8]">
            <p>特色中国</p>
          </li>
          <li>
            <img :src="$store.state.testImg[9]">
            <p>充值缴费</p>
          </li>
          <li>
            <img :src="$store.state.testImg[10]">
            <p>停车</p>
          </li>
          <li>
            <img :src="$store.state.testImg[11]">
            <p>免费领</p>
          </li>
          <li>
            <img :src="$store.state.testImg[12]">
            <p>领券中心</p>
          </li>
          <li>
            <img :src="$store.state.testImg[13]">
            <p>精选篮筐</p>
          </li>
        </ul>
    </div>
	<div id="news">
		<div class="news_left l">
			<a href="#">
				<img  alt="">
			</a>
		</div>
		<div class="news_right l">
			<span>
				<a href="#">
					<img  alt="" class="tp">
				</a>
			</span>
			<span>
				<a href="#">
					<img  alt="" class="bt">
				</a>
			</span>
		</div>
	</div>
	<div id="buy">
		<div class="top">
			<h1 class="l">天天抢购</h1>
			<i class="iconfont r">&#xe656;</i>
			<a href="" class="r">更多</a>
		</div>
		<div class="scroll">
			<ul>
	          <li v-for="item in $store.state.everyday">
	            <img :src="item.img">
	            <p>{{item.shopname}}</p>
	            <span>￥{{item.price}}</span>
	          </li>
        	</ul>
		</div>
        
	</div>
	<div id="life">
		<div class="top">
			<h1>生活馆</h1>
		</div>
		<div class="life_tp">
			<a href="#" class="l">
				<!-- <img :src="$store.state.testImg[1]"> -->
				<img  alt="" class="one">
			</a>
			<a href="#" class="l">
				<img  alt="" class="two">
			</a>
		</div>
		<div class="life_bt">
			<a href="#" class="l">
				<img  alt="" class="one">
			</a>
			<a href="#" class="l">
				<img  alt="" class="two">
			</a>
			<a href="#" class="l">
				<img  alt="" class="three">
			</a>
		</div>
	</div>
	<div id="special">
		<div class="top">
			<h1>精品馆</h1>
		</div>
		<div class="spe_tp">
			<a href="#" class="l">
				<img class="one" alt="">
			</a>
			<a href="#" class="l">
				<img class="two" alt="">
			</a>
			<a href="#" class="l">
				<img class="three" alt="">
			</a>
		</div>
		<div class="spe_bt">
			<img >
		</div>
	</div>
	<div id="slide2">
    	<mt-swipe :auto="4000" class="flyaway">
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    	<mt-swipe-item>
				<img  style="background:url(http://img22.iblimg.com/market-2/images/content/791602993.jpg) no-repeat center">
	    	</mt-swipe-item>
	    </mt-swipe>
    </div>
	<div id="like">
		<div class="top">
			<h1 class="l">猜你喜欢</h1>
			<a href="#" class="r">登录之后，更加准确</a>
			<i class="iconfont r">&#xe6a3;</i>
		</div>
		<ul>
			<li v-for="item in $store.state.yourlikelist">
				<img :src="item.img">
				<p>{{item.shopname}}</p>
				<span>¥{{item.price}}</span>
			</li>
		</ul>
	</div>
	<footer>
		<div class="login">
			<i class="l iconfont">&#xe6a3;</i>
			<a href="" class="l">登录</a>
			<a href="" class="l">注册</a>
		</div>
		<div class="bottom">
			<ul>
				<li>
					<a href="#">触屏版</a>
				</li>
				<li>
					<a href="#">手机版</a>
				</li>
				<li>
					<a href="#">电脑版</a>
				</li>
			</ul>
			<p>Copyright © 2016 百联 bl.com 版权所有</p>
		</div>
	</footer>
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
			type:"get",
			url:"/exp/homepage/everyday",
			success:function(data){
				console.log(data)
				// 对store的操作需要调用mutations
				that.$store.commit('setEveryday', data)				
			}
		})
		$.ajax({
			type:"get",
			url:"/exp/homepage/yourlike",
			data: {
				prePage: this.$store.state.prePage
			},
			success:function(data){
				console.log(data)
				// 对store的操作需要调用mutations
				that.$store.commit('setYourlikelist', data);		
			}
		})
	},
	components: obj,
	methods: {
		
	}
}
window.onscroll=function(){
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop>200){
		$('.toTop').css({
			display:"block"
		})
	}else{
		$('.toTop').css({
			display:"none"
		})
	}
}
$('.toTop').click(function () {
    var speed=500;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
$('.list li').click(()=>{
	
})
</script>
<style type="text/css" scoped>
.mint-swipe-item {
  background: white;
  text-align: center;
} 
.shopList{
	background: #f4f4f4;
}
.shopList .toTop{
	width: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 1.25rem;
    right: .1rem;
    z-index: 100;
    display: none;
}
.shopList .toTop img{
	width: 1rem;
	height: 1rem;
}
.shopList header{
	height: 0.9rem;
	position: fixed;
	top:0;
	left: 0;
	z-index: 100;
	padding-top: 0.1rem;
	background: #f4f4f4;
	width:100%;
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
.shopList header .search input{
	border: 0;
	width: 3.5rem;
	height: 0.5rem;
	background: #f4f4f4;
	margin-top: -.6rem;
	margin-left: .35rem;
	outline: none;
}
.shopList header .list{
	padding: 0 0.2rem;
    font-size: 0.18rem;
    margin-left: 0.1rem;
    display: inline;
    color: #e6133c;
}
.shopList header .list i,.shopList header .card i{
	font-size: .48rem;
}
.shopList header .card{
	padding: 0 0.2rem;
    font-size: 0.18rem;
    font-family: "iconfont";
    margin-left: 0.1rem;
    display: inline;
    color: #e6133c;
}
.shopList  #slide{
	height: 2.5rem;
	width: 7.5rem;
	margin-top: 1rem;
	overflow: hidden;
}
.shopList #slide img{
	height: 2.5rem;
	width: 7.5rem;
	background-size: cover;
}
.shopList #nav{
	height: 3.32rem;
	width: 7.5rem;
}
.shopList #nav .list li{
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
.shopList #nav .list li img{
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
	background: url(http://img22.iblimg.com/market-2/images/content/1331891831.jpg) no-repeat center;
	background-size: cover;
}
.shopList #news .news_right span{
	display: block;
	width: 4.6rem;
	height: 2.28rem;
	box-sizing: border-box;
	border-bottom: 0.02rem solid #ccc;
}
.shopList #news .news_right span img.tp{
	width: 4.58rem;
	height: 2.26rem;
	background: url(http://img22.iblimg.com/market-2/images/content/730613966.jpg) no-repeat center;
	background-size: cover;
}
.shopList #news .news_right span img.bt{
	width: 4.58rem;
	height: 2.26rem;
	background: url(http://img22.iblimg.com/market-2/images/content/1492018109.jpg) no-repeat center;
	background-size: cover;
}
.shopList #news .news_right span:first-child{
	border:0;
}
.shopList #buy{
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
	display: inline;
	font-size: 0.12rem;
	color: #666;
}
.shopList #buy .top i{
	font-size: .25rem;
	margin-right: .25rem;
}
.shopList #buy .scroll{
	overflow-x:scroll;
	overflow-y:hidden;
	height: 3rem;
	width: 7.5rem;
	box-sizing: border-box;
}
.shopList #buy ul{
	height: 3rem;
	border-top:.02rem solid #ccc;
	border-bottom:.02rem solid #ccc;
}
.shopList #buy ul li{
	display: inline-block;
	width:2rem;
	height: 2.98rem;
	border-right: 0.02rem solid #ccc;
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
.shopList #life .life_tp img.one{
	width: 3.72rem;
	height: 2.52rem;
	background: url(http://img22.iblimg.com/market-2/images/content/730613966.jpg) no-repeat center;
	background-size: cover;
	box-sizing: border-box;
}
.shopList #life .life_tp img.two{
	width: 3.72rem;
	height: 2.52rem;
	background: url(http://img22.iblimg.com/market-2/images/content/1993378220.jpg) no-repeat center;
	background-size: cover;
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
.shopList #life .life_bt img.one{
	width: 2.47rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img23.iblimg.com/market-2/images/content/1784240540.jpg) no-repeat center;
	background-size: cover;
}
.shopList #life .life_bt img.two{
	width: 2.47rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img23.iblimg.com/market-2/images/content/1265473904.jpg) no-repeat center;
	background-size: cover;
}
.shopList #life .life_bt img.three{
	width: 2.47rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img22.iblimg.com/market-2/images/content/181306820.jpg) no-repeat center;
	background-size: cover;
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
	height: 2.44rem;
	box-sizing: border-box;
	border-right: 0.02rem solid #ccc;
}
.shopList #special .spe_tp img.one{
	width: 2.5rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img22.iblimg.com/market-2/images/content/1753109583.jpg) no-repeat center;
	background-size: cover;
}
.shopList #special .spe_tp img.two{
	width: 2.5rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img23.iblimg.com/market-2/images/content/1138844193.jpg) no-repeat center;
	background-size: cover;
}
.shopList #special .spe_tp img.three{
	width: 2.5rem;
	height: 2.44rem;
	box-sizing: border-box;
	background: url(http://img22.iblimg.com/market-2/images/content/829696241.jpg) no-repeat center;
	background-size: cover;
}
.shopList #special .spe_tp  a:last-child{
	border: 0;
}
.shopList #special .spe_bt{
	margin-top: -.1rem;
}
.shopList #special .spe_bt img{
	width: 7.5rem;
	height: 2.54rem;
	border:0;
	background: url(http://img23.iblimg.com/market-2/images/content/1623108742.jpg) no-repeat center;
	background-size: cover;
}
.shopList  #slide2{
	height: 2.3rem;
	width: 7.5rem;
	margin-top: .3rem;
}
.shopList #slide2 img{
	height: 2.3rem;
	width: 7.5rem;
	background-size: cover;
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
.shopList #like .top i.r{
	line-height: .6rem;
	font-size: .28rem;
	color:#e6133c;
}
.shopList #like .top a.r{
	font-size: 0.14rem;
	margin-right: 0.25rem;
	color:#e6133c;
}
.shopList #like ul{
	width: 7.5rem;
	overflow: hidden;
	margin-top: .1rem;
	box-sizing: border-box;
	padding:0 .2rem;
}
.shopList #like ul li{
	width: 3.55rem;
	float: left;
	box-sizing: border-box;
	border-right: .02rem solid #ccc;
	border-bottom: .02rem solid #ccc;
	height: 4.86rem;
}
.shopList #like ul li:nth-child(even){
	border-right:0;
}
.shopList #like ul li img{
	width: 3.5rem;
	height: 3.5rem;
}
.shopList #like ul li p{
	height: .6rem;
	width: 3.5rem;
	padding: .1rem .15rem;
}
.shopList #like ul li span{
	width: 3.55rem;
	height: .3rem;
	display: block;
	color: #fe5b4a;
	padding: .1rem .15rem;
}
.shopList footer{
	width: 7.5rem;
	overflow: hidden;
	margin-bottom: 2rem;
}
.shopList footer .login{
	width: 7.5rem;
	margin-left: 0.5rem;
    height: .6rem;
}
.shopList footer .login a,.shopList footer .login i{
	color: #fe5d4c;
    padding: 0 .15rem;
    font-size: 0.16rem;
    line-height:.6rem;
    display: inline; 
}
.shopList footer .bottom{
	height: 1.5rem;
	width: 7.5rem;
	background: #fff;
}
.shopList footer .bottom ul{
	text-align: center;
	width: 7.5rem;
	box-sizing: border-box;
}
.shopList footer .bottom ul li{
	padding:.1rem .5rem;
	display: inline-block;
}
.shopList footer .bottom ul li a{
	color: #333;
}
.shopList footer .bottom p{
	width: 7.5rem;
	text-align: center;
	color: #ccc;
	font-size: .14rem;
	margin-top: .2rem;
}
</style>
