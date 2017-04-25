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
	sqlMine01: 'select * from users where username = ? and password = ? and type = ?',
	// 注册用户
	sqlMine02: 'insert into users(username,password,type) values (?,?,?)',
	// 检查用户是否存在,用于检查账户是否已经存在
	sqlMine03: 'select * from users where username = ? and type = ?',
	// 根据用户Id查询
	sqlMine04: 'select * from users where userid = ?',
	// Mine end

	// Homepage begin
	// 根据specialid查询商品
	sqlHomepage01: 'select * from shop where specialid = ?',
	// 分页查询猜你喜欢
	sqlHomepage02: 'select * from shop limit ?,?',
	// Homepage end

	// Classify begin
	// 查询所有type
	sqlClassify01: 'select * from type',
	// 根据typeid查询subtype
	sqlClassify02: 'select * from subtype where typeid = ?',
	// 根据subtypeid查询finaltype
	sqlClassify03: 'select * from finaltype where subtypeid = ?',
	// Classify end
	//slotlist begin
	sqlSlotlist01: 'select * from shop order by shopid asc',
	sqlSlotlist02: 'select * from shop order by price asc',
	sqlSlotlist03: 'select * from shop order by price desc',
	sqlSlotlist04: 'select * from evaluate where shopid = ?',

	//slotlist end
	//cart begin
	sqlCart01: 'select * from shopcar where shopid = ? and userid = ?',
	sqlCart02: 'insert into shopcar(shopid,userid,quantity) values (?,?,1)',
	sqlCart03: 'update shopcar set quantity = quantity+1 where shopcarid=?',
	sqlCart04: 'select * from shopcar,shop where shopcar.shopid=shop.shopid and userid = ?',
	sqlCart05: 'update shopcar set quantity = quantity-1 where shopcarid=?',

	//cart end
	// ShopBuy begin
	sqlShopBuy01: 'select * from shop where specialid = ? limit ?,?'
	// ShopBuy end
};
module.exports = sql;
