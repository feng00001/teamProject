<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div class="container">
    <div class="head">
        <a href="#/myself"><i class="iconfont">&#x3484;</i></a>
        <div class="logo">
            <i></i>
            设置
        </div>
    </div>
    <div class="body">
        <div class="bodyitem photo">
            <span>头像</span>
            <img class="photo" :src="$store.state.userphone"/>
        </div>
        <div class="bodyitem">
            <span>昵称</span>
        </div>
        <div class="bodyitem">
            <span>性别</span>
        </div>
        <div class="bodyitem">
            <span>出生日期</span>
        </div>
        <div class="bodyitem">
            <span>我的车牌</span>
        </div>
        <div class="bodyitem">
            <span>其他个人资料</span>
        </div>
    </div>
    <div class="body">
        <div class="bodyitem">
            <span>地址管理</span>
        </div>
        <div class="bodyitem">
            <span>安全中心</span>
        </div>
    </div>
    <button @click="signout">退出当前登陆账号</button>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import infomsg from './InfoMsg.vue'
import util from '../../../util/common.js'


export default {
  methods: {
    signout () {
        util.deleteCookie("user");
        location.href = "#/mine"
    }
  },
  components: {
    infomsg
  } 
}
</script>
<style scoped>

    .container {
        width: 7.5rem;
    }
    .container .head {
        position: relative;
        width: 7.5rem;
        height: 0.9rem;
        border-bottom: 0.025rem solid #dedede;
        line-height: 0.9rem;
        background: #fff;
    }
    .container .head a{
        padding-left: 0.2rem;
    }
    .container .head .logo {
        position: absolute;
        top: 0;
        left: 2.75rem;
        width: 2rem;
        text-align: center;
        color: #333333;
        line-height: 0.9rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 0.3rem;
    }
    .container .head .regis {
        float: right;
        padding-right: 0.25rem;
        color: #e6133c;
    }
    .container .body {
        width: 7.5rem;
        background: #fff;
        margin-top: 0.2rem;
    }
    .container .body .bodyitem {
        padding: 0.3rem 0.3rem;
        border-top: 1px solid #eeeeee;
    }
    .container .body .photo {
        line-height: 1.3rem;
    }
    .container .body .photo img {
        float: right;
        border-radius: 50%;
        width: 1.3rem;
        height: 1.3rem;
    }
    .container button {
        margin: 0.3rem;
        width: 6.9rem;
        height: 0.8rem;
        background: #ff0028;
        color: #fff;
        border: 0;
        border-radius: 0.2rem;
    }
</style>
