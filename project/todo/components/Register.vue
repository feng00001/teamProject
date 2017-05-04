<!-- <style src="todomvc-app-css/index.css"></style> -->

<template>
  <div class="container">
    <div class="head">
        <a href="#/mine"><i class="iconfont">&#x3484;</i></a>
        <div class="logo">
            <i></i>
            注册
        </div>
    </div>
    <div class="inputtext">
        <div class="formgroup">
            <label><span>手机号</span></label>
            <input type="text" placeholder="请输入手机号" ref="phonenum" v-model="$store.state.phonenum"/>
        </div>
        <div class="chartgroup">
            <label><span>图形码</span></label>
            <input type="text" placeholder="请输入右侧验证码" ref="chart" v-model="$store.state.chart"/>
            <img src="/exp/util/createcode" @click="changechart" ref="chartimg" />
        </div>
        <div class="checkgroup">
            <label><span>验证码</span></label>
            <input type="text" placeholder="请输入短信验证码" ref="msgphone" v-model="$store.state.msgphone"/>
            <button @click="getshortmsg" ref="getphonecode">获取短信验证码</button>
        </div>
    </div>
    <div class="inputtext">
        <div class="formgroup">
            <label><span>设置密码</span></label>
            <input type="password" placeholder="6-20位数字，字母组合" ref="password" v-model="$store.state.password"/>
        </div>
    </div>
    <div class="setoption">
        <span>注册即视为您阅读并同意《用户协议》</span>
    </div>
    <div class="btngroup">
        <button :disabled="changeval" @click="register">立即注册</button>
    </div>
    <div class="tologon">
        <a href="#/mine/logon">已有账户？直接登录</a>
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
    checkuser () {
        var that = this;
        let phonenum = this.$refs.phonenum.value;
        $.ajax({
            url: "/exp/mine/checkuser",
            data: {
                username: phonenum
            },
            success: function(data){
                if(data) {
                    this.$store.commit('setMineMsg', "请填写正确的手机号码")
                    infomsg.methods.clearMsg(that)
                    return;
                }
            }
        })

    },
    register () {
        var that = this;
        let phonenum = this.$refs.phonenum.value;
        let chart = this.$refs.chart.value;
        let msgphone = this.$refs.msgphone.value;
        let password = this.$refs.password.value;
        // 手机号码正则表达式
        let phonenumReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        // 密码正则表达式 6-20位数字字母组合
        let passwordReg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/; 
        if(!phonenumReg.test(phonenum)){
            this.$store.commit('setMineMsg', "请填写正确的手机号码")
            infomsg.methods.clearMsg(this)
            return;
        }
        if(!passwordReg.test(password)){
            this.$store.commit('setMineMsg', "密码需要6-20位数字和字母组合")
            infomsg.methods.clearMsg(this)
            return;
        }
        $.ajax({
            url: "/exp/mine/checkuser",
            data: {
                username: phonenum
            },
            success: function(data){
                if(data) {
                    that.$store.commit('setMineMsg', data)
                    infomsg.methods.clearMsg(that)
                    return;
                }
                $.ajax({
                    url: "/exp/mine/register",
                    data: {
                        username: phonenum,
                        password: password,
                        chart: chart,
                        msgphone: msgphone
                    },
                    success: function(data){
                        console.log(data)
                        if(data){
                            that.$store.commit('setMineMsg', data)
                            infomsg.methods.clearMsg(that)
                        }else{
                            that.$store.commit('setMineMsg', "注册成功,正在为您跳转。。。")
                            infomsg.methods.clearMsg(that,function(){
                                location.href = "#/myself"
                            })
                        }
                    }
                })
            }
        })   
    },
    changechart () {
        this.$refs.chartimg.src = this.$refs.chartimg.src + "?" +Math.random()
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
  },
  computed: {
    changeval () {
        let flag = true;
        let phonenum = this.$store.state.phonenum;
        let chart = this.$store.state.chart;
        // let vrcode = this.$refs.vrcode.value;
        let password = this.$store.state.password;
        let msgphone = this.$store.state.msgphone;
        if(phonenum&&chart&&password&&msgphone){
            flag = false;
        }
        return flag;
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
        margin-top: 0.6rem;
    }
    .container .inputtext .formgroup {
        position: relative;
        height: 1rem;
        border-bottom: 0.025rem solid #dedede;
        line-height: 1rem;
    }
    .container .inputtext .formgroup label {
        position: absolute;
        left: 0;
        width: 1.5rem;
        height: 1rem;
        line-height: 1rem;
        /*text-align: center;*/
        font-size: 0.28rem;
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
    .container .inputtext .formgroup img{
        width: 1.8rem;
        height: 0.8rem;
        float: right;
        margin-top: 0.1rem;
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
        font-size: 0.28rem;
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
    .container .inputtext .chartgroup {
        position: relative;
        height: 1rem;
        border-bottom: 0.025rem solid #dedede;
    }
    .container .inputtext .chartgroup label {
        position: absolute;
        left: 0;
        width: 1.5rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.28rem;
        background: #fff;
    }
    .container .inputtext .chartgroup label span {
        display: block;
        margin-left: 0.2rem;
    }
    .container .inputtext .chartgroup input {
        position: absolute;
        left: 1.5rem;
        width: 4rem;
        height: 1rem;
        border: 0;
    }
    .container .inputtext .chartgroup img {
        float: right;
        margin-top: 0.1rem;
    }
    .container .inputtext .chartgroup button {
        float: right;
        width: 2.5rem;
        height: 1rem;
        background: #e6133c;
        border: 0;
        color: #fff;
    }
    .container .setoption {
        margin-top: 0.8rem;
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
    .container .btngroup button:disabled {
        background: #dad7d2;
        width: 7.1rem;
        height: 0.8rem;
        border: 0;
        border-radius: 0.1rem;
        color: #adadad;
        font-size: 0.3rem;
    }
    .container .tologon{
        overflow: hidden;
        padding: 0 0.5rem;
    }
    .container .tologon a{
        float: right;
        color: #4f9fc9;
        text-decoration: underline;
    }
</style>
