<template>
  <div class="bottom-nav">
    <ul id="bottom">
<<<<<<< HEAD
    	<router-link to="/shopList" tag="li" active-class="special">HomePage</router-link>
    	<router-link to="/classify" tag="li" active-class="special">Classify</router-link>
    	<router-link to="/order" tag="li" active-class="special">Order</router-link>
    	<router-link to="/mine" tag="li" active-class="special">Mine</router-link>
=======
    	<router-link to="/shopList" tag="li" active-class="special">
        <i class="iconfont">&#xe605;</i>首页</router-link>
    	<router-link to="/classify" tag="li" active-class="special">
        <i class="iconfont">&#xe657;</i>分类</router-link>
    	<router-link to="/cart" tag="li" active-class="special">
        <i class="iconfont">&#xe62a;</i>购物车</router-link>
    	<router-link to="/myself" tag="li" active-class="special">
        <i class="iconfont">&#xe6a3;</i>我的</router-link>
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
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
<<<<<<< HEAD
  #bottom .special {
    background: red;
=======

  #bottom .special {
    color:#e6133c;
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
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
<<<<<<< HEAD
}
#bottom li{
  flex:1;
  line-height: 1.2rem;
  font-size: 16px;
=======
  z-index: 1000
}
#bottom li{
  flex:1;
  line-height: 0.4rem;
  font-size: 16px;
  margin-top:.2rem;
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
  text-align: center
}
#bottom li a{
  text-decoration:none;
}
<<<<<<< HEAD
=======
#bottom i{
  display: block;
}
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
</style>