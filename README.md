顺序：
一、VUE部分：
	重要文件(vue相关部分全部在project/todo文件夹下)：
		1) router/index.js 路由配置文件，所有vue路由均在此配置
		2) components/*.vue .vue文件，所有vue组件均写在这里
		3) store/mutations.js vuex的store配置文件,用于操作数据相关

二、express部分：
	重要文件
		1) project/expressrouter/index.js express路由配置文件
		2) project/dao/testdao.js 数据库查询部分
		3) project/dao/sqlMapping.js sql语句文件


常见错误：
1.ReferenceError: $ is not defined {stack: (...), message: "$ is not defined"}
答: 没有导入jquery,需要在用到jquery的位置导入import $ from 'jquery'
2.数据库查询返回默认是数组，如果只是想要单条数据的json格式需要data[0]取一下
3.D:\project\teamProject\project\dao\sqlMapping.js:23
        sqlHomepage01: 'select * from shop where specialid = ?'
答: sql语句之间少逗号

各模块规则：
Mine：
1.检测用户名是否重复，返回ret，1：不重复，0：重复
HomePage(Shoplist):
1.specialid: 
	1: 每日抢购
	2：生活馆
