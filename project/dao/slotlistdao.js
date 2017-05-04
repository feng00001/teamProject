// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

// var promise = new Promise(function(resolve,reject){
//     if(tag){
//       resolve();
//     }else{
//       reject();
//     }
// })

var everyPage = 10;

module.exports = {
	selectlist: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			
			// 建立连接，向表中插入值
			connection.query($sql.sqlSlotlist01,  [param.specialid || '',param.shopname || '',param.prePage*everyPage,everyPage], function(err, result) {
				if(err){
					console.log(err)
				}
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
			});
		});
	},
	selectpriceasc: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			console.log("asc")
			// 建立连接，向表中插入值
			
			new Promise(function(resolve, reject){
				connection.query($sql.sqlSlotlist02, [param.specialid || '',param.shopname || '',param.prePage*everyPage,everyPage], function(err, result){
					resolve({err, result});
				});
				
			}).then(function({err, result}){
				if(err){
					console.log(err)
				}
				console.log("r:"+result)
				var shoplist = result;
				if(shoplist.length>0){
					shoplist.map((item,idx) => {
						connection.query($sql.sqlSlotlist04,[item.shopid], function(err, result){
							if(err){
								console.log(err)
							}
							var obj = {
								el: item,
								commence: result.length
							}
							ret.push(obj)
							if(idx === shoplist.length - 1){
								console.log("inin")
								connection.release();
								util.jsonWrite(res, ret);
							}
						})
					})
				}else{
					connection.release();
					util.jsonWrite(res, ret);
				}
			})

		});
	},
	selectpricedesc: function (req, res, next) {
		console.log("tdesc")
		pool.getConnection(function(err, connection) {
			if(err){
				console.log(err)
			}
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			var ret = [];
			console.log("desc")
			new Promise(function(resolve, reject){
				connection.query($sql.sqlSlotlist03,  [param.specialid || '',param.shopname || '',param.prePage*everyPage,everyPage], function(err, result){
					resolve({err, result});
				})
			}).then(function({err, result}){
				if(err){
					console.log(err)
				}
				var shoplist = result;
				if(shoplist.length>0){
					shoplist.map((item,idx) => {
						connection.query($sql.sqlSlotlist04,[item.shopid], function(err, result){
							if(err){
								console.log(err)
							}
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
			})
		});
	}
};