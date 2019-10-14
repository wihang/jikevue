window.onload = function() {
	var dataList = {
		classValue: 'face',
		innerText: '大家好，欢迎来到麦子学院！',
		innerHTML: 'Hello<i style=color:red;>Vue.JS</i>！',
		name: 'Conan',
		age: 28
	};
	new Vue({
		el: 'div',
		data: dataList
	});
};