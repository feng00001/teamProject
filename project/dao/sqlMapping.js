// CRUD SQL语句
var sql = {
	queryAll: 'select * from shop',
	queryByName: 'select * from shop where shopname like "%" ? "%"',
	// queryByName: 'select * from shop where shopname = ?',
	selectById: 'select * from shop where shopid = ?',
	insertinto: 'insert into shop(shopid,shopname) values(null,?)',
	deletefrom: 'delete from shop where shopid = ?'
};
module.exports = sql;
