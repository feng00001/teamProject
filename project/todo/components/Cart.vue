<template>
  <div class="cart">
  	<div id="header">
  		<span class="l">
        <router-link to="/classify">
  			 &gt;
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
      <router-link to="/mine/logon" class="r">&lt;</router-link>
    </div>
    <div id="cart-content" style="display:none;">
      <img :src="$store.state.cartImg">
      <p>购物车快饿扁了／(ToT)／～～</p>
      <p>主人快点给我挑点宝贝吧</p>
      <router-link to="/shopList">去逛逛～走你</router-link>
    </div>
    <div id="cont">
      <ul class="all">
        <li class="list">
          <div class="left">
            <input type="checkbox">
          </div>
          <div class="center">
            <img :src="$store.state.classifyImg[1]">
          </div>
          <div class="right">
            <p class="shopname">肌肤之钥 CPB 光透妆前乳 SPF24 PA++ 30ml 光凝 妆前霜 遮瑕 控油 保湿补水 隔离霜 防晒</p>
            <p class="blink">闪</p>
            <div class="c-p">
              <span class="new-price">￥557.00</span>
              <del class="old-price">￥806.00</del>
              <span class="r">
                  <table border="0.005" cellspacing="0" cellpadding="0">
                    <tr>
                      <td class="minus">-</td>
                      <td class="count">1</td>
                      <td class="add">+</td>
                    </tr>
                  </table>
              </span>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import { mapMutations, mapActions} from 'vuex'

export default {
  methods: {
    
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
  #cont .all .list .left input[type="checkbox"]:checked {
    border-color: #e6133c;
    background-color: #e6133c;
    width: .4rem;
    height: .4rem;
    color:white;
    position: relative;
  }
  #cont .all .list .left input[type="checkbox"]:checked::after{
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
  #cont .all .list .left input[type="checkbox"]{
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
    width: .6rem;
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
</style>