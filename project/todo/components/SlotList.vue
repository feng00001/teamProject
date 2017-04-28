<template>
	<div class="slotlist">
		<div id="header">
			<div class="first">
				<router-link to="/classify" class="l"><i class="iconfont">&#x3484;</i></router-link>
				<div class="search l">
					<i class="iconfont">&#xe501;</i>
					<input type="text" placeholder="查找你喜欢的商品" />
					<img :src="$store.state.slotListImg" class="no">
				</div>
	        	<i class="r iconfont" @touchend="switchover">&#xe628;</i>
			</div>
			
        	<ul class="nav">
        		<li class="cur l">综合<span @touchend="isSure" :class="{angleTop:$store.state.isTop,angleDown:$store.state.isDown}"></span>
        			<ul class="one" @touchend="isChecked($event)" :style="{display:$store.state.isSure}">
        				<li class="curTwo">综合排序<span class="r" id="sure">v</span></li>
        				<li @touchend="orderByNew">新品优先</li>
        			</ul>
        		</li>
        		<li class="l" @touchend="orderByComs">销量</li>
        		<li class="l" @touchend="orderByPriceAsc">
        		价格</li>
        	</ul>

        	<ul class="classify">
        		<li>自营</li>
        		<li>品牌</li>
        		<li>自提</li>
        		<li>促销</li>
        	</ul>
		</div>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="$store.state.allLoaded" ref="loadmore">
		<div id="content1" v-if="$store.state.isList==='con1'">
			<dl v-for="item in $store.state.slotList">
				<router-link :to="'/detail/'+item.el.shopid">
					<dt>
						<img :src="item.el.img">
					</dt>
					<dd>
						<p>{{item.el.shopname}}</p>
						<h2>¥<span ref="price">{{item.el.price}}</span></h2>
						<ul>
							<li><span ref="volume">{{item.commence}}</span>条评论</li>
							<li>好评<span>{{item.commence}}</span></li>
						</ul>
					</dd>
				</router-link>
			</dl>
			
			<div id="master" :style="{display:$store.state.isSure}"></div>
		</div>
		
		<div id="content2" v-else="$store.state.isList==='con2'">
			<ul>
				<router-link :to="'/detail/'+item.el.shopid" key="item.shopid" tag="li" v-for="item in $store.state.slotList">
					<div class="pic">
	    				<img :src="item.el.img">
					</div>
					<div class="con">
						<p>{{item.el.shopname}}</p>
						<span>￥{{item.el.price}}</span>
					</div>
				</router-link>
			</ul>
		</div>
		</mt-loadmore>
	</div>	
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import { Swipe, SwipeItem, Loadmore} from 'mint-ui'
var obj = {};
obj[Loadmore.name] = Loadmore;

export default {

	mounted (){
		var that = this;
		this.$store.commit('setPrePage', 0);
		that.$store.commit('setSlotList', [])
		$.ajax({
			type:"get",
			url:"/exp/slotlist/slots",
			data: {
				prePage: this.$store.state.prePage,
				shopname: this.$store.state.searchval
			},
			success:function(data){
				that.$store.commit('setSlotList', data)
				// console.log(data)
				if(data&&data.length>0)	{
					that.$store.commit('setPrePage', that.$store.state.prePage + 1);
				}
			}
		})
	},
	methods: {
		loadBottom: function() {
	    	var that = this;
	    	var url = "";
	    	if(this.$store.state.priceFlag){
	    		url = "/exp/slotlist/priceasc"
	    	}else{
	    		url = "/exp/slotlist/pricedesc"
	    	}
	    	$.ajax({
				type:"get",
				url: url,
				data: {
					prePage: this.$store.state.prePage,
					shopname: this.$store.state.searchval
				},
				success:function(data){
					that.$refs.loadmore.onBottomLoaded();
					// 对store的操作需要调用mutations
					if(data&&data.length>0)	{
						console.log(data)
					that.$store.commit('setPrePage', that.$store.state.prePage + 1);
					that.$store.commit('setSlotList', that.$store.state.slotList.concat(data));
					}
				}
			})
	    },
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
		orderByNew(params) {
			var that = this;
		},
		orderByComs(params) {
			var that = this;
		},
		orderByPriceAsc(params) {
			this.$store.commit('setPrePage', 0);
			var that = this;
			console.log(this.$store.state.priceFlag)
			if(this.$store.state.priceFlag){
				$.ajax({
					type:"get",
					url:"/exp/slotlist/priceasc",
					data: {
						prePage: this.$store.state.prePage,
						shopname: this.$store.state.searchval
					},
					success:function(data){
						that.$store.commit('setSlotList', data)
						console.log(data)
						that.$store.commit('setPriceFlag')
					}
				})
			}else{
				$.ajax({
					type:"get",
					url:"/exp/slotlist/pricedesc",
					data: {
						prePage: this.$store.state.prePage,
						shopname: this.$store.state.searchval
					},
					success:function(data){
						that.$store.commit('setSlotList', data)
						console.log(data)
						that.$store.commit('setPriceFlag')
					}
				})
			}
			
		},
		switchover() {
			console.log("in")
		    this.$store.commit('setIsList')   
		}
	},
	components: obj,
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
	#content1{
		margin-top:3.5rem;
	}
	#content1 dl{
		margin:0.2rem .3rem;
		overflow: hidden;
		border-bottom:0.005rem solid #eee;
	}
	#content1 dl dt{
		padding:.2rem;
		float:left;
		width:15%;
	}
	#content1 dl dt img{
		width:1.5rem;
		height:2rem;
	}
	#content1 dl dd{
		float:right;
		width:65%;
	}
	#content1 dl dd p {
		width: 100%;
		line-height: .5rem;
    	height: 1rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow:hidden;
	}
	#content1 dl dd h2{
		margin-top: .2rem;
		color:#e6133c;
	}
	#content1 dl dd ul li{
		float:left;
		margin-right: .3rem;
		margin-top:.1rem;
		color:#999;
		font-weight: 100;
	}
#content2{
	margin-top: 3.5rem;
	overflow: hidden;
	width: 7.5rem;
	box-sizing: border-box;
	padding: .2rem;
	margin-bottom: 2rem;
}
#content2 ul{
	width: 100%;
	overflow: hidden;	
}
#content2 ul li{
	float: left;
	width: 3.4rem;
	height: 5rem;
	padding:.1rem;
	background: #fff;
	margin-right: .2rem;
	margin-bottom: .2rem;
	border: .02rem solid #ccc;
	box-sizing: border-box;
}
#content2 ul li:nth-child(even){
	margin-right: 0;
}
#content2 ul li .pic img{
	width: 3.2rem;
	height: 3.4rem;
	border-bottom: .02rem solid #ccc;
}
#content2 ul li .con{
	width: 3.2rem;
	overflow: hidden;
}
#content2 ul li .con p{
	width: 3.2rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	line-height: .4rem;
	font-size: .16rem;
}
#content2 ul li .con span{
	color: #8b001b;
	line-height: .5rem;
}
#content2 ul li .con button{
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