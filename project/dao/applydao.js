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
				console.log(arg[0])
				ret.push(arg[0])
			}

			function end () {
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
			

			

			// new Promise(function(resolve, reject){
				
			// }).then(function(result){
			// 	console.log(result)
			// 	ret.push(result[0])
			// },function(){
				
			// })

			// promise.then(function(){
			// 	// var ret = []
			// 	var ret = checkids.map(function(checkid,ids){
			// 		// 建立连接，向表中插入值
			// 		connection.query($sql.sqlApply01, [checkid, param.userid], function(err, result) {
			// 			if(err){
			// 				console.log(err)
			// 			}
			// 			r = result[0]
			// 		});
			// 		return r
			// 	})
			// 	return ret;
			// }).then(function(ret){
			// 	console.log("in")
			// 	console.log(ret)
			// 	// 以json形式，把操作结果返回给前台页面
			// 	util.jsonWrite(res, ret);
			// 	// 释放连接 
			// 	connection.release();
			// })
		});
	}
};