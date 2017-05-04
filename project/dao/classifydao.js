// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	selecttype: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlClassify01, null, function(err, result) {

				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, result);

				// 释放连接 
				connection.release();
			});
		});
	},
	selectsubfinal: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlClassify02, param.typeid || 1, function(err, result) {
				var subret = result;
				var ret = []
				subret.map(function(element,i){
					connection.query($sql.sqlClassify03, element.subtypeid, function(err, finalls) {
						// 以json形式，把操作结果返回给前台页面
						var item = {}
						if(finalls && finalls.length > 0){
							item = {
								subtypeid: element.subtypeid,
								subtypename: element.subtypename,
								finalls: finalls
							}
							ret[i] = item;
						}

						
						
						if(i === subret.length-1){
							console.log("ret" + ret)
							util.jsonWrite(res, ret);
							// 释放连接 
							connection.release();
						}
					});
				})
				// for (var i in subret) {
					
				// }
			});
		});
	}
};