<style type="text/css" src="mint-ui/lib/style.css"></style>

<template>
  <div class="shop-detail">
  	<div id="header">
  		<ul>
  			<router-link to="/classify" class="l" tag="li"><i class="iconfont">&#x3484;</i></router-link>
  			<router-link to="/classify" class="l" tag="li">商品</router-link>
  			<router-link to="/classify" class="l" tag="li">详情</router-link>
  			<router-link to="/classify" class="l" tag="li">参数</router-link>
  			<router-link to="/classify" class="l" tag="li">评论</router-link>
  			<router-link to="/classify" class="l" tag="li"><i class="iconfont">&#xe62a;</i></router-link>
  			<router-link to="/classify" class="r" tag="li"><i class="iconfont">&#xe660;</i></router-link>
  		</ul>
  	</div>
  	<div id="main">
  		<div class="banner">
  			<mt-swipe :auto="4000" >
		    	<mt-swipe-item>
		  			<img :src="$store.state.classifyImg[2]">
		  		</mt-swipe-item>
		  		<mt-swipe-item>
		  			<img :src="$store.state.classifyImg[2]">
		  		</mt-swipe-item>
		  		<mt-swipe-item>
		  			<img :src="$store.state.classifyImg[2]">
		  		</mt-swipe-item>
		  		<mt-swipe-item>
		  			<img :src="$store.state.classifyImg[2]">
		  		</mt-swipe-item>
		  	</mt-swipe>
  		</div>
  		<div class="limit">
  			<span class="l"><span>|</span>抢购（限购：2件）</span>
  			<span class="r">剩余:12天04:03:00</span>
  		</div>
  		<div class="content">
  			<div class="product-name">
  				<h1>肌肤之钥 CPB 光透妆前乳 SPF24 PA++ 30ml 光凝 妆前霜 遮瑕 控油 保湿补水 隔离霜 防晒</h1>
  				<p class="specia">因特殊原因，本商品于订单交易成功日起5-7个工作日发货，介意者慎拍！由此带来的不便敬请谅解。</p>
  				<p class="price">￥<span>577.0</span></p>
  				<p class="sale">促销</p>
  				<p class="server">
  					<span class="l">服务</span>
  					<span class="l">
  						<p>由联营商发货,并由百联提供售后服务</p>
  						<p>7天无理由退换货</p>
  					</span>
  				</p>
  			</div>
  		</div>
  	</div>
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
import { Swipe, SwipeItem} from 'mint-ui'
var obj = {};
obj[Swipe.name]= Swipe;
obj[SwipeItem.name]= SwipeItem;

export default {
	// 页面加载完成后调用，
	mounted (){
		
	},
	methods: {
		...mapActions([
		  
		])
	},
	components: obj
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
#main{
	flex:1;
	margin-top: 1rem;
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
#main .banner{
	height:8rem;
}
#main .banner img{
	width:7.5rem;
	height:8rem;
}
#main .limit{
    line-height: .7rem;
    height: .7rem;
    padding: 0rem .2rem;
}
#main .limit span.l span{
	color:#f60;
	font-weight: bold;
	padding-right: .1rem
}
#main .content .product-name{
	background:#fff;
}
#main .content .product-name h1{
    margin: .24rem .2rem .08rem;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: .38rem;
    max-height: 1.12rem;
    text-overflow: ellipsis;
    font-weight: 500
}
#main .content .product-name h1::before{
	content: "联营";
	display:inline-block;
	border: 1px solid #E6133C;
    font-size: 12px;
    border-radius: .06rem;
    padding: 0 .1rem;
    line-height: .32rem;
    color: #E6133C;
    margin-right: .14rem;
}
#main .content .product-name .specia{
	padding: 0 .2rem;
    color: #999;
    line-height: .32rem;
    font-size: 12px;
}
#main .content .product-name .price{
	margin:0 .2rem;
	padding: .2rem 0;
    line-height: 1;
    color: #E6133C;
    border-bottom: 1px solid #e7e7e7;
    overflow: hidden;
    font-size: 22px;
    font-weight: bold;
}
#main .content .product-name .price::after{
	content: "闪";
	display:inline-block;
	padding: .04rem .08rem;
    background: #f0ae00;
    color: #FFFFFF;
    font-size: 12px;
    border-radius: .08rem;
    margin-left: .16rem;
}
#main .content .product-name .sale{
	margin:0 .2rem;
	padding: .2rem 0;
    border-bottom: 1px solid #E7E7E7;
    overflow: hidden;
}
#main .content .product-name .server{
	margin:0 .2rem;
	padding: .2rem 0;
    line-height: 1;
    overflow: hidden;
}
#main .content .product-name .server span:nth-of-type(1){
	margin-right:.3rem;
}
#main .content .product-name .server span:nth-of-type(2) p:nth-of-type(2){
	font-size: 12px;
	margin-top: .2rem;
	padding-left:.4rem;
	height:.3rem;
	line-height:.3rem;
	background:url('http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/serve-logo.png') no-repeat left ;
	background-size: .3rem .3rem
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