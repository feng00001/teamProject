<template>
  <div class="cart">
  	<div id="header">
  		<span class="l">
        <router-link to="/slotlist">
  			<i class="iconfont">&#x3484;</i>
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
      <router-link to="/mine/logon" class="r iconfont">&#xe656;</router-link>
    </div>
    <div id="cart-content" v-if="$store.state.cartlist.length===0">
      <img :src="$store.state.cartImg">
      <p>购物车快饿扁了／(ToT)／～～</p>
      <p>主人快点给我挑点宝贝吧</p>
      <router-link to="/shopList">去逛逛～走你</router-link>
    </div>
    <div id="cont" v-else>
      <ul class="all">
        <li class="list" v-for="item in $store.state.cartlist">
          <div class="left">
            <input type="checkbox" checked v-model="$store.state.isChecked" ref="checkshop" :value="item.shopcarid" class="checkshop"/>
          </div>
          <div class="center">
            <img :src="item.img">
          </div>
          <div class="right">
            <p class="shopname">{{item.shopname}}</p>
            <p class="blink">闪</p>
            <div class="c-p">
              <span class="new-price">￥{{item.price}}</span>
              <span class="r">
                  <table border="0.005" cellspacing="0" cellpadding="0">
                    <tr>
                      <td class="minus" @touchend="minus(item.shopcarid,$event)">-</td>
                      <td class="count">{{item.quantity}}</td>
                      <td class="add" @touchend="add(item.shopcarid)">+</td>
                    </tr>
                  </table>
              </span>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <input type="checkbox" checked v-model="$store.state.isChecked" ref="checkall" />全选 
      <span class="totle">
        合计：
      </span>
      <!-- <router-link to="/apply"> -->
        <button class="r" @touchend="apply">去结算</button>
      <!-- </router-link> -->
      <span class="r" ref="totle">
        ￥{{totle}}
      </span>
      
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import $ from 'jquery'
import BottomNav from './BottomNav.vue'
import { mapMutations, mapActions} from 'vuex'
import util from '../../../util/common.js'

export default {
  mounted (){
    var userid = util.getCookie("user");
    var that = this
    this.selall()

  },
  computed: {
    totle: function() {
      var ret = 0
      this.$store.state.cartlist.map((el,idx) => {
        console.log('price:'+el.price + 'count:'+el.quantity)
         ret += el.price*el.quantity
        
      })
      return ret.toFixed(2)
    }
  },
  methods: {
    minus(co,e) {
      var userid = util.getCookie("user");
      var that = this;
      if($(e.target).next().html()-1 >= 0){
        $.ajax({
          type: 'get',
          url: '/exp/cartcount/minus',
          data: {
            userid: userid,
            shopcarid: co
          },
          success: function(data){
            that.selall()
          }
        })
      }
    },
    add(co) {
      var userid = util.getCookie("user");
      var that = this
      $.ajax({
        type: 'get',
        url: '/exp/cartcount/add',
        data: {
          userid: userid,
          shopcarid: co
        },
        success: function(data){
          that.selall()
        }
      })
    },
    selall() {
      var userid = util.getCookie("user");
      var that = this
      $.ajax({
        type: 'get',
        url: '/exp/cartcount/alls',
        data: {
          userid: userid
        },
        success: function(data){
          console.log(data)
          that.$store.commit('setCartlist',data)
       
        }
      })
    },
    apply() {
      var param = ""
      $(".checkshop:checked").each(function(ids,element){
        if(ids===$(".checkshop:checked").length-1){
          param = param + element.value
        }else{
          param = param + element.value + ","
        }
      })
      location.href="#/apply/"+param
    }
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
  #cont{
    background: #fff;
    overflow: hidden;
  }
  #cont .all .list{
    display: flex;
    overflow: hidden;
    padding:.3rem;
  }
  #cont .all .list .left{
    height:100%;
    width:.4rem;
    margin-top: .5rem;
  }
  #cont .all .list .center{
    height:100%;
    width:1.3rem;
    margin:0 .3rem;
    margin-top:.1rem;
  }
  #cont .all .list .center img{
    width: 1.3rem;
    height: 1.3rem;
    border:.005rem solid #ccc;
  }
  #cont .all .list .right{
    height:100%;
    flex:1;
  }
  input[type="checkbox"]:checked {
    border-color: #e6133c;
    background-color: #e6133c;
    width: .4rem;
    height: .4rem;
    color:white;
    position: relative;
  }
  input[type="checkbox"]:checked::after{
    display: inline-block;
    position: absolute;
    top:0;
    left: -.05rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    color: white;
    content: "√";
  }
  input[type="checkbox"]{
      user-select: text;
      -webkit-appearance: none;
      position: relative;
      border: .05rem solid #aaaebe;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background-color: #fff;
      vertical-align: middle;
      float: left;
      outline: none;
      width: .4rem;
      height: .4rem;
      cursor: pointer;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  #cont .all .list .right .shopname{
    color: #333333;
    font-size: 15px;
    line-height: .65rem;
    height: .65rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 4rem;
  }
  #cont .all .list .right .shopname::before{
    display: inline-block;
    width: .7rem;
    line-height: .35rem;
    height: .35rem;
    text-align: center;
    content: "\5168\7403\8D2D";
    border: .05rem solid #8859cd;
    border-radius: .1rem;
    font-size: 12px;
    margin-right: .1rem;
    padding: 0 .1rem;
    color: #8859cd;
  }
  #cont .all .list .right .blink{
    font-size: 14px;
    color: #fff;
    line-height: .35rem;
    background: #f0ae00;
    padding: 0 .1rem;
    border-radius: .1rem;
    width: .3rem;
    text-align: center;
    margin: .1rem 0;
  }
  .right .c-p span.r table{
    border:.005rem solid #ccc;
  }
  .right .c-p span.r table td{
    padding:0 .1rem;
  }
  .right .c-p span.r table td:nth-of-type(2){
    border-left:.005rem solid #ccc;
    border-right:.005rem solid #ccc;
  }
  .right .c-p .new-price{
    color:#e6133c;
  }
  .footer{
    position: fixed;
    bottom:1.2rem;
    left:0;
    width:100%;
    line-height: 1rem;
    background:#fff;
  }
  .footer button{
    width: 2.5rem;
    background: #e6133c;
    line-height: 1rem;
    height: 1rem;
    border:0;
    text-align: center;
    font-size: 14px;
    color: #fff; 
  }
  .footer input{
    margin: .3rem;
  }
  .footer .totle{
    margin-left: .3rem
  }
  .footer span.r{
     margin-right: .3rem
  }
</style>