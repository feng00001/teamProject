<template>
  <div class="parameter">
    <ul>
      <li class="first">基本信息</li>
      <li>
        <span class="left l">种类</span>
        <span class="right l">洗护</span>
      </li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">China</span>
      </li>
      <li>
        <span class="left l">功效</span>
        <span class="right l">修复,深层洁净,控油平衡,去头屑</span>
      </li>
      <li>
        <span class="left l">适宜</span>
        <span class="right l">男女通用</span>
      </li>
      <li>
        <span class="left l">进口</span>
        <span class="right l">国产</span>
      </li>
      <li>
        <span class="left l">包装</span>
        <span class="right l">瓶装</span>
      </li>
      
      <li class="second">规格参数</li>
      <li>
        <span class="left l">容量</span>
        <span class="right l">750ml</span>
      </li>

    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'parameter',
  methods: {
    
  }
}
</script>


<style scoped>
 ul{
    margin: 1rem 0;
    width: 7.5rem;
    overflow: hidden;
    font-size: .18rem;
    color: #333;
  }
  ul li{
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    text-indent: .2rem;
    background: #fff;
    font-weight: bold;
    border-bottom: .02rem solid #ccc;
  }
  li.first,li.second{
    background: #f5f5f5;
  }
  li .right{
    margin-left: 2rem;
  }
</style>