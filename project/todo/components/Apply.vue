<template>
<div id="apply">
    <div>
        <div class="apply_order">
            <a class="iconfont" >&#x3484;</a>
            <p class="p_ord">确认订单</p>
        </div>
        <div class="addr">
            <i class="iconfont l">&#xe62f;</i>
            <p class="l">请添加一个收货地址</p>
            <a href="#" class="r iconfont">&#xe656;</a>
        </div>
        <div class="time">
            <span class="l"></span>
            <p>送达时间</p>
            <div class="time_r ">
            尽快送达 | 预计<span id="time">00.00</span>
            </div>
            <!-- <a href="#" class="r iconfont">&#xe656;</a> -->
        </div>
        <div class="pay">
            <span class="top">
                <p class="l">支付方式</p>
                <a href="#" class="r iconfont">在线支付 &#xe656;</a>
            </span>
            <span class="bottom">
                <p class="l">优惠券</p>
                <a href="#" class="r iconfont">未选择 &#xe656;</a>
            </span>
            <span class="fapiao">
                <p class="l">发票信息</p>
                <a href="#" class="r iconfont">电子发票-明细-个人&#xe656;</a>
            </span>
        </div>
        <div class="false">
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
            </dl>ß
          </div>
          <ul class="count">
              <li >共1件商品</li>
              <li >合计:$119.00</li>
              <li >(含运费 ￥0.00)</li>
            </ul>
        </div>
        <div class="sum">
            
                <span class="l">商品总额</span>
                <a href="#" class="r">¥199</a>
                <span class="l">运费总计</span>
                <a href="#" class="r">¥199</a>
            
        </div>
        <footer>
            <span class="l">待支付¥22</span>
            <a class="r" >提交订单</a>
        </footer>
    </div>
</div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'payment',
  methods: {
    
  }
}
</script>
<style scoped>

    #apply{
        width: 7.5rem;
    /*  height: 100%;*/
        overflow: hidden;
        background: #f5f5f5;
        box-sizing: bapply_order-box;
    }
    #apply .apply_order{
        height: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        font-size: 0.36rem;
        font-weight: bold;
    }
    #apply .apply_order a{
        float: left;
        text-indent: 0.2rem;
        display: inline-block;
    }
    #apply .apply_order .p_ord{
        display: inline-block;
        margin-left: -0.2rem;
    }
    #apply .addr{
        height: 1.5rem;
        background: #fff;
        line-height: 1.5rem;
        margin-bottom: 0.24rem;
        /*background: #fff url(../resourse/images/pay_bg.png) repeat-x  0 bottom;*/
    }
    #apply .addr i{
        color: #4d9feb;
        display: inline-block;
        margin-left: 0.30rem;
    }
    #apply .addr p{
        color: #333;
        width: 5rem;
        display: inline-block;
        margin-left: 0.30rem;
        font-size: 0.32rem;
    }
    #apply .addr a{
        color: #aaa;
        display: inline-block;
        margin-right: 0.30rem;
    }
    #apply .time{
        height: 0.76rem;
        background: #fff;
        line-height: 0.76rem;
        margin-bottom:0.24rem;
    }
    #apply .time .l{
        display: inline-block;
        width: .1rem;
        height: 100%;
        background: #e6133c;
    }
    #apply .time p{
        color: #333;
        font-weight: bolder;
        margin-left: 0.3rem;
        display: inline-block;
        font-size: 0.32rem;
    }
    #apply .time .time_r{
        font-size: 0.28rem;
        color: #e6133c;
        margin-left: 2.45rem;
        display: inline-block;
    }
    #apply .time .r{
        color: #aaa;
        display: inline;
        margin-right: 0.30rem;
    }
    #apply .pay{
        width: 7.5rem;
        height: 2.4rem;
        background: #fff;
        margin-bottom:0.24rem;
    }
    #apply .pay span{
        display: block;
        height: 0.8rem;
        padding: 0  0.3rem;
        line-height: 0.8rem;
        border-bottom: 0.02rem solid #e8e8e8;
    }
    #apply .pay .top p,#apply .pay .top a,#apply .pay .bottom p,#apply .pay .bottom a{
        display: inline-block;
        color: #9c9c9c;
    }
    #apply .pay .top p{
        color: #333;
    }
    #apply .pay .fapiao{
        border-bottom: 0;
    }
    
    
    #apply footer{
        height: 0.9rem;
        line-height: .9rem;
        position: fixed;
        bottom: 0;
        color: #fff;
        width: 100%;
        font-size: .36rem;
        background: #3c3c3c;
    }
    #apply footer span{
        text-indent: .3rem;
        display: inline-block;
        width: 5.44rem;
        
    }
    #apply footer a{
        border:0;
        color: #fff;
        font-size: .34rem;
        text-align: center;
        background: #e6133c;
        height: .9rem;
        width: 2.06rem;
    }
    .false{
      width: 7.5rem;
      height:2.5rem;
      background: #fff; 
      padding:.2rem 0;
      box-sizing: border-box;
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
      box-sizing: border-box;
      padding-left: 1rem;
      text-align: center;
    }
    .false .count li{
      display: inline;
      width: 1.4rem;
      padding:.15rem;
    }
    .apply .sum{
        width: 7.5rem;
        height: 1.5rem;
        background: #fff;
        
    }
</style>

