<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div class="container">
    <nav>
        <ul>
            <li class="active">
                <a href="#/mine/logon">账户密码登录</a>
            </li>
            <li>
                <a href="#/mine/logonphone">手机动态密码登录</a>
            </li>
        </ul>
    </nav>
    <div class="inputtext">
        <div class="formgroup">
            <label><span>帐号</span></label>
            <input type="text" placeholder="请输入账号" ref="username"/>
        </div>
        <div class="formgroup">
            <label><span>密码</span></label>
            <input type="password" placeholder="请输入密码" ref="password"/>
        </div>
    </div>
    <!-- <div class="setoption">
        <input type="checkbox" class="checkbox" />
        <span>两周内免登陆</span>
        <a class="forget" href="javascript:;">忘记密码？</a>
    </div> -->
    <div class="btngroup">
        <button @click="checkuser">登录</button>
    </div>
    <infomsg v-if="$store.state.mineMsg"></infomsg>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'
import $ from 'jquery'
import infomsg from './InfoMsg.vue'

export default {
  methods: {
    checkuser(){
        var that = this;
        let username = this.$refs.username.value;
        let password = this.$refs.password.value;
        if(!username){
            this.$store.commit('setMineMsg', "用户名不能为空")
            infomsg.methods.clearMsg(that)
            return;
        }
        if(!password){
            this.$store.commit('setMineMsg', "密码不能为空")
            infomsg.methods.clearMsg(that)
            return;
        }
        $.ajax({
            url: "/exp/mine/logon",
            data: {
                username: username,
                password: password
            },
            success: function(data){
                if(data){
                    that.$store.commit('setMineMsg', data)
                    infomsg.methods.clearMsg(that)
                }else{
                    that.$store.commit('setMineMsg', "登陆成功,正在为您跳转。。。")
                    infomsg.methods.clearMsg(that,function(){
                        location.href = "#/myself"
                    })
                }
            }
        })
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
        overflow-x: hidden;
    }
    .container nav {
        
    }
    .container nav ul {
        overflow: hidden;
    }
    .container nav ul li {
        width: 3.75rem;
        float: left;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        box-sizing: border-box;
        
    }
    .container nav ul li a {
        display: block;
        font-size: 0.28rem;
        color: #000;
        width: 3.75rem;
        height: 0.85rem;
        border-left: 0.025rem solid #dedede;
        border-bottom: 0.025rem solid #dedede;
    }
    .container nav ul li:nth-child(1) a {
        border-left: 0;
    }
    .container nav ul .active a {
        color: #e6133c;
        border-bottom: 0.05rem solid #e6133c;
        background: #fff;
    }
    .container .inputtext{

    }
    .container .inputtext .formgroup {
        position: relative;
        height: 1rem;
        border-bottom: 0.025rem solid #dedede;
    }
    .container .inputtext .formgroup label {
        position: absolute;
        left: 0;
        width: 1.5rem;
        height: 1rem;
        line-height: 1rem;
        /*text-align: center;*/
        font-size: 0.3rem;
        background: #fff;
    }
    .container .inputtext .formgroup label span {
        display: block;
        margin-left: 0.2rem;
    }
    .container .inputtext .formgroup input {
        position: absolute;
        left: 1.5rem;
        width: 6rem;
        height: 1rem;
        border: 0;
    }
    /*.container .setoption {
        width: 7.5rem;
        height: 1rem;
        line-height: 1rem;
        padding: 0 0.3rem;
    }
    .container .setoption .checkbox {
        width: 0.3rem;
        height: 0.3rem;
        border: 0.01rem solid #dedede;
        border-radius: 0.1rem;
        background: #fff;
    }
    .container .setoption .forget {
        float: right;
        padding-right: 0.7rem;
        color: #000;
    }*/
    .container .btngroup {
        width: 7.5rem;
        height: 1rem;
        padding: 0 0.2rem;
        line-height: 1rem;
        margin-top: .4rem;
    }
    .container .btngroup button {
        background: #e6133c;
        width: 7.1rem;
        height: 0.8rem;
        border: 0;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.3rem;
    }
</style>
