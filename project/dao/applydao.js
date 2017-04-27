// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');


module.exports = {
	selectcount: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var checkids = param.checkid.split(",")
			var ret = []

			function cb (arg) {
				ret.push(arg[0])
			}

			function end () {
				// ！！！只有shopcarid能用！！！因为数量可以改变
				req.session.orderlist = ret;
				util.jsonWrite(res, ret);
				// 释放连接 
				connection.release();
			}
			
			// var ret = []
			checkids.map(function(checkid,ids){
				// 建立连接，向表中插入值
				connection.query($sql.sqlApply01, [checkid, param.userid], function(err, result) {
					if(err){
						console.log(err)
					}
					if(ids===checkids.length-1){
						cb(result);
						end ()
					}else{
						cb(result);
					}
				});
			})
		});
	},
	setOrder: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var orderlist = req.session.orderlist;

			// 建立连接，向表中插入值
			new Promise(function(resolve, reject){
				console.log("ub---ub")
				console.log("userid:"+req.cookies["user"])
				connection.query($sql.sqlApply02, [req.cookies["user"],param.totle,"未付款"], function(err, result) {
					if(err){
						console.log(err)
					}
					resolve({err, result});
				});
			}).then(function({err, result}){
				if(err){
					console.log(err)
				}
				console.log(JSON.stringify(result))
				orderlist.map(function(element,ids){
					connection.query($sql.sqlApply03, [result.insertId,element.shopid,element.price,element.quantity], function(err, result) {
						if(err){
							console.log(err)
						}
					});
				})
				return;
			}).then(function(){
				util.jsonWrite(res, ret);
				// 释放连接 
				connection.release();
			})
		});
	}
};