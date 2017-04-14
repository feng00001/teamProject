// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('./config/db');
var $sql = require('./sqlMapping');
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
var util = require('../../util/common');

module.exports = {
	
	selectByName: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlMine01, [param.username], function(err, result) {
				var ret = 0;
				// 如果查询结果无数据，则表示用户名不重复
				if(!(result && result.length===1)){
					ret = 1
				}
				// 以json形式，把操作结果返回给前台页面
				util.jsonWrite(res, result);
				// 释放连接 
				connection.release();
			});
		});
	},
};