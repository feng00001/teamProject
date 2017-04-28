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
			var ret = []

			function cb (arg) {
				ret.push(arg[0])
			}

			function end () {
				// ！！！只有shopcarid能用！！！因为数量可以改变
				req.session.orderlist = ret;
				util.jsonWrite(res, ret);
				console.log(JSON.stringify(ret))
				// 释放连接 
				connection.release();
			}
			if(param.checkid){
				var checkids = param.checkid.split(",")
				if(checkids && checkids.length>0){
					checkids.map(function(checkid,ids){
						// 建立连接，向表中插入值
						connection.query($sql.sqlApply01, [checkid, req.cookies["user"]], function(err, result) {
							if(err){
								console.log(err)
							}
							console.log(result)
							if(ids===checkids.length-1){
								cb(result);
								end()
							}else{
								cb(result);
							}
						});
					})
				}
			}
		});
	},
	buynow: function(req, res, next){
		req.session.orderlist = [];
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			connection.query($sql.sqldetail02, [param.shopid], function(err, result) {
				if(err){
					console.log(err)
				}
				
				result[0].quantity = 1
				util.jsonWrite(res, result);
				connection.release();
			});
		});
	},
	setOrder: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var orderlist = req.session.orderlist;

			// 建立连接，向表中插入值
			new Promise(function(resolve, reject){
				connection.query($sql.sqlApply02, [req.cookies["user"],param.totle,"未付款"], function(err, result) {
					if(err){
						console.log(err)
					}
					util.jsonWrite(res, result.insertId);
					resolve({err, result});
				});
			}).then(function({err, result}){
				console.log("ffffff")
				if(err){
					console.log(err)
				}
				if(orderlist && orderlist.length>0){
					console.log("whyyyyy")
					orderlist.map(function(element,ids){
						connection.query($sql.sqlApply03, [result.insertId,element.shopid,element.price,element.quantity], function(err, result) {
							if(err){
								console.log(err)
							}
						});
					})
					return;
				}else{
					console.log("00000"+param.shopid+'---'+param.price+'---'+param.quantity)
					connection.query($sql.sqlApply03, [result.insertId,param.shopid,param.price,param.quantity], function(err, result) {
						if(err){
							console.log(err)
						}
					});
					return;
				}
				
			}).then(function(){
				orderlist.map(function(element,ids){
					connection.query($sql.sqlApply04, [element.shopcarid], function(err, result) {
						if(err){
							console.log(err)
						}
					});
				});
				return;
			}).then(function(){
				// 释放连接 
				connection.release();
			})
		});
	},
	updateOrder: function(req, res, next){
		console.log("here")
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			console.log("orderid:"+param.orderid)
			connection.query($sql.sqlApply05, ["待发货",param.orderid], function(err, result) {
				if(err){
					console.log(err)
				}
				util.jsonWrite(res, "OK");
			});
		});
	}
};