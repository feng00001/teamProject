
<template>
  <div class="classify">
  	<div id="header">
  		<input type="text" placeholder="搜索你想找的商品"/>
  		<img :src="$store.state.classifyImg[1]">
  		<span>
  			<p @touchend="switchoverNav" v-if="$store.state.isHide==='none'">...</p>
  			<p @touchend="switchoverNav" v-else>x</p>
  			<ul ref="nav" :style="{display:$store.state.isHide}">
  				<router-link to="/shopList" tag="li" active-class="special"><i>1</i><b>首页</b></router-link>
		    	<router-link to="/classify" tag="li" active-class="special"><i>1</i><b>搜索</b></router-link>
		    	<router-link to="/classify" tag="li" active-class="special"><i>1</i><b>分类</b></router-link>
		    	<router-link to="/order" tag="li" active-class="special"><i>1</i><b>购物车</b></router-link>
		    	<router-link to="/mine" tag="li" active-class="special"><i>1</i><b>我的</b></router-link>
  			</ul>
  		</span>
  	</div>
  	<div id="content1">
			 <div class="left">
				<ol>
					<li v-for="item in $store.state.typelist" @touchend="changeUl(item.typeid)">{{item.typename}}</li>
					
				</ol>
			</div>
			<div class="goodsinfo">
				<div v-for="item in $store.state.subtypelist">
					<p class="nav">{{item.subtypename}}</p>
					<ul>
						<router-link to="/slotList" tag="li" v-for="it in item.finalls" :key="it.finaltypeid">
			  				<img :src="it.img"/>
							<p>{{it.finaltypename}}</p>
			        	</router-link>
					</ul>
				</div>
			</div>
			<bottom-nav></bottom-nav>
		</div>
    
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'

export default {
	mounted(){
		var that = this
		$.ajax({
			type: "get",
			url: "/exp/classify/type",
			success: function(data){
				that.$store.commit('setTypelist',data)
			}
		})
		this.changeUl(1);
	},
	methods: {
		switchoverNav () {
			this.$store.commit('setIsHide')
		},
		changeUl (typeid) {
			var that = this;
			$.ajax({
				type: "get",
				url: "/exp/classify/subtype",
				data: {
					typeid: typeid
				},
				success: function(data){
					console.log("OK")
					that.$store.commit('setSubtypelist',data)
				}
			})
		}
	},
	components: {
		BottomNav
	}
}
</script>

<style scoped>
    #header{
    	padding:.3rem 0;
    	overflow: hidden;
    }
    #header input{
	    height: .6rem;
	    line-height: .6rem;
	    border-bottom: 1px solid #ddd;
	    float: left;
	    background: #f4f4f4;
	    border-radius: .1rem;
	    width: 65%;
	    margin-left: .3rem;
	    padding-left:.3rem;
	    background:#fff;
    }
    #header img{
    	position: absolute;
    	left:0.25rem;
    	top:.2rem;
    }
    #header span{
    	position: absolute;
    	right:0.35rem;
    	top:.1rem;
    	
    }
    #header span ul::after{
    	display: block;
    	content:"";
    	border-bottom:.15rem solid rgba(0,0,0,.8);
    	border-left:.15rem solid white;
    	border-right:.15rem solid white;
    	position: absolute;
    	right:.38rem;
    	top:-.15rem;
    }
    #header span p{
    	font-size:38px;
    	position: absolute;
    	left:-0.5rem;
    	top:-0.35rem;
    }
    #header span ul{
    	position: absolute;
    	width:7.5rem;
    	left:-7.15rem;
    	top:1.1rem;
    	border-bottom: 0.05rem solid #fe8477;
        background-color: rgba(0,0,0,.8);
        display: none;
    }
    #header span ul li{
    	float:left;
    	width:20%;
    }
    #header span ul li i{
    	height:.5rem;
    	padding:0 .3rem;
    	line-height: .5rem;
    }
    #header span ul li b{
    	height:.5rem;
    	line-height: .5rem;
    	padding:0 .3rem;
    	display: block;
    	color:white;
    	font-weight: 100;
    }
	#content1{
		display: flex;
		flex-direction: row;
		background: green;
		width:100%;
		overflow: auto;
		height: 12rem;
	}
	#content1 .left{
		width: 25%;
	    background: #eee;
	    overflow: auto;
	}
	#content1 .left ol{
		width:100%;
		display: flex;
		flex-direction: column;
	}
	#content1 .left ol li{
		border-bottom:1px solid #ddd;
		border-right:1px solid #ddd;
		height:1rem;
		line-height:1rem;
		text-align:center;
		font-size:14px;
		width:99%;
	}
	#content1 .goodsinfo{
		width: 75%;
	    background: #fff;
	    overflow: auto;
	}
	
	#content1 .goodsinfo ul{
		width: 99%;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    padding-left: .2rem;
	}
	#content1 .goodsinfo ul li{
		height:2rem;
		width:1.7rem;
	}
	#content1 .goodsinfo ul li img{
		padding:.2rem;
		width: .9rem;
    	height: .9rem;
	}
	#content1 .goodsinfo ul li p{
		width: 1.7rem;
    	height: .7rem;
    	line-height: .7rem;
    	font-size:12px;
	}
	#content1 .goodsinfo p.nav{
		margin: .1rem 0;
		margin-left:.1rem;
		padding-left:.1rem;
		line-height: .3rem;
	    height: .3rem;
	    font-size: 16px;
	    border-left: 2px solid red;
	}
</style>