// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	updatecount: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlCart01, [param.shopid,param.userid], function(err, result) {

				// 以json形式，把操作结果返回给前台页面
				
				var cart = result;
				if(cart.length > 0){
					connection.query($sql.sqlCart03, null, function(err, result) {
						util.jsonWrite(res, result);
						connection.release();
					})
				}else{
					connection.query($sql.sqlCart02, [param.shopid,param.userid], function(err, result) {
						util.jsonWrite(res, result);
						connection.release();
					})
				}
				// 释放连接 
				
			});
		});
	}
};