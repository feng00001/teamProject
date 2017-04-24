<template>
  <div class="detail-report">
    
    <div id="main">
      <div class="banner">
        <mt-swipe :auto="4000" >
          <mt-swipe-item>
            <img :src="$store.state.classifyImg[2]">
          </mt-swipe-item>
          <mt-swipe-item>
            <img :src="$store.state.classifyImg[2]">
          </mt-swipe-item>
          <mt-swipe-item>
            <img :src="$store.state.classifyImg[2]">
          </mt-swipe-item>
          <mt-swipe-item>
            <img :src="$store.state.classifyImg[2]">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="limit">
        <span class="l"><span>|</span>抢购（限购：2件）</span>
        <span class="r">剩余:12天04:03:00</span>
      </div>
      <div class="content">
        <div class="product-name">
          <h1>肌肤之钥 CPB 光透妆前乳 SPF24 PA++ 30ml 光凝 妆前霜 遮瑕 控油 保湿补水 隔离霜 防晒</h1>
          <p class="specia">因特殊原因，本商品于订单交易成功日起5-7个工作日发货，介意者慎拍！由此带来的不便敬请谅解。</p>
          <p class="price">￥<span>577.0</span></p>
          <p class="sale">促销</p>
          <p class="server">
            <span class="l">服务</span>
            <span class="l">
              <p>由联营商发货,并由百联提供售后服务</p>
              <p>7天无理由退换货</p>
            </span>
          </p>
        </div>
        <div class="addr">
          <span class="l">送至</span>
          <span class="l">
              <p class="l">上海市-市辖区-黄浦区</p>
              <p class="l">免运费</p>
              <p>3天内发货</p>
          </span>
          <span class="r">
            <router-link to="/classify">
              <i class="iconfont">&#xe656;</i>
            </router-link>
          </span>
        </div>
        <!-- 评价 -->
        <div class="evaluate">
          <div>
            <span class="l">商品评价<span>93%</span>好评率</span>
            <router-link to="/classify" class="r">
              <i class="iconfont">&#xe656;</i>
            </router-link>
            <span class="r">（30条评论）</span>
          </div>
          
          <ul>
            <li>
              <img :src="$store.state.classifyImg[4]" class="l">
              <div class="l">
                  <div>
                      <span class="l">177***7755</span>
                      <span class="r">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                      </span>
                  </div>

                  <div>挺好用的，美白效果好</div>
                  <img :src="$store.state.classifyImg[5]" class="l">
              </div>
            </li>
            <li>
              <img :src="$store.state.classifyImg[4]" class="l">
              <div class="l">
                  <div>
                      <span class="l">177***7755</span>
                      <span class="r">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                          <img :src="$store.state.classifyImg[6]" class="l">
                      </span>
                  </div>

                  <div>挺好用的，美白效果好</div>
                  <img :src="$store.state.classifyImg[5]" class="l">
              </div>
            </li>
          </ul>
          <div>
            <button>有图评论(10)</button>
          </div>
        </div>

        <div class="flagship-store">
          <img :src="$store.state.classifyImg[7]" class="l">
          <span class="l">赛贝格</span>
          <router-link to="/classify" class="r">
              <i class="iconfont">&#xe656;</i>
          </router-link>
        </div>
        <div class="guess-what-you-like">
          <ul class="type" @touchend='switchover($event)'>
            <li class="every-look" active-class="special">大家都在看</li>
            <li class="hot" active-class="special">热门商品</li>
            <li class="buy-buy-buy" active-class="special">买买买</li>
          </ul>
          <div class="look" v-if="$store.state.isShow==='everyLook'">
            <mt-swipe :auto="4000" >
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="look" v-else-if="$store.state.isShow==='hot'">
            <mt-swipe :auto="4000" >
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>333.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>333.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>333.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>333.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>333.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="look" v-else="$store.state.isShow==='buy'">
            <mt-swipe :auto="4000" >
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
              <mt-swipe-item>
                <ul>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                  <li>
                    <img :src="$store.state.classifyImg[8]">
                    <p class="describe">奥丽肤 紫草保湿霜180g 紫色/无香 单瓶装 日本进口</p>
                    <p class="dPrice">￥<span>222.22</span></p>
                  </li>
                </ul>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import { Swipe, SwipeItem} from 'mint-ui'
var obj = {};
obj[Swipe.name]= Swipe;
obj[SwipeItem.name]= SwipeItem;
export default {
  name: 'detail-report',
  mounted (){
    $('.mint-swipe .mint-swipe-indicators .is-active').css({
      background:'red'
    })
  },
  methods: {
    switchover(e) {
      if(e.target.className === 'every-look'){
        this.$store.commit('setIsShow', 'everyLook')
      }else if(e.target.className === 'hot'){
        this.$store.commit('setIsShow', 'hot')
      }else{
        this.$store.commit('setIsShow', 'buy')
      }
      
    },
    ...mapActions([
      
    ])
  },
  components: obj
}
</script>


<style scoped>
    .special{
  background:red;
}
#main{
  flex:1;
  margin: 1rem 0;
}
#main .banner{
  height:8rem;
}
#main .banner img{
  width:7.5rem;
  height:8rem;
}

#main .limit{
    line-height: .7rem;
    height: .7rem;
    padding: 0rem .2rem;
}
#main .limit span.l span{
  color:#f60;
  font-weight: bold;
  padding-right: .1rem
}
#main .content .product-name{
  background:#fff;
}
#main .content .product-name h1{
    margin: .24rem .2rem .08rem;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: .38rem;
    max-height: 1.12rem;
    text-overflow: ellipsis;
    font-weight: 500
}
#main .content .product-name h1::before{
  content: "联营";
  display:inline-block;
  border: 1px solid #E6133C;
    font-size: 12px;
    border-radius: .06rem;
    padding: 0 .1rem;
    line-height: .32rem;
    color: #E6133C;
    margin-right: .14rem;
}
#main .content .product-name .specia{
  padding: 0 .2rem;
    color: #999;
    line-height: .32rem;
    font-size: 12px;
}
#main .content .product-name .price{
  margin:0 .2rem;
  padding: .2rem 0;
    line-height: 1;
    color: #E6133C;
    border-bottom: 1px solid #e7e7e7;
    overflow: hidden;
    font-size: 22px;
    font-weight: bold;
}
#main .content .product-name .price::after{
  content: "闪";
  display:inline-block;
  padding: .04rem .08rem;
    background: #f0ae00;
    color: #FFFFFF;
    font-size: 12px;
    border-radius: .08rem;
    margin-left: .16rem;
}
#main .content .product-name .sale{
  margin:0 .2rem;
  padding: .2rem 0;
    border-bottom: 1px solid #E7E7E7;
    overflow: hidden;
}
#main .content .product-name .server{
  margin:0 .2rem;
  padding: .2rem 0;
    line-height: 1;
    overflow: hidden;
}
#main .content .product-name .server span:nth-of-type(1){
  margin-right:.3rem;
}
#main .content .product-name .server span:nth-of-type(2) p:nth-of-type(2){
  font-size: 12px;
  margin-top: .2rem;
  padding-left:.4rem;
  height:.3rem;
  line-height:.3rem;
  background:url('http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/serve-logo.png') no-repeat left ;
  background-size: .3rem .3rem
}
#main .content .addr{
  background: #FFF;
  margin:0.3rem 0;
  padding: .3rem .2rem;
  overflow: hidden;
}
#main .content .addr span:nth-of-type(1){
  margin-right:.3rem;
}
#main .content .addr span:nth-of-type(2) p:nth-of-type(1){
  font-size: 12px;
  padding-left:.4rem;
  height:.3rem;
  line-height:.3rem;
  background:url('http://m.bl.com/h5-web/ui/newH5resource/css/i/single-detail/receive.png') no-repeat left ;
  background-size: .3rem .3rem;
  margin-right:.3rem;
}
#main .content .addr span:nth-of-type(2) p:nth-of-type(3){
  clear:both;
  margin-top:.5rem;
  font-size: 10px;
}
#main .content .evaluate{
  background:#fff;
  padding: 0 .2rem;

}
#main .content .evaluate>div:nth-of-type(1){
  height:.88rem;
  line-height:.88rem;
}
#main .content .evaluate>div:nth-of-type(1) span.l span{
  margin-left:.3rem;
  color:#E6133C;
}
#main .content .evaluate>div:nth-of-type(1) span.r{
  color:#999;
}
#main .content .evaluate ul li{
  overflow: hidden;
  border-bottom: .005rem solid #ccc;
  padding: .3rem 0;
}
#main .content .evaluate ul li>img:nth-of-type(1){
  width: .72rem;
  height: .72rem;
  border-radius: 100%;
  margin-right: .2rem;
}
#main .content .evaluate ul li div.l>div:nth-of-type(1){
  margin-bottom: .2rem;
  overflow: hidden;
  width: 5.86rem;
}
#main .content .evaluate ul li div.l>div:nth-of-type(1) span.r img{
  width: .25rem;
  height: .25rem;
  margin-left: .08rem;
}
#main .content .evaluate ul li div.l>div:nth-of-type(2){
  margin-bottom: .3rem
}
#main .content .evaluate>div:nth-of-type(2){
  text-align: center;
  padding: .3rem 0;
}
#main .content .evaluate>div:nth-of-type(2) button {
  height: .65rem;
  min-width: 2rem;
  padding: 0 .16rem;
  border: .005rem solid #E7E7E7;
  border-radius: .08rem;
  font-size: .24rem;
  color: #666666;
  background:#fff;
  display: inline-block;
}
#main .content .flagship-store{
  margin:0.3rem 0;
  padding: .3rem .2rem;
  background: #fff;
  overflow: hidden;
  line-height: .98rem;
}
#main .content .flagship-store img{
  margin-right: .2rem;
  width: 1.8rem;
  height: .98rem;
  overflow: hidden;
  border: 1px solid #dad9d9;
}
#main .content .guess-what-you-like{
  background:#fff;
  padding:0 .3rem;
}
#main .content .guess-what-you-like ul.type{
  line-height: 1rem;
  display: flex;
  flex-direction: row;
}
#main .content .guess-what-you-like ul.type li{
  flex:1;
  text-align: center;
  line-height: 1rem
}
#main .content .guess-what-you-like div.look{
  height:7.5rem;
}
#main .content .guess-what-you-like div.look ul{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  width:100%;
}
#main .content .guess-what-you-like div.look ul li{
  width:33.33%;
  padding-left: .35rem;
  box-sizing: border-box;
  margin-top: .3rem
}
#main .content .guess-what-you-like div.look ul li img{
  width:100%;
}
#main .content .guess-what-you-like div.look ul li p.describe{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .24rem;
  line-height: .32rem;
  padding: 0 .06rem;
  margin: .06rem 0;
  height: .64rem;
  color: #666666;
}
.mint-swipe .mint-swipe-indicators{
  width:1rem;
  height:.3rem;
  background:green;
}
.mint-swipe-indicators .is-active{
  background:red !important;
}
  
</style>