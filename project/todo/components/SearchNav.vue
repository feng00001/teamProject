<template>
  <div class="search-nav">
    <div id="header">
      <input type="text" placeholder="搜索你想找的商品"/>
      <img :src="$store.state.classifyImg[1]">
      <span>
        <p @touchend="switchoverNav" v-if="$store.state.isHide==='none'">...</p>
        <p @touchend="switchoverNav" v-else>x</p>
        <ul ref="nav" :style="{display:$store.state.isHide}">
          <router-link to="/shopList" tag="li" active-class="special"><i>1</i><b>首页</b></router-link>
          <router-link to="/classify" tag="li" active-class="special"><i>1</i><b>搜索</b></router-link>
          <router-link to="/classify" tag="li" active-class="special"><i>1</i><b>分类</b></router-link>
          <router-link to="/order" tag="li" active-class="special"><i>1</i><b>购物车</b></router-link>
          <router-link to="/mine" tag="li" active-class="special"><i>1</i><b>我的</b></router-link>
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
    #header input{
      height: .6rem;
      line-height: .6rem;
      border-bottom: 1px solid #ddd;
      float: left;
      background: #f4f4f4;
      border-radius: .1rem;
      width: 65%;
      margin-left: .3rem;
      padding-left:.3rem;
      background:#fff;
    }
    #header img{
      position: absolute;
      left:0.25rem;
      top:.2rem;
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
      font-size:38px;
      position: absolute;
      left:-0.5rem;
      top:-0.35rem;
    }
    #header span ul{
      position: absolute;
      width:7.5rem;
      left:-7.15rem;
      top:1.1rem;
      border-bottom: 0.05rem solid #fe8477;
        background-color: rgba(0,0,0,.8);
        display: none;
    }
    #header span ul li{
      float:left;
      width:20%;
    }
    #header span ul li i{
      height:.5rem;
      padding:0 .3rem;
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