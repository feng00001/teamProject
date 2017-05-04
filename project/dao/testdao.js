// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	selectAll: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.queryAll, null, function(err, result) {

				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, result);

				// 释放连接 
				connection.release();
			});
		});
	},
	selectByName: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.queryByName, [param.shopname], function(err, result) {
				console.log(err)
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, result);

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
			connection.query($sql.selectById, [param.shopid], function(err, result) {
				console.log(err)
				// 以json形式，把操作结果返回给前台页面
				console.log(result)
				util.jsonWrite(res, result);

				// 释放连接 
				connection.release();
			});
		});
	},
	// 需修改： 1.key值(例：insert) 
	// 			2.connection.query中的参数,第一个参数为sql语句,第二个参数为数组
	insertVal: function (req, res, next) {
		var that = this;
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.insertinto, [param.shopname], function(err, result) {
				// 此处为异步处理，可优化，插入后重新查询
				connection.query($sql.queryAll, null, function(err, result) {
					// 以json形式，把操作结果返回给前台页面
					util.jsonWrite(res, result);
					// 最后释放连接 
					connection.release();
				});
			});
		});
	},
	deleteById: function (req, res, next) {
		var that = this;
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.deletefrom, [param.shopid], function(err, result) {
				// 此处为异步处理，插入后重新查询
				connection.query($sql.queryAll, null, function(err, result) {
					// 以json形式，把操作结果返回给前台页面
					util.jsonWrite(res, result);
					// 最后释放连接 
					connection.release();
				});
			});
		});
	}
};