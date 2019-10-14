window.onload = function() {
	var dataList = {
		classValue: 'face',
		innerText: 'Hello Vue.JS'
	};
	new Vue({
		el: 'div',
		data: dataList
	});
};