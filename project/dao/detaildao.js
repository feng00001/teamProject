// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	selectshop: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			
			
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqldetail01, [0,17], function(err, result) {

				// 以json形式，把操作结果返回给前台页面

				util.jsonWrite(res, result);
									
				// 释放连接 
				connection.release();
			});
		});
	},
	selecthot: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			
			
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqldetail01, [18,35], function(err, result) {

				// 以json形式，把操作结果返回给前台页面

				util.jsonWrite(res, result);
									
				// 释放连接 
				connection.release();
			});
		});
	},
	selectbuy: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			
			
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqldetail01, [36,41], function(err, result) {

				// 以json形式，把操作结果返回给前台页面

				util.jsonWrite(res, result);
									
				// 释放连接 
				connection.release();
			});
		});
	},
	selectreport: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			
			
			var param = req.query || req.params;
			
			new Promise(function(resolve, reject){
				connection.query($sql.sqldetail02, [param.shopid], function(err, result){
					resolve({err, result})
				})
			}).then(function({err, result}){
				var ret = result;
				connection.query($sql.sqldetail03, [param.shopid], function(err, result){
					if(err){
						console.log(err)
					}
					
					ret[0].imgs = result
					console.log(JSON.stringify(ret))
					util.jsonWrite(res, ret);				
					// 释放连接 
					connection.release();
				})
			})
		});
	}
};