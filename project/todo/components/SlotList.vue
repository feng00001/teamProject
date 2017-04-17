<template>
	<div class="slotlist">
		<div id="header">
			<div class="first">
				<router-link to="/classify" class="l">&gt;</router-link>
				<div class="search l">
					<i>🔍</i>
					<input type="text" placeholder="查找你喜欢的商品"/>
					<img :src="$store.state.slotListImg">
				</div>
	        	<i class="r">🐩</i>
			</div>
			
        	<ul class="nav">
        		<li class="cur l">综合<span @touchend="isSure" :class="{angleTop:$store.state.isTop,angleDown:$store.state.isDown}"></span>
        			<ul class="one" @touchend="isChecked($event)" :style="{display:$store.state.isSure}">
        				<li class="curTwo">综合排序<span class="r" id="sure">v</span></li>
        				<li>新品优先</li>
        				<li>评价数从高到低</li>
        			</ul>
        		</li>
        		<li class="l" @touchend="orderByVolume">销量</li>
        		<li class="l">价格</li>
        		<li class="l">筛选</li>
        	</ul>

        	<ul class="classify">
        		<li>自营</li>
        		<li>品牌</li>
        		<li>自提</li>
        		<li>促销</li>
        	</ul>
		</div>
		<div id="content">
			<dl v-for="item in $store.state.slotList">
				<dt>
					<img :src="$store.state.classifyImg[0]">
				</dt>
				<dd>
					<p>{{item.shopname}}</p>
					<h2>¥<span ref="price">{{item.price}}</span></h2>
					<ul>
						<li><span ref="volume">{{item.pinglun}}</span>条评论</li>
						<li>好评<span>{{item.pinglv}}</span></li>
					</ul>
				</dd>
			</dl>
			
			<div id="master" :style="{display:$store.state.isSure}"></div>
		</div>
		
	</div>	
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'

export default {

	mounted (){
		// console.log("需要排序" + that.$store.state.slotList.shopname)
		var that = this;
		$.ajax({
			type:"get",
			url:"/todo/orderBy.json",
			success:function(data){
				that.$store.commit('setSlotList', data)
				// console.log(data)
			}
		})
	},
	methods: {
		isChecked (e) {
			$('#sure').remove()
			let span = $('<span class="r" id="sure">v</span>')
			$(e.target).append(span)
			$('.curTwo').removeClass('curTwo')
			$(e.target).addClass('curTwo')
		},
		isSure(e) {
			this.$store.commit('setIsSure')
			// this.$store.state.isTop != this.$store.state.isTop
		},
		orderByVolume() {
			// console.log(this.$refs.volume)
			let arr=[]
			this.$refs.volume.map((el,index)=>{
				
				arr.push(parseInt(el.innerHTML))

			})
			console.log(arr)
			function compare(item1,item2){
				if(item1<item2){
					return 1
				}else if(item1>item2){
					return -1
				}else{
					return 0
				}
			}
			arr.sort(compare)
			console.log(arr)
		}
		
	}
}
</script>
<style scoped>
	.slotlist{
		background: #fff;
		overflow: hidden;
	}
	#header{
		position: fixed;
		background: #fff;
		z-index: 2
	}
	#master{
		position: fixed;
	    margin-top: 3.5rem;
	    background: rgba(0,0,0,0.6);
	    height: 100%;
	    width: 100%;
	    top: 0;
	}
	#header  .first{
		border-bottom: 0.005rem solid #eee;
		overflow: hidden;
		padding:0.2rem .3rem;
	}
	#header a{
		margin-top: .14rem
	}
	#header .search{
		position: relative;
		margin-left:.2rem;
	}
	#header .search i{
		position: absolute;
		left:.12rem;
		top:.18rem;
	}
	#header .search img{
		position: absolute;
		right:0.12rem;
		top:0.18rem;
		width:.3rem;
		height:.3rem;
	}
	#header .search input{
		width:5.5rem;
		height:.7rem;
		padding-left:.5rem;
		background: #f5f5f5;
		border:0;
		border-radius:.1rem;
	}
	#header .r{
		margin-top: .15rem
	}
	#header .nav{
		height: 1rem;
	}
	#header .nav li.l{
		width:25%;
		text-align: center;
		line-height:1rem;
	}
	#header .nav li.l:nth-of-type(1){
		position: relative;
	}
	#header .nav li.l:nth-of-type(1) span.angleDown{
		display: inline-block;
		border-top: .13rem solid red;
		border-left: .13rem solid #fff;
		border-right: .13rem solid #fff;
		position: absolute;
		right:.3rem;
		top:.45rem;
	}
	#header .nav li.l:nth-of-type(1) span.angleTop{
		display: inline-block;
		border-bottom: .13rem solid red;
		border-left: .13rem solid #fff;
		border-right: .13rem solid #fff;
		position: absolute;
		right:.3rem;
		top:.45rem;
	}
	#header .nav li.l:nth-of-type(3){
		position: relative;
	}
	#header .nav li.l:nth-of-type(3)::after{
		display: inline-block;
		content:"";
		border-bottom: .06rem solid #ddd;
		border-left: .06rem solid #fff;
		border-right: .06rem solid #fff;
		position: absolute;
		right:0.3rem;
		top:0.4rem;
	}
	#header .nav li.l:nth-of-type(3)::before{
		display: inline-block;
		content:"";
		border-top: .06rem solid #ddd;
		border-left: .06rem solid #fff;
		border-right: .06rem solid #fff;
		position: absolute;
		right:.3rem;
		bottom:.4rem;
	}
	#header .nav li.cur{
		color:red;
	}
	#header .nav li.l:nth-of-type(1){
		position: relative;
	}
	#header .nav li.l:nth-of-type(1) .one{
		position: absolute;
		padding:0 .3rem;
		width:6.9rem;
		text-align: left;
		background: #fff;
	}
	#header .nav li.l:nth-of-type(1) .one li.curTwo{
		color:#e6133c;
	}
	#header .nav li.l:nth-of-type(1) .one li{
		margin-right: 0;
		color:#666;
		border-bottom: .05rem solid #eee;
		line-height: 1rem;
		cursor:pointer;
	}
	#header .classify{
		padding:.2rem 0;
		border-top:0.005rem solid #eee;
		border-bottom:0.005rem solid #eee;
		height:.6rem;
	}
	#header .classify li{
		float:left;
		padding:0 .3rem;
		background: #eee;
		border-radius: .03rem;
		text-align: center;
		line-height:.6rem;
		margin:0 .35rem;
		border-radius: .03rem;
	}
	#content{
		margin-top:3.5rem;
	}
	#content dl{
		margin:0.2rem .3rem;
		overflow: hidden;
		border-bottom:0.005rem solid #eee;
	}
	#content dl dt{
		padding:.2rem;
		float:left;
		width:15%;
	}
	#content dl dt img{
		width:1.5rem;
		height:2rem;
	}
	#content dl dd{
		float:right;
		width:65%;
	}
	#content dl dd p {
		width: 100%;
		line-height: .3rem;
		height:.6rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow:hidden;
	}
	#content dl dd h2{
		margin-top: .5rem;
		color:#e6133c;
	}
	#content dl dd ul li{
		float:left;
		margin-right: .3rem;
		margin-top:.1rem;
		color:#999;
		font-weight: 100;
	}
</style>