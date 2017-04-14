// CRUD SQL语句
var sql = {
	queryAll: 'select * from shop',
	queryByName: 'select * from shop where shopname like "%" ? "%"',
	// queryByName: 'select * from shop where shopname = ?',
	selectById: 'select * from shop where shopid = ?',
	insertinto: 'insert into shop(shopid,shopname) values(null,?)',
	deletefrom: 'delete from shop where shopid = ?',

	// Mine begin
	// 根据用户名查询，用于查询用户名是否重复
	sqlMine01: 'select * from users where username = ?'
	// Mine end
};
module.exports = sql;
