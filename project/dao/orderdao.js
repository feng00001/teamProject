// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');


module.exports = {
	selectorder: function (req, res, next) {
		pool.getConnection(function(err, connection) {

			var ret = []

			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			new Promise(function(resolve, reject){
				connection.query($sql.sqlOrder01, [req.cookies["user"], param.status || ''], function(err, result){
					if(err){
						console.log(err)
					}
					resolve({err, result})
				})
			}).then(function({err, result}){
				console.log(JSON.stringify(orderret))
				var orderret = result;
				orderret.map(function(element,ids){
					var item = {
						order: element
					}
					connection.query($sql.sqlOrder02, [element.orderid], function(err, detailret){
						if(err){
							console.log(err)
						}
						item.shoplist = detailret;
						ret.push(item)
						if(ids===orderret.length-1) {
							console.log(JSON.stringify(ret))
							util.jsonWrite(res, ret);
							// 释放连接 
							connection.release();
						}
					})
				})
			})
		});
	}
};