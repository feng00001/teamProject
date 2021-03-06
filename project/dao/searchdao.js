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
			// 获取前台页面传过来的参数	
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.sqlSearch01, [param.shopname], function(err, result) {
				
			});
		});
	},
};