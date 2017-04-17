// CRUD SQL语句
var sql = {
	queryAll: 'select * from shop',
	queryByName: 'select * from shop where shopname like "%" ? "%"',
	// queryByName: 'select * from shop where shopname = ?',
	selectById: 'select * from shop where shopid = ?',
	insertinto: 'insert into shop(shopid,shopname) values(null,?)',
	deletefrom: 'delete from shop where shopid = ?',

	// Mine begin
	// 根据用户名和密码查询，用于查询用户名和密码是否匹配
	sqlMine01: 'select * from users where username = ? and password = ?',
	// 注册用户
	sqlMine02: 'insert into users(username,password) values (?,?)',
	// 检查用户是否存在,用于检查账户是否已经存在
	sqlMine03: 'select * from users where username = ?',
	// 根据用户Id查询
	sqlMine04: 'select * from users where userid = ?'
	// Mine end
};
module.exports = sql;
