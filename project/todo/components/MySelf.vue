<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
<div class="container">
	<div class="head">
		<div class="setting">
			<a href="#/setting">设置</a>
		</div>
		<div class="userinfo">
			<div class="userphone">
				<img :src="$store.state.userphone"/>
			</div>
			<div class="usertitle">
				<p>{{$store.state.userinfo.username}}</p>
				<span>百联通 普通会员</span>
			</div>
		</div>
		<div class="store">
			<div class="collect">
				<a href="javascript:;">
					<p>0</p>
					<p>收藏的商品</p>
				</a>
			</div>
			<div class="collect">
				<a href="javascript:;">
					<p>0</p>
					<p>收藏的门店</p>
				</a>
			</div>
		</div>
	</div>
	<div class="mymenu">
		<div class="title">
			<p>我的订单</p>
		</div>
		<div class="detaillist">
			<ul>
				<router-link tag="li" to="myorder">
					<i class="iconfont">&#xe604;</i>
					<span>待付款</span>
				</router-link>
				<router-link tag="li" to="myorder">
					<i class="iconfont">&#xe66c;</i>
					<span>待发货</span>
				</router-link>
				<router-link tag="li" to="myorder">
					<i class="iconfont">&#xe7a1;</i>
					<span>待收货</span>
				</router-link>
				<router-link tag="li" to="myorder">
					<i class="iconfont">&#xe646;</i>
					<span>待评价</span>
				</router-link>
				<router-link tag="li" to="myorder">
					<i class="iconfont">&#xe606;</i>
					<span>退换\售后</span>
				</router-link>
			</ul>
		</div>
	</div>
	<div class="mymenu">
		<div class="title">
			<p>我的订单</p>
		</div>
		<div class="detailblock">
			<ul>
				<li>
					<i>0.00</i>
					<p>余额</p>
				</li>
				<li>
					<i>0</i>
					<p>积分</p>
				</li>
				<li>
					<i>0</i>
					<p>优惠卷</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="mymenu">
		<div class="title">
			<p>我的会员卡</p>
		</div>
	</div>
	<div class="mymenu">
		<div class="title">
			<p>我的特权</p>
		</div>
		<div class="detailpower">
			<ul>
				<li>
					<i></i>
					<p>积分通享</p>
				</li>
				<li>
					<i></i>
					<p>免费停车</p>
				</li>
				<li>
					<i></i>
					<p>雨无忧</p>
				</li>
				<li>
					<i></i>
					<p>生日礼遇</p>
				</li>
				<li>
					<i></i>
					<p>会员日</p>
				</li>
				<li>
					<i></i>
					<p>新品体验</p>
				</li>
				<li>
					<i></i>
					<p>专家预约</p>
				</li>
				<li>
					<i></i>
					<p>积分互换</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="mymenu">
		<div class="title">
			<p>我的礼物</p>
		</div>
	</div>
	<div class="mybg"></div>
	<div class="myset">
		<ul>
			<li><p>我的会员卡</p></li>
			<li><p>客服中心</p></li>
			<li><p>i百联中心</p></li>
		</ul>
	</div>
	<bottom-nav></bottom-nav>
</div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import BottomNav from './BottomNav.vue'

export default {
	mounted(){
		var that = this;
		$(".head").css({
			background: "url('assets/imgs/myselfbg.png') no-repeat",
			backgroundSize: "cover"
		})
		$(".mybg").css({
			background: "url('assets/imgs/mybg.jpg') no-repeat",
			backgroundSize: "cover"
		})
		$(".mymenu .detailpower ul li i").each(function(index){
			$(this).css({
				background: "url('assets/imgs/myselficon/icon"+index+".png') no-repeat",
				backgroundSize: "cover"
			})
		})
		$.ajax({
			url: "/exp/mine/userinit",
			success: function(data) {
				that.$store.commit('setUserinfo',data[0])
			}
		})
	},
	methods: {

	},
	components: {
		BottomNav
	}
}
</script>
<style scoped>
	.container {
		width: 7.5rem;
	}
	.container .head {
		width: 7.5rem;
		height: 4rem;
		position: relative;
	}
	.container .head .setting {
		width: 7.5rem;
		height: 1rem;
		line-height: 1rem;

	}
	.container .head .setting a {
		padding-left: 0.3rem;
		color: #fff;
	}
	.container .head .userinfo {
		padding: 0 0.3rem;
		overflow: hidden;
	}
	.container .head .userinfo .userphone {
		width: 1.5rem;
		border-radius: 50%;
		overflow: hidden;
		border: 0.05rem solid #891533;
		float: left;
	}
	.container .head .userinfo .userphone img {
		width: 1.5rem;
		height: 1.5rem;
		display: block;
	}
	.container .head .userinfo .usertitle {
		float: left;
		color: #fff;
		margin-left: 0.4rem;
		padding-top: 0.2rem;
	}
	.container .head .userinfo .usertitle p {
		font-size: 0.35rem;
	}
	.container .head .store {
		position: absolute;
		bottom: 0;
		width: 7.5rem;
		background: black;
		opacity: 0.45;
		overflow: hidden;
	}
	.container .head .store .collect {
		width: 3.75rem;
		padding: 0.1rem 0;
		text-align: center;
		float: left;
	}
	.container .head .store .collect p {
		font-size: 0.2rem;
		color: #fff;
	}
	.container .mymenu {
		padding: 0 0.3rem;
		background: #fff;
		margin-bottom: 0.2rem;
	}
	.container .mymenu .title {
		height: 0.9rem;
		width: 6.9rem;
		line-height: 0.9rem;
	}
	.container .mymenu .detaillist {
		height: 1.4rem;
		width: 6.9rem;
		border-top: 0.03rem solid #dedede;
		padding-bottom: 0.3rem;
	}
	.container .mymenu .detaillist ul {
		overflow: hidden;
	}
	.container .mymenu .detaillist ul li {
		float: left;
		width: 20%;
		text-align: center;
	}
	.container .mymenu .detaillist ul li i {
		display: block;
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		font-size: 0.6rem;
	}
	.container .mymenu .detailblock {
		height: 1.4rem;
		width: 6.9rem;
		border-top: 0.03rem solid #dedede;
		padding-bottom: 0.3rem;
	}
	.container .mymenu .detailblock ul {
		overflow: hidden;
	}
	.container .mymenu .detailblock ul li {
		float: left;
		width: 25%;
		text-align: center;
		padding-top: 0.45rem;
	}
	.container .mymenu .detailblock ul li p {
		font-size: 0.2rem;
		color: #999999;
	}
	.container .mymenu .detailpower {
		height: 1.4rem;
		width: 6.9rem;
		border-top: 0.03rem solid #dedede;
		padding-bottom: 0.3rem;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.container .mymenu .detailpower ul {
		width: 12rem;
		overflow: scroll;
	}
	.container .mymenu .detailpower ul li {
		float: left;
		width: 1.5rem;
		text-align: center;
		padding-top: 0.45rem;
	}
	.container .mymenu .detailpower ul li i {
		width: 0.8rem;
		height: 0.7rem;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	.container .mybg {
		height: 1.5rem;
	}
	.container .myset {
		padding: 0 0.3rem;
		background: #fff;
		border-bottom: 0.03rem solid #eeeeee;
	}
	.container .myset ul {

	}
	.container .myset ul li {
		height: 0.9rem;
		width: 6.9rem;
		line-height: 0.9rem;
		border-top: 0.03rem solid #eeeeee;
	}
	
</style>
