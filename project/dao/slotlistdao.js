// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	selectlist: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			// 建立连接，向表中插入值
			connection.query($sql.sqlSlotlist01, null, function(err, result) {
				console.log("order:"+param.order)
				var shoplist = result;
				if(shoplist.length>0){
					shoplist.map((item,idx) => {
						connection.query($sql.sqlSlotlist04,[item.shopid], function(err, result){
							var obj = {
								el: item,
								commence: result.length
							}
							ret.push(obj)
							if(idx === shoplist.length - 1){
								connection.release();
								util.jsonWrite(res, ret);
							}
						})
					})
				}else{
					connection.release();
					util.jsonWrite(res, ret);
				}

				

				// 以json形式，把操作结果返回给前台页面
				// util.jsonWrite(res, result);

				// 释放连接 
				
			});
		});
	},
	selectpriceasc: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			// 建立连接，向表中插入值
			connection.query($sql.sqlSlotlist02, null, function(err, result) {
				console.log("order:"+param.order)
				var shoplist = result;
				if(shoplist.length>0){
					shoplist.map((item,idx) => {
						connection.query($sql.sqlSlotlist04,[item.shopid], function(err, result){
							var obj = {
								el: item,
								commence: result.length
							}
							ret.push(obj)
							if(idx === shoplist.length - 1){
								connection.release();
								util.jsonWrite(res, ret);
							}
						})
					})
				}else{
					connection.release();
					util.jsonWrite(res, ret);
				}

				

				// 以json形式，把操作结果返回给前台页面
				// util.jsonWrite(res, result);

				// 释放连接 
				
			});
		});
	},
	selectpricedesc: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			// 建立连接，向表中插入值
			connection.query($sql.sqlSlotlist03, null, function(err, result) {
				console.log("order:"+param.order)
				var shoplist = result;
				if(shoplist.length>0){
					shoplist.map((item,idx) => {
						connection.query($sql.sqlSlotlist04,[item.shopid], function(err, result){
							var obj = {
								el: item,
								commence: result.length
							}
							ret.push(obj)
							if(idx === shoplist.length - 1){
								connection.release();
								util.jsonWrite(res, ret);
							}
						})
					})
				}else{
					connection.release();
					util.jsonWrite(res, ret);
				}

				

				// 以json形式，把操作结果返回给前台页面
				// util.jsonWrite(res, result);

				// 释放连接 
				
			});
		});
	}
};