<template>
<div class="container">
	
	<div class="head">
		<a href="#/"><i class="iconfont">&#x3484;</i></a>
	    <div class="logo">
	    	
	        <i></i>
	        登录
	    </div>
	    <a href="#/register" class="regis">注册</a>
	</div>
	<transition name="fade-mine" mode="out-in">
	<router-view></router-view>
	</transition>
</div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import { mapMutations, mapActions} from 'vuex'

export default {
	mounted() {
		this.$store.commit('setMineMsg',null)
	},
	methods: {

	},
	components: {
		BottomNav
	}
}
</script>
<style scoped>
	.fade-mine-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-mine-enter, .fade-leave-active {
	  opacity: 0
	}
	.container {
		width: 7.5rem;
	}
	.container .head {
		position: relative;
		width: 7.5rem;
		height: 0.9rem;
		border-bottom: 0.025rem solid #dedede;
		line-height: 0.9rem;
		background: #fff;
	}
	.container .head a{
		padding-left: 0.2rem;
	}
	.container .head .logo {
		position: absolute;
		top: 0;
		left: 2.75rem;
		width: 2rem;
		text-align: center;
		color: #333333;
		line-height: 0.9rem;
		margin-left: auto;
		margin-right: auto;
		font-size: 0.3rem;
	}

	.container .head .regis {
		float: right;
		padding-right: 0.25rem;
		color: #e6133c;
	}
</style>
