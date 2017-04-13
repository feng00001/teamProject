<!-- <style src="todomvc-app-css/index.css"></style> -->
<style type="text/css" src="mint-ui/lib/style.css"></style>
<template>
  <div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :ref="$store.state.loadmore">
    <img :src="$store.state.testImg"/>
    <transition :name="$store.state.transitionName">
      <router-view class="child-view"></router-view>
    </transition>

    <ul>
    	<li><a href="#/">HomePage</a></li>
    	<li><a href="#/discover">Discover</a></li>
    	<li><a href="#/order">Order</a></li>
    	<li><a href="#/mine">Mine</a></li>
    </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import { Loadmore } from 'mint-ui'
// import 'mint-ui/lib/style.css'
var loadObj = {};
loadObj[Loadmore.name] = Loadmore;


export default {
  methods: {
    loadTop: function() {
        console.log("this is loadTop");
        setTimeout(()=>{
           this.$refs.loadmore.onTopLoaded();
        }, 3000)
      },
      loadBottom: function() {
        console.log("this is loadBottom");
      }
  },
  beforeRouteUpdate (to, from, next) {
    this.transitionName = to.path.indexOf("detail") !=-1 ? 'slide-right' : 'slide-left'
    next()
  },
  components: loadObj
}
</script>
<style type="text/css" scoped>
  /*.child-view {
    position: absolute;
    
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }*/
  ul{
    display: flex;
    flex-direction: row;
  }
  ul li{
    padding: 10px 20px
  }

</style>
