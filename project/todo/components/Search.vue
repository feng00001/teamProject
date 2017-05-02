<template>
<div>
	<div class="head">
		<i class="iconfont l back" @click="$router.go(-1)">&#x3484;</i>
		<!-- <router-link tag="i" class="iconfont l" to="/shopList"  active-class="special">&#x3484;</router-link> -->
		<div class="txt l">
			<i class="iconfont l">&#xe501;</i>
			<input class="ipt l" type="text" placeholder="搜索你想要的商品" ref="searchval"/>
		 </div>
		 <div class="search l"><span @touchend="search">搜索</span></div>
	</div>
	
	<div class="con">
		<div class="history">
			<h5><i class="iconfont">&#xe63c;</i>最近搜索</h5>
				<ul class="ul-1">
					<li><a href="#">金龙鱼</a></li>
					<li><a href="#">金龙鱼</a></li>
					<li><a href="#">金龙鱼</a></li>
					<li><a href="#">金龙鱼</a></li>
				</ul>
		</div>
		<div class="hot">
			<h5><i class="iconfont">&#xe628;</i>热门搜索</h5>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">大米</a>
				<a href="#">空气加湿器</a>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">金龙鱼</a>
				<a href="#">大米</a>
				<a href="#">空气加湿器</a>
		</div>
	</div>
</div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'


export default {
  methods: {
    search() {
    	this.$store.commit('setSearchVal', this.$refs.searchval.value)
    	location.href = "#/slotlist"
    }
  }
}
</script>
<style type="text/css">
.head{
	height:.83rem;
	background:#f4f4f4;
	padding-top:.07rem;
	width: 7.5rem;
	line-height: .73rem;
}
.head .txt{
	width:5.8rem;
	height:.73rem;
	border:1px solid #ccc;
	margin-left:.18rem;
	border-radius: 5px;
	background:#fff;
	line-height: .73rem;
	padding-left: .2rem;
	box-sizing: border-box;
}
.head .txt i{
	font-size:14px;
}
.head .txt .ipt{
	width:5rem;
	height:.68rem;
	border:0;
	font-size:14px;
	outline: none;
}
.head .search{
	width:.7rem;
	height:.58rem;
	line-height:.68rem;
	font-size:14px;
	margin-left:.2rem
}
.con{
	background:#eee;
}
.con .history{
	padding:.1rem;
	width:7.5rem;
	box-sizing: border-box;
	height:100%;
	background:#eee;
}
.con .history h5{
	padding:.3rem;
	background:#eee;
	margin-bottom:.1rem;
	color:#999999;
	
}
.con .history h5 i{
	font-weight: 100;
	margin-right:.1rem;
}
.con .history .ul-1{
	list-style: none;
	margin-bottom:1rem;
}
.con .history .ul-1 li{
	padding:.1rem .2rem;
	border:1px solid #ccc;
	float:left;
	margin-left:.2rem;
	background:#fff;
	
}
.con .hot{
	padding:.1rem;
	width:7.5rem;
	box-sizing: border-box;
	height:100%;
	background:#eee;
}
.con .hot h5{
	padding:.3rem;
	background:#eee;
	margin-bottom:.1rem;
	color:#999999;
	
}
.con .hot h5 i{
	font-weight: 100;
	margin-right:.1rem;
}
.con .hot a{
	padding:.1rem .2rem;
	border:1px solid #ccc;
	float:left;
	margin-left:.2rem;
	background:#fff;
	margin-bottom:.2rem;
}
.back{
	margin-left: 0.2rem;
}
</style>