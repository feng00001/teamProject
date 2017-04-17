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
  	testdao.selectUserPhone(req, res, next);
});

/* GET 注册. */
router.get('/register', function(req, res, next) {
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
	console.log(param.msgphone)
	if(param.msgphone){
		console.log(typeof param.msgphone)
		send_sms(param.msgphone,"【大连华信项目小组】您的验证码是1234")
  		res.end("OK")
	}else{
		res.end("NG")
	}
  	
});


module.exports = router;
