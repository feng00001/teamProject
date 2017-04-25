<template>
  <div class="parameter">
    <ul>
      <li class="first">基本信息</li>
      <li>
        <span class="left l">种类</span>
        <span class="right l">种类</span>
      </li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">产地</span>
      </li>
      <li>
        <span class="left l">种类</span>
        <span class="right l">种类</span>
      </li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">产地</span>
      </li>
      <li>
        <span class="left l">种类</span>
        <span class="right l">种类</span>
      </li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">产地</span>
      </li>
      <li class="second">规格参数</li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">产地</span>
      </li>
      <li class="second">产地</li>
      <li>
        <span class="left l">产地</span>
        <span class="right l">产地</span>
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