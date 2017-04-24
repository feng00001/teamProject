
<template>
  <div class="classify">
  	<search-nav></search-nav>
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
import SearchNav from './SearchNav.vue'
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
		BottomNav,
		SearchNav
	}
}
</script>

<style scoped>
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