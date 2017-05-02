<template>
<div>
	<div class="head">
		<i class="iconfont l back" @click="$router.go(-1)">&#x3484;</i>
		<!-- <router-link tag="i" class="iconfont l" to="/shopList"  active-class="special">&#x3484;</router-link> -->
		<div class="txt l">
			<i class="iconfont l">&#xe501;</i>
			<input class="ipt l" type="text" placeholder="搜索你想要的商品" ref="searchval"/>
		 </div>
		 <div class="search l"><span @touchend="search()">搜索</span></div>
	</div>
	
	<div class="con">
		<div class="history">
			<h5><i class="iconfont">&#xe63c;</i>最近搜索</h5>
				<ul class="ul-1">
					<li><span href="#" @touchend="search('慕斯蛋糕')">慕斯蛋糕</span></li>
					<li><span href="#" @touchend="search('手持吸尘器')">手持吸尘器</span></li>
					<li><span href="#" @touchend="search('百味斋')">百味斋</span></li>
					<li><span href="#" @touchend="search('安佳')">安佳</span></li>
				</ul>
		</div>
		<div class="hot">
			<h5><i class="iconfont">&#xe628;</i>热门搜索</h5>
				<span href="#" @touchend="search('伊利')">伊利</span>
				<span href="#" @touchend="search('花王')">花王</span>
				<span href="#" @touchend="search('百联')">百联</span>
				<span href="#" @touchend="search('饼干')">饼干</span>
				<span href="#" @touchend="search('牛奶')">牛奶</span>
				<span href="#" @touchend="search('油')">油</span>
				<span href="#" @touchend="search('板鞋')">板鞋</span>
				<span href="#" @touchend="search('SWAROVSKI')">SWAROVSKI</span>
				<span href="#" @touchend="search('三文鱼')">三文鱼</span>
				<span href="#" @touchend="search('夏普')">夏普</span>
				<span href="#" @touchend="search('西门子')">西门子</span>
				<span href="#" @touchend="search('亚马逊')">亚马逊</span>
		</div>
	</div>
</div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'


export default {
  methods: {
    search(value) {
    	var searchval = ""
    	if(value){
    		searchval = value
    	}else{
    		searchval = this.$refs.searchval.value
    		console.log(searchval)
    	}
    	this.$store.commit('setSearchVal', searchval)
    	location.href = "#/slotlist"
    }
  }
}
</script>
<style type="text/css" scoped>
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
.con .hot span{
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