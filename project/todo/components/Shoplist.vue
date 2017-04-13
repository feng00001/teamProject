<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div>
  	<h1>Shoplist</h1>
  	<input type="text" ref="ipt"/>
  	<button @click="searchByName">Search</button>
  	<button @click="insertVal">Insert</button>
    <!-- <button @click="selectAll">查询</button> -->
    <ul>
    	<li v-for="item in $store.state.shoplist"><a :href="'#/detail/'+item.shopid">{{item.shopname}}</a><span @click="deleteById(item.shopid)">删除</span></li>
    </ul>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import $ from 'jquery'

export default {
	// 页面加载完成后调用，
	mounted (){
		var that = this;
		$.ajax({
			method:"get",
			url:"/exp",
			success:function(data){
				// 对store的操作需要调用mutations
				that.$store.commit('setShoplist', data)
			}
		})
	},
	methods: {
		searchByName () {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/search",
				data: {
					shopname: that.$refs.ipt.value
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		insertVal () {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/insertVal",
				data: {
					shopname: that.$refs.ipt.value
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		deleteById (id) {
			var that = this;
			$.ajax({
				method:"get",
				url:"/exp/deleteById",
				data: {
					shopid: id
				},
				success:function(data){
					// 对store的操作需要调用mutations
					that.$store.commit('setShoplist', data)
				}
			})
		},
		// 不需要传递参数的时候可以使用结构赋值，否则没必要用
		...mapActions([
		  
		])
	}
}
</script>
<style type="text/css" scoped>
	
</style>
