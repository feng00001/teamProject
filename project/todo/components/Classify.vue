
<template>
  <div class="classify">
  	<div id="header">
<<<<<<< HEAD
  		<input type="text" placeholder="搜索你想找的商品"/>
  		<img :src="$store.state.classifyImg[1]">
  		<span>
  			<p>...</p>
  			<ul>
  				<li>首页</li>
  				<li>搜索</li>
  				<li>分类</li>
  				<li>购物车</li>
  				<li>我的</li>
  			</ul>
  		</span>
  	</div>
  	<div id="content1">
			 <div class="left">
				<ol>
					<li>百联进口</li>
					<li>生鲜食品</li>
					<li>食品粮油</li>
					<li>酒水冲印</li>
					<li>美容护理</li>
					<li>母婴专区</li>
					<li>家居餐厨</li>
					<li>厨卫清洁</li>
					<li>精品服装</li>
					<li>鞋靴箱包</li>
					<li>腕表视频</li>
					<li>手机数码</li>
					<li>电脑办公</li>
					<li>家用电器</li>
					<li>运动户外</li>
					<li>汽车用品</li>
					<li>营养保健</li>
					<li>图书音像</li>
					<li>生活服务</li>
=======
  		<label><i class="iconfont">&#xe501;</i>
		<router-link to="/search" tag="input" type="text" active-class="special"placeholder="搜索你想找的商品"></router-link>
  		</label>
  		<search-nav></search-nav>
  	</div>
  	<div id="content1">
			<div class="left">
				<ol>
					<li v-for="item in $store.state.typelist" @touchend="changeUl(item.typeid)" :class="{cur:$store.state.cur===item.typeid}">{{item.typename}}</li>
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
					
				</ol>
			</div>
			<div class="goodsinfo">
<<<<<<< HEAD
				<p class="nav">进口美容护理</p>
				<ul>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img :src="$store.state.classifyImg[0]"/>
						<p>进口乳液／面霜</p>
					</li>
				</ul>
				<p class="nav">进口食品</p>
				<ul>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
				</ul>
				<p class="nav">进口乳品 酒水 冲饮</p>
				<ul>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
				</ul>
				<p class="nav">进口母婴</p>
				<ul>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
				</ul>
				<p class="nav">进口3c家电</p>
				<ul>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
				</ul>
				<p class="nav">进口家居生活</p>
				<ul>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
					<li>
						<img />
						<p>进口乳液／面霜</p>
					</li>
				</ul>
=======
				<div v-for="item in $store.state.subtypelist">
					<p class="nav">{{item.subtypename}}</p>
					<ul>
						<router-link to="/slotList" tag="li" v-for="it in item.finalls" :key="it.finaltypeid">
			  				<img :src="it.img"/>
							<p>{{it.finaltypename}}</p>
			        	</router-link>
					</ul>
				</div>
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
			</div>
			<bottom-nav></bottom-nav>
		</div>
    
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
<<<<<<< HEAD
=======
import SearchNav from './SearchNav.vue'
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'

export default {
<<<<<<< HEAD
  methods: {
    
  },
  components: {
  	BottomNav
  }
=======
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
		changeUl (typeid) {
			var that = this;
			this.$store.commit('setCur',typeid)

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
		BottomNav,
		SearchNav
	}
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
}
</script>

<style scoped>
<<<<<<< HEAD
    #header{
    	height:.8rem;
    }
    #header input{
    	margin-top: .1rem;
	    height: .6rem;
	    line-height: .6rem;
	    border-bottom: 1px solid #ddd;
	    float: left;
	    background: #f4f4f4;
	    border-radius: .1rem;
	    width: 65%;
	    margin-left: .3rem;
	    padding-left:.3rem
    }
    #header img{
    	position: absolute;
    	left:0.25rem;
    	top:.3rem;
    }
    #header span{
    	position: absolute;
    	right:0.35rem;
    	top:.1rem;
    	font-size:38px;
    }
    #header span ul{
    	position: absolute;
    	width:6.5rem;
    	left:-6.5rem;
    }
    #header span ul li{
    	float:left;
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
		width: 20%;
	    background: red;
=======
#header{
      padding:.3rem 0;
      overflow: hidden;
}
#header label{
    position: relative;
}
#header label i{
	position: absolute;
	top:0.2rem;
	left:0.4rem;
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
      padding-left:.5rem;
      background:#fff;
    }
    #header img{
      position: absolute;
      left:0.25rem;
      top:.2rem;
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
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
	    overflow: auto;
	}
	#content1 .left ol{
		width:100%;
		display: flex;
		flex-direction: column;
	}
	#content1 .left ol li{
<<<<<<< HEAD
		border-bottom:1px solid yellow;
		height:1rem;
		line-height:1rem;
		text-align:center;
		font-size:18px;
		width:100%;
	}
	#content1 .goodsinfo{
		width: 80%;
	    background: yellow;
=======
		border-bottom:1px solid #ddd;
		height:1rem;
		line-height:1rem;
		text-align:center;
		font-size:14px;
		width:100%;
	}
	#content1 .goodsinfo{
		width: 75%;
	    background: #fff;
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
	    overflow: auto;
	}
	
	#content1 .goodsinfo ul{
<<<<<<< HEAD
		width:100%;
		display: flex;
		flex-direction: row;
    	flex-wrap: wrap;
	}
	#content1 .goodsinfo ul li{
		height:2rem;
		width:1.5rem;
		padding-left:.3rem;
=======
		width: 99%;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    padding-left: .2rem;
	}
	#content1 .goodsinfo ul li{
		height:2rem;
		width:1.7rem;
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
	}
	#content1 .goodsinfo ul li img{
		padding:.2rem;
		width: .9rem;
    	height: .9rem;
	}
	#content1 .goodsinfo ul li p{
<<<<<<< HEAD
		width: 1.5rem;
    	height: .7rem;
    	line-height: .7rem;
=======
		width: 1.7rem;
    	height: .7rem;
    	line-height: .7rem;
    	font-size:12px;
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
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
<<<<<<< HEAD
=======
	#content1 .left ol li.cur{
		border-left:.1rem solid red;
		box-sizing: border-box;
		background:#fff;
	}
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
</style>