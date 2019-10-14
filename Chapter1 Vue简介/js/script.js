window.onload = function() {
	var dataList = {
		classValue: 'app',
		innerText: 'Hello Vue.JS！'
	};
	new Vue({
		el: 'div',
		data: dataList
	});
};