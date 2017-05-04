var util = {
	// 向前台返回JSON方法的简单封装
	jsonWrite: function (res, ret) {
		if(typeof ret === 'undefined') {
			res.json({
				code:'1',
				msg: '操作失败'
			});
		} else {
			res.json(ret);
		}
	},
	setCookie: function (name, value, days) {
	    var d = new Date;
	    d.setTime(d.getTime() + 24*60*60*1000*days);
	    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
	},
	getCookie: function (name) {
	    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	    return v ? v[2] : null;
	},
	deleteCookie: function (name) {
	    this.setCookie(name, '', -1);
	}
}

module.exports = util;