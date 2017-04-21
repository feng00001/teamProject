// MySQL数据库联接配置
module.exports = {
	mysql: {
		connectionLimit : 10,    
		host: '10.5.154.39', 
		user: 'root',
		password: '',
		database:'test', // 前面建的user表位于这个数据库中
		port: 3306
	}
};