// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	selectshoplist: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			console.log(param.prePage)
			var everyPage = 10;
			// 建立连接，向表中插入值
			connection.query($sql.sqlShopBuy01, [1, param.prePage*everyPage,everyPage], function(err, result) {
				if(err){
					console.log(err)
				}

				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, result);

				// 释放连接 
				connection.release();
			});
		});
	}
};