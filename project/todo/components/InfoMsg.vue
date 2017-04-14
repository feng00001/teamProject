<template>
  <div class="msg">
    <span>您的用户名已存在</span>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'infomsg',
  methods: {
    
  }
}
</script>


<style scoped>
  .msg{
    width: 6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    background: black;
    opacity: 0.6;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin: 0.6rem auto;
    border-radius: 1rem;
  }
</style>