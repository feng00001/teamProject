<template>
  <div class="bottom-nav">
    <ul id="bottom">
    	<router-link to="/shopList" tag="li" active-class="special">
        <i class="iconfont">&#xe605;</i>首页</router-link>
    	<router-link to="/classify" tag="li" active-class="special">
        <i class="iconfont">&#xe657;</i>分类</router-link>
    	<router-link to="/cart" tag="li" active-class="special">
        <i class="iconfont">&#xe62a;</i>购物车</router-link>
    	<router-link to="/myself" tag="li" active-class="special">
        <i class="iconfont">&#xe6a3;</i>我的</router-link>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'bottom-nav',
  methods: {
    
  }
}
</script>


<style scoped>

  #bottom .special {
    color:#e6133c;
  }
  #bottom {
  position: fixed;
  bottom:0;
  left:0;
  list-style: none;
  height:1.2rem;
  display: flex;
  width:100%;
  border-top:0.01rem solid #ccc;
  background: white;
  z-index: 1000
}
#bottom li{
  flex:1;
  line-height: 0.4rem;
  font-size: 16px;
  margin-top:.2rem;
  text-align: center
}
#bottom li a{
  text-decoration:none;
}
#bottom i{
  display: block;
}
</style>