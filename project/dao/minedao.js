// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	
	selectUser: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlMine01, [param.username, param.password, 0], function(err, result) {
				if(err){
					console.log(err)
				}
				var ret = "您的账户或密码不正确";
				// 如果查询结果无数据，则表示用户名不重复
				if(result && result.length===1){
					ret = null
					res.cookie("user", result[0].userid);
				}
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, ret);
				// 释放连接 
				connection.release();
			});
		});
	},
	logonPhone: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			console.log(param.username)
			// 建立连接，向表中插入值
			new Promise(function(resolve, reject){
				connection.query($sql.sqlMine03, [param.username, 1], function(err, result) {
					resolve({err, result})
				});
			}).then(function({err, result}){
				if(err){
					console.log(err)
				}
				// 如果查询结果无数据，则表示用户名不重复
				if(!(result && result.length>0)){
					
					connection.query($sql.sqlMine02, [param.username, null, 1], function(err, result) {
						if(err){
							console.log(err)
						}
						res.cookie("user", result.userid);
						// 释放连接 
						connection.release();
					});
				}else{

					console.log(JSON.stringify(result))
					console.log(result[0].userid)
					res.cookie("user", result[0].userid);
					// 释放连接 
					connection.release();
				}
				util.jsonWrite(res, null);
			})
		});
	},
	checkUser: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlMine03, [param.username, 0], function(err, result) {
				var ret = null;
				// 如果查询结果存在,则表示用户存在
				if(result && result.length>0){
					ret = "当前帐号已经存在"
				}
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, ret);
				// 释放连接 
				connection.release();
			});
		});
	},
	insertUser: function (req, res, next) {
		// 获取前台页面传过来的参数
		var param = req.query || req.params;
		pool.getConnection(function(err, connection) {
			// 建立连接，向表中插入值
			connection.query($sql.sqlMine02, [param.username, param.password, 0], function(err, result) {
				var ret = null;
				if(err) {
					ret = "注册失败，请联系管理员"
				}
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, ret);
				// 释放连接 
				connection.release();
			});
		});
	},
	selectById: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlMine04, [req.cookies.user], function(err, result) {
				var ret = [{
					username: req.cookies.user
				}]
				if(result && result.length>0) {
					ret = result
				}
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, ret);
				
				// 释放连接
				connection.release();
			});
		});
	}
};