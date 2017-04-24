<template>
  <div class="commence">
    <!-- 评价 -->
        <div class="evaluate">
          <div>
            <span class="l">全部评价<span>93%</span>好评率</span>
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
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'commence',
  methods: {
    
  }
}
</script>


<style scoped>
.commence .evaluate{
  background:#fff;
  padding: 0 .2rem;
  margin: 1rem 0;
}
.commence .evaluate>div:nth-of-type(1){
  height:.88rem;
  line-height:.88rem;
}
.commence .evaluate>div:nth-of-type(1) span.l span{
  margin-left:.3rem;
  color:#E6133C;
}
.commence .evaluate>div:nth-of-type(1) span.r{
  color:#999;
}
.commence .evaluate ul li{
  overflow: hidden;
  border-bottom: .005rem solid #ccc;
  padding: .3rem 0;
}
.commence .evaluate ul li>img:nth-of-type(1){
  width: .72rem;
  height: .72rem;
  border-radius: 100%;
  margin-right: .2rem;
}
.commence .evaluate ul li div.l>div:nth-of-type(1){
  margin-bottom: .2rem;
  overflow: hidden;
  width: 5.86rem;
}
.commence .evaluate ul li div.l>div:nth-of-type(1) span.r img{
  width: .25rem;
  height: .25rem;
  margin-left: .08rem;
}
.commence .evaluate ul li div.l>div:nth-of-type(2){
  margin-bottom: .3rem
}
.commence .evaluate>div:nth-of-type(2){
  text-align: center;
  padding: .3rem 0;
}
.commence .evaluate>div:nth-of-type(2) button {
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
  
</style>