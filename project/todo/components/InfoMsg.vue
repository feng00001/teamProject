<template>
  <div class="msg">
    <span>{{$store.state.mineMsg}}</span>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'infomsg',
  methods: {
    clearMsg (that,callback) {
        setTimeout(function(){
            that.$store.commit('setMineMsg')
            if(callback){
              callback();
            }
        },1500)
    }
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