<template>
	  <div>
	  		<div class="head">
	  			<div class="txt l">
	  				<img class="pic l" src="assets/imgs/fdj.png">
		  			<input class="ipt l" type="text" placeholder="搜索你想要的商品"/>
	  			 </div>
	  			 <div class="search l"><a href="#">搜索</a></div>
	  		</div>
	  		
				<div class="con">
					<div class="history">
						<h5><img src="assets/imgs/时钟.png">最近搜索</h5>
							<ul class="ul-1">
								<li><a href="#">金龙鱼</a></li>
								<li><a href="#">金龙鱼</a></li>
								<li><a href="#">金龙鱼</a></li>
								<li><a href="#">金龙鱼</a></li>
							</ul>
					</div>
					<div class="hot">
						<h5><img src="assets/imgs/五角星 2.png">热门搜索</h5>
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
    
  }
}
</script>
<style type="text/css">
			html{
				background:#eee
			}
			body{
				overflow: hidden;
				box-sizing: content-box;
				font-size:26px;
			}
			.l{
				float:left;
			}
			.r{
				float:right;
			}
			.head{
				height:.83rem;
				background:#f4f4f4;
				padding-top:.07rem;
			}
			.head .txt{
				width:6rem;
				height:.73rem;
				border:1px solid #ccc;
				margin-left:.18rem;
				border-radius: 5px;
				background:#fff;
			}
			.head .txt .pic{
				width:.48rem;
				height:.48rem;
				margin-left:.05rem;
				margin-top:.1rem
			}
			.head .txt .ipt{
				width:5.4rem;
				height:.7rem;
				border:0;
				font-size:26px;
			}
			.head .search{
				width:.78rem;
				height:.58rem;
				line-height:.68rem;
				font-size:26px;
				margin-left:.5rem
			}
			.con{
				background:#eee;
			}
			.con .history{
				padding:.1rem;
				width:100%;
				height:100%;
				background:#eee;
			}
			.con .history h5{
				padding:.3rem;
				background:#eee;
				margin-bottom:.1rem;
				color:#999999;
				
			}
			.con .history h5 img{
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
				width:100%;
				height:100%;
				background:#eee;
			}
			.con .hot h5{
				padding:.3rem;
				background:#eee;
				margin-bottom:.1rem;
				color:#999999;
				
			}
			.con .hot h5 img{
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
</style>