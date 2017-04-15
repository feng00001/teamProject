var express = require('express');
var testdao = require('../dao/minedao');
var util = require('../../util/common');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	
});

/* GET 登录. */
router.get('/logon', function(req, res, next) {
  	testdao.selectUser(req, res, next);
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


module.exports = router;
