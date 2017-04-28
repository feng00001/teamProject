<template><!-- 全部 -->
  <div class="all-report">
      <div class="false" v-for="item in $store.state.orderlist">
          <div class="top">
            <i class="iconfont l">&#xe607;</i>
            <h3 class="l">店铺名</h3>
            <i class="iconfont l">&#xe656;</i>
            <span class="r">{{item.order.status}}</span>
          </div>
          <div class="mid" v-for="shopitem in item.shoplist">
            <dl>
              <dd class="l">
                 <img :src="shopitem.img" class="l">
              </dd>
              <dt class="l">
                <p class="l">{{shopitem.shopname}}  </p>
                <span class="l">￥{{shopitem.price}}</span>
                <del class="l">￥{{shopitem.price}}</del>
                <ul class="l detail">
                   <li class="l">颜色分类:如图</li>   
                   <li class="l">尺码:s</li>
                   <li class="l">x1</li>
                 </ul> 
              </dt>
            </dl>
          </div>
          <ul class="count">
              <li >共{{item.shoplist.length}}件商品</li>
              <li >合计:￥{{item.order.price}}</li>
              <li >(含运费 ￥0.00)</li>
            </ul>
          <div class="bot">
            <button>更多</button>
            <button>朋友代付</button>
            <button>取消订单</button>
            <button class="money">付款</button>
          </div>   
      </div>
      <div class="mask">
          <div class="success">
              <img :src="$store.state.testImg[14]">
              <p>支付成功</p>
          </div>
      </div>
       
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'

export default {
  name: 'all-report',
  mounted() {
    var that = this;
    that.$store.commit('setOrderList', [])
    $.ajax({
      type: "get",
      url: "/exp/order/init",
      success: function(data){
        that.$store.commit('setOrderList', data)  
      }
    })
     $('.money').click(function(){
        $('.mask').css('display','block')
        $('.success').css('display','block')
        setTimeout(function(){
            $('.mask').css('display','none')
            $('.success').css('display','none')
          },2000)
      })
  },
  methods: {

  }

}
</script>
<style scoped>
.all-report {
  background:#f5f5f5;
  width: 100%;
  margin-top:2.2rem;
}
.false{
  width: 100%;
  background: #fff; 
  padding:.2rem 0;
  overflow-x:hidden;
  margin-bottom:.3rem;
  box-sizing: border-box;
}
.false .top{
  width: 100%;
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
  width: 100%;
  height: 1.4rem;
  clear: both;
  background:#f5f5f5;
  box-sizing: border-box;
  padding:.1rem .2rem;
}
.false .mid dl{
  width: 100%;
  height: 100%;
  display: flex;
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
  flex: 1;
}
.false .mid dl dt p{
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.false .mid dl dt span,.false .mid dl dt del{
  width: 35%;
  height: .3rem;
  margin-left: .1rem;

}
.false .mid dl dt .detail{
  width: 100%;
  height: .3rem;
}
.false .count{
  height: .7rem;
  width: 100%;
  line-height: .7rem;
  border-bottom: .02rem solid #ccc;
  box-sizing: border-box;
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
  margin-left:.5rem;
  box-sizing: border-box;
}
.false .bot button{
  width: 22%;
  height: .6rem;
  background: #fff;
  border-radius: .05rem;
  color: #333;

  border:.02rem solid #ccc;
}
.mask{
  width: 7.5rem;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #000;
  opacity: .7;
  display: none;
}
.mask .success{
  width: 6rem;
  height: 4rem;
  background: #fff;
  position: fixed;
  top:50%;
  margin-top: -2rem;
  left: 50%;
  margin-left: -3rem;
  display: none;
  border-radius: 10px;
}
.mask .success img{
  width: 3rem;
  height: 2.5rem;
  margin-left: 1.5rem;
}
.mask .success p{
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  font-size: 18px;
  color: #e6133c;
}
</style>