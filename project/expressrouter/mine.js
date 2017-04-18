var express = require('express');
var testdao = require('../dao/minedao');
var util = require('../../util/common');
var {send_sms} = require('../../util/shortMsg');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	
});

/* GET 登录. */
router.get('/logon', function(req, res, next) {
  	testdao.selectUser(req, res, next);
});

/* GET 手机登陆. */
router.get('/logonphone', function(req, res, next) {
	var param = req.query || req.params;
	if(param.msgphone!==req.session.phonecode){
		util.jsonWrite(res, "您输入的短信验证码不正确");
		return;
	}
	res.cookie("user", param.username);
	util.jsonWrite(res, null);
  	
});

/* GET 注册. */
router.get('/register', function(req, res, next) {
	// 获取前台页面传过来的参数
	var param = req.query || req.params;
	var ret = null;
	if(req.session.checkcode.toUpperCase()!==param.chart.toUpperCase()){
		ret = "您输入的验证码不正确"
		util.jsonWrite(res, ret);
		return;
	}
	if(req.session.phonecode!==param.msgphone){
		ret = "您输入的短信验证码不正确"
		util.jsonWrite(res, ret);
		return;
	}
  	testdao.insertUser(req, res, next);
});

/* GET checkuser. */
router.get('/checkuser', function(req, res, next) {
  	testdao.checkUser(req, res, next);
});

/* GET 根据用户Id查询. */
router.get('/userinit', function(req, res, next) {
  	testdao.selectById(req, res, next);
});

/* GET 获取短信验证码. */
router.get('/getshortmsg', function(req, res, next) {
	// 获取前台页面传过来的参数
	var param = req.query || req.params;
	if(param.msgphone){
		var code = ""
		while(code.length<=3){
			var c = Math.floor(Math.random()*10);
			code += c
		}
		send_sms(param.msgphone,"【大连华信项目小组】您的验证码是" + code)
		req.session.phonecode = code;
  		res.end("OK")
	}else{
		res.end("NG")
	}
  	
});


module.exports = router;
