<template>
  <div class="search-nav">
    <div id="header">
      
      <span>
        <p @touchend="switchoverNav" v-if="$store.state.isHide==='none'" class="iconfont">&#xe660;</p>
        <p @touchend="switchoverNav" v-else class="iconfont">&#xe624;</p>
        <ul ref="nav" :style="{display:$store.state.isHide}">
          <router-link to="/shopList" tag="li" active-class="special"><i class="iconfont">&#xe632;</i><b>首页</b></router-link>
          <router-link to="/classify" tag="li" active-class="special"><i class="iconfont">&#xe501;</i><b>搜索</b></router-link>
          <router-link to="/classify" tag="li" active-class="special"><i class="iconfont">&#xe657;</i><b>分类</b></router-link>
          <router-link to="/cart" tag="li" active-class="special"><i class="iconfont">&#xe62a;</i><b>购物车</b></router-link>
          <router-link to="/mine" tag="li" active-class="special"><i class="iconfont">&#xe6a3;</i><b>我的</b></router-link>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'search-nav',
  methods: {
    switchoverNav () {
      this.$store.commit('setIsHide')
    }
  }
}
</script>


<style scoped>
    #header{
      padding:.3rem 0;
      overflow: hidden;
      
    }
    
    #header span{
      position: absolute;
      right:0.35rem;
      top:.1rem;
      
    }
    #header span ul::after{
      display: block;
      content:"";
      border-bottom:.15rem solid rgba(0,0,0,.8);
      border-left:.15rem solid white;
      border-right:.15rem solid white;
      position: absolute;
      right:.38rem;
      top:-.15rem;
    }
    #header span p{
      font-size:20px;
      position: absolute;
      left:-0.5rem;
      top:.25rem;
    }
    #header span ul{
      position: absolute;
      width:7.5rem;
      left:-7.15rem;
      top:.8rem;
      z-index: 100;
      border-bottom: 0.05rem solid #fe8477;
        background-color: rgba(0,0,0,.8);
        display: none;
    }
    #header span ul li{
      float:left;
      width:20%;
      text-align: center;
    }
    #header span ul li i{
      height:.5rem;
      padding:0 .3rem;
      color: #fff;

      line-height: .5rem;
    }
    #header span ul li b{
      height:.5rem;
      line-height: .5rem;
      padding:0 .3rem;
      display: block;
      color:white;
      font-weight: 100;
    }
  
</style>