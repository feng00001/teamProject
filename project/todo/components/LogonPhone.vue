<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div class="container">
    <nav>
        <ul>
            <li>
                <a href="#/mine/logon">账户密码登录</a>
            </li>
            <li class="active">
                <a href="#/mine/logonphone">手机动态密码登录</a>
            </li>
        </ul>
    </nav>
    <div class="inputtext">
        <div class="formgroup">
            <label><span>手机号</span></label>
            <input type="text" placeholder="请输入手机号" ref="phonenum"/>
        </div>
        <div class="checkgroup">
            <label><span>验证码</span></label>
            <input type="text" placeholder="请输入短信验证码" ref="msgphone"/>
            <button @click="getshortmsg" ref="getphonecode">获取短信验证码</button>
        </div>
    </div>
    <div class="btngroup">
        <button @click="logonphone">登录</button>
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
    logonphone() {
        var that = this;
        // 手机号码正则表达式
        let phonenumReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if(!phonenumReg.test(this.$refs.phonenum.value)){
            this.$store.commit('setMineMsg', "请填写正确的手机号码")
            infomsg.methods.clearMsg(this)
            return;
        }
        $.ajax({
            type: "GET",
            url: "/exp/mine/logonphone",
            data: {
                username: this.$refs.phonenum.value,
                msgphone: this.$refs.msgphone.value
            },
            success: function(data) {
                if(data){
                    that.$store.commit('setMineMsg', data)
                    infomsg.methods.clearMsg(that)
                    return;
                }
                that.$store.commit('setMineMsg', "登陆成功,正在为您跳转。。。")
                infomsg.methods.clearMsg(that,function(){
                    location.href = "#/myself"
                })
            }
        })
    },
    getshortmsg () {
        var that = this
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if(!reg.test(that.$refs.phonenum.value)){
            that.$store.commit('setMineMsg', "请输入正确的手机号码")
            infomsg.methods.clearMsg(that)
            return;
        }
        $.ajax({
            url: "/exp/mine/getshortmsg",
            data: {
                msgphone: that.$refs.phonenum.value
            },
            success: function(data){
                that.yomi(60)
            }
        })
    },
    yomi (max) {
        var btnel = this.$refs.getphonecode
        btnel.disabled = true
        btnel.innerHTML = "重新获取("+max+")"
        var id = setInterval(function(){
            btnel.innerHTML = "重新获取("+(--max)+")"
            if(max===0){
                clearInterval(id)
                btnel.disabled = false
                btnel.innerHTML = "获取短信验证码"
            }
        },1000)
    }
  },components:{
    infomsg
  }
}
</script>
<style scoped>

    .container {
        width: 7.5rem;
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
    .container .inputtext .checkgroup {
        position: relative;
        height: 1rem;
        border-bottom: 0.025rem solid #dedede;
    }
    .container .inputtext .checkgroup label {
        position: absolute;
        left: 0;
        width: 1.5rem;
        height: 1rem;
        line-height: 1rem;
        /*text-align: center;*/
        font-size: 0.3rem;
        background: #fff;
    }
    .container .inputtext .checkgroup label span {
        display: block;
        margin-left: 0.2rem;
    }
    .container .inputtext .checkgroup input {
        position: absolute;
        left: 1.5rem;
        width: 3.5rem;
        height: 1rem;
        border: 0;
    }
    .container .inputtext .checkgroup button {
        float: right;
        width: 2.5rem;
        height: 1rem;
        background: #e6133c;
        border: 0;
        color: #fff;
    }
    .container .setoption {
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
    }
    .container .btngroup {
        width: 7.5rem;
        height: 1rem;
        padding: 0 0.2rem;
        line-height: 1rem;
        margin-top: .3rem;
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
