

<template><!-- 全部 -->
  <div class="send">
      <div class="false">
          <div class="top">
            <i class="iconfont l">&#xe607;</i>
            <h3 class="l">店铺名</h3>
            <i class="iconfont l">&#xe656;</i>
            <span class="r">等待买家付款</span>
          </div>
          <div class="mid">
            <dl>
              <dd class="l">
                 <img style="background:url(https://gw.alicdn.com/bao/uploaded/i1/136781748/TB24ViDo0RopuFjSZFtXXcanpXa_!!136781748.jpg_120x120q50s150.jpg) no-repeat center;background-size:cover;" class="l">
              </dd>
              <dt class="l">
                <p class="l">4/24抢新 限量200件24小时秒发！短袖T恤+松紧系带拼色阔腿裤套装  </p>
                <span class="l">￥119.00</span>
                <del class="l">￥110.89</del>
                <ul class="l detail">
                   <li class="l">颜色分类:如图</li>   
                   <li class="l">尺码:s</li>
                   <li class="l">x1</li>
                 </ul> 
              </dt>
            </dl>
          </div>
          <ul class="count">
              <li >共1件商品</li>
              <li >合计:$119.00</li>
              <li >(含运费 ￥0.00)</li>
            </ul>
          <div class="bot">
            <button>更多</button>
            <button>朋友代付</button>
            <button>取消订单</button>
            <button>付款</button>
          </div>   
      </div>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'send',
  methods: {
    
  }
}
</script>
<style scoped>
.send {
  background:#f5f5f5;
  width: 7.5rem;
}
.false{
  width: 7.5rem;
  height:4rem;
  background: #fff; 
  margin-top: 2.2rem;
  padding:.2rem 0;
  overflow-x:hidden;
  box-sizing: border-box;
}
.false .top{
  height: .7rem;
  line-height: .7rem;
} 
.false .top h3{
  margin-left: .2rem;
  font-weight: 100;
  font-size: 14px;
  color: #333;
}
.false .top .iconfont{
  font-size: 14px;
  color: #333;
  margin-left: .2rem;
}
.false .top span{
  color: #f60;
  margin-right: .2rem;
}
.false .mid{
  height: 1.4rem;
  clear: both;
  background:#f5f5f5;
  box-sizing: border-box;
  padding:.1rem .2rem;
}
.false .mid dl{
  width: 7.5rem;
  height: 100%;
}
.false .mid dl dd {
  width: 1.24rem;
  height: 1.24rem;
}
.false .mid dl dd img{
  width: 1.24rem;
  height: 1.24rem;
  display: inline;
}
.false .mid dl dt {
  width:5.8rem;
  height: 1.24rem;
  padding-left: .2rem;
  font-size: 12px;
  line-height: .33rem;
}
.false .mid dl dt p{
  width: 4.2rem;
  height: .66rem;

}
.false .mid dl dt span,.false .mid dl dt del{
  width: 1.5rem;
  height: .3rem;
  margin-left: .1rem;

}
.false .mid dl dt .detail{
  width: 100%;
  height: .3rem;
  margin-top: .1rem;
}
.false .count{
  height: .7rem;
  width: 100%;
  line-height: .7rem;
  border-bottom: .02rem solid #ccc;
  box-sizing: border-box;
  padding-left: 1rem;
  text-align: center;
}
.false .count li{
  display: inline;
  width: 1.4rem;
  padding:.15rem;
}
.false .bot{
  height: .7rem;
  width: 100%;
  clear: both;
  line-height: 1rem;
  padding-left:1rem;
  box-sizing: border-box;
}
.false .bot button{
  width: 1.5rem;
  height: .6rem;
  background: #fff;
  border-radius: .05rem;
  color: #333;
  border:.02rem solid #ccc;
}
</style>
