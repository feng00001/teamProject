<template>
<div id="apply">
  <div>
    <div class="apply_order">
        <router-link to="/cart"  active-class="special"><i class="iconfont">&#x3484;</i></router-link>
        <p class="p_ord">确认订单</p>
    </div>
    <div class="addr">
        <i class="iconfont l">&#xe62f;</i>
        <input type="text" class="l" placeholder="请添加一个收货地址"/>
        <a href="#" class="r iconfont">&#xe656;</a>
    </div>
    <div class="time">
        <span class="l"></span>
        <p>送达时间</p>
        <div class="time_r ">
        尽快送达 | 预计<span id="time">00.00</span>
        </div>
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
      <div class="mid" v-for="item in $store.state.applylist">
        <dl >
          <dd class="l">
             <img :src="item.img" class="l">
          </dd>
          <dt class="l">
            <p class="l">{{item.shopname}}</p>
            <span class="r">￥{{item.price}}</span>           
            <span class="r" > x {{item.quantity}}</span> 
          </dt>
        </dl>
      </div>
      <ul class="count">
          <li >共{{sum}}件商品</li>
          <li >合计:¥{{totle}}</li>
          <li >(含运费 ￥0.00)</li>
        </ul>
    </div>
    <div class="sum">
          <div>
            <span class="l">商品总额</span>
            <a href="#" class="r">¥{{totle}}</a>
          </div>
          <div>
            <span class="l">运费总计</span>
            <a href="#" class="r">¥0</a>
          </div>
    </div>
    <footer>
        <span class="l">待支付¥{{totle}}</span>
        <a class="r sub" >提交订单</a>
    </footer>
    </div>
    <div class="payDetail">
      <div class="mask"></div>
      <div class="paylist">
        <div class="top">
          <router-link to="/myorder"  active-class="special">
            <i class="iconfont">&#xe624;</i>
          </router-link>
          <h3 class="r">付款详情</h3>
        </div> 
        <ul class="user">
          <li>
            <span class="l">账号</span>
            <i class="r">18811119999</i>
          </li>
          <li>
            <span class="l">需付款</span>
            <i class="r">{{totle}}元</i>
          </li>
        </ul>
        <button class="btn">确认付款</button>
      </div>      
    </div>
    <div class="success">
      <img :src="$store.state.testImg[14]">
      <p>支付成功</p>
    </div> 
    <div class="mask2"></div> 
</div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import util from '../../../util/common.js'

export default {
  name: 'payment',
  methods: {
  },
 mounted (){
    var that = this;
    var userid = util.getCookie("user");
    var orderid = 0;
    console.log("c:"+this.$route.params.checkid)
    $.ajax({
      method:"get",
      url:"/exp/apply/",
      data: {
        userid: userid,
        checkid: this.$route.params.checkid
      },
      success:function(data){
        // 对store的操作需要调用mutations
        console.log(data);
        that.$store.commit('setApplylist',data)      
      }
    })
    $('.sub').click(function(){
      $('.payDetail').css({
        display:'block'
      });
      var item = that.$store.state.applylist[0]
      console.log(item.shopid+'---'+item.price+'---'+item.quantity)
      $.ajax({
        type: "get",
        url: "/exp/apply/doorder",
        data: {
          totle: that.totle,
          shopid: item.shopid,
          price: item.price,
          quantity: item.quantity
        },
        success: function(data){
          orderid = data;
        }
      })
    })
    $('.btn').click(function(){
      $('.success').css({
        display:'block',
        zIndex:"100"
      });
      $('.mask2').css({
        display:'block'
      })
      $.ajax({
        type: "get",
        url: "/exp/apply/pay",
        data: {
          totle: that.totle,
          orderid: orderid
        },
        success: function(data){
          setTimeout(function(){
            location.href='#/myorder'
          },3000)
        }
      })
      
    })
  },
   computed: {
    totle: function() {
      var ret = 0
      this.$store.state.applylist.map((el,idx) => {
        console.log('price:'+el.price + 'count:'+el.quantity)
         ret += el.price*el.quantity
        
      })
      return ret.toFixed(2)
    },
    sum: function(){
      var ret = 0
      this.$store.state.applylist.map((el,idx) => {
        console.log( 'count:'+el.quantity)
         ret += el.quantity
        
      }) 
      return ret
    }
  }
}
</script>
<style scoped>
#apply{
    height: 100%;
    width: 7.5rem;
    position: relative;
    overflow: hidden;
    background: #f5f5f5;
    box-sizing: border-box;
    overflow-y: scroll;
    background: #f5f5f5;
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
}
#apply .addr i{
    color: #4d9feb;
    display: inline-block;
}
#apply .addr input{
    color: #333;
    width: 5rem;
    outline: none;
    border:0;
    margin-top: .55rem;
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
    font-weight: bolder;
    margin-left: 0.3rem;
    display: inline-block;
    font-size: 14px;
}
#apply .time .time_r{
    font-size: 0.28rem;
    color: #e6133c;
    margin-left: 2.9rem;
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
    font-size: 14px;
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
    font-size: 14px;
    display: inline-block;
}
#apply .pay .fapiao{
    border-bottom: 0;
    font-size: 14px;
}
#apply .pay .fapiao a{
    font-size: 14px;
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
#apply .sum{
  margin-top: .5rem;
  width: 7.5rem;
  height: 3rem;
  background: #fff;
  box-sizing: border-box;
  padding:.2rem;
}
#apply .sum div{
  height: .7rem;
  width: 100%;
  line-height: .7rem;
  border-bottom: .02rem solid #ccc;
}
 #apply .sum div:last-child{
  border:0;
 }
 #apply .sum div a{
  display: inline-block;
  margin-right: .2rem;
 }
.false{
  width: 7.5rem; 
  padding:.2rem 0;
  box-sizing: border-box;
}
.false .mid{
  overflow-y:scroll; 
  clear: both;
  background: #fff;
  box-sizing: border-box;
  padding:.1rem .2rem;
  margin:.2rem 0;
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
  width: 4rem;
  height: .66rem;
}
.false .mid dl dt span{
  width: 1.5rem;
  height: .4rem;
  line-height: .4rem;
  padding-left: .5rem;
  box-sizing: border-box;
  display: block;
}
.false .count{
  height: .7rem;
  width: 100%;
  margin-top: .3rem;
  line-height: .7rem;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
}
.false .count li{
  display: inline;
  width: 1.4rem;
  padding:.15rem;
}
#apply .payDetail{
  width: 7.5rem;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: none;
  transition: all .5s linear;
}
#apply .payDetail .mask{
  width: 100%;
  height: 65%;
  background: #000;
  opacity: .7;
}
#apply .payDetail .paylist{
  width: 100%;
  height: 35%;
  background: #fff;
  box-sizing: border-box;
  padding: .2rem;
  font-size: 14px;
}
#apply .payDetail .paylist .top{
  height: .8rem;
  width: 100%;
  line-height: .8rem;
  border-bottom: .02rem solid #ccc;
  box-sizing: border-box;
}
#apply .payDetail .paylist .top h3{
  font-weight: 100;
}
#apply .payDetail .paylist .user{
  width: 100%;
  line-height: .8rem;
  box-sizing: border-box;
}
#apply .payDetail .paylist .user li{
  border-bottom: .02rem solid #ccc;
  width: 100%;
  height: .8rem;
}
#apply .payDetail .paylist button{
  height: .6rem;
  width: 7rem;
  background: #e6133c;
  border:0;
  color: #fff;
  margin-top: .3rem;
  border-radius: 5px;
}
#apply .success{
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
#apply .success img{
  width: 3rem;
  height: 2.5rem;
  margin-left: 1.5rem;
}
#apply .success p{
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  font-size: 18px;
  color: #e6133c;
}
#apply .mask2{
  width: 7.5rem;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: none;
  z-index:90;
  background: #000;
  opacity: .8;
}
</style>

