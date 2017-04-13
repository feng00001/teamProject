<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div>
  	<h1>ShopDetail <a href="#/"> Back</a></h1>
  	<p>{{$store.state.shopDetail.shopname}}</p>
    <!-- <button @click="selectAll">查询</button> -->
    
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
// import $ from 'jquery'

export default {
	// 页面加载完成后调用，
	mounted (){
		var that = this;
		$.ajax({
			method:"get",
			url:"/exp/selectById",
			data: {
				shopid: this.$route.params.shopid
			},
			success:function(data){
				// 对store的操作需要调用mutations
				that.$store.commit('setShopDetail', data[0])
			}
		})
	},
	methods: {
		...mapActions([
		  
		])
	}
}
</script>
