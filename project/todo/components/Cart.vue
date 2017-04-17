<template>
  <div class="cart">
  	<div id="header">
  		<span class="l">
        <router-link to="/classify">
  			 &gt;
        </router-link>
  		</span>
  		<span>
  			购物车（0）
  		</span>
  		<span class="r">
  			...
  		</span>
  	</div>
  	<div id="login">
      <router-link to="/mine/logon">登陆</router-link>
      <span>后可同步电脑与手机购物车中的商品</span>
      <router-link to="/mine/logon" class="r">&lt;</router-link>
    </div>
    <div id="cart-content">
      <img :src="$store.state.cartImg">
      <p>购物车快饿扁了／(ToT)／～～</p>
      <p>主人快点给我挑点宝贝吧</p>
      <router-link to="/shopList">去逛逛～走你</router-link>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import { mapMutations, mapActions} from 'vuex'

export default {
  methods: {
    
  },
  components: {
  	BottomNav
  }
}
</script>

<style scoped>
	#header {
		  text-align: center;
	    line-height: .8rem;
	    font-size: 14px;
	    border-bottom: .05rem solid #eeeeee;
	    padding:0 .3rem;
	}
  #login {
      height: .8rem;
      padding: 0 .5rem;
      line-height: .8rem;
      font-size: 12px;
      color: #333333;
      border-bottom: .05rem solid #eeeeee;
  }
  #login a:nth-of-type(1){
    color:red;
  }
  #cart-content {
    text-align: center;
  }
  #cart-content img{
    padding-top: 1.2rem;
    display: inline-block;
    width:2rem;
    height:2rem;
  }
  #cart-content p:nth-of-type(1){
    font-size: 16px;
    color: #333333;
    padding-top: .2rem;
    line-height: 1rem;
  }
  #cart-content p:nth-of-type(2){
    font-size: 12px;
    color: #666666;
    line-height: .5rem;
  }
  #cart-content a{
    display: inline-block;
    width:3.8rem;
    height:.7rem;
    line-height:.7rem;
    background:#e6133c;
    color:#fff;
    border-radius:.3rem;
    margin-top:.3rem;
  }
</style>