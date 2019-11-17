/*
 *先创建Vue对象，Vue首字母必须大写！
 *el:element属性是定义根容器，"#vue-app":是id为vue-app的标签
 *data:用于存储数据，可以是对象，数组等
 *methods:用于存储各种方法
 */ 
new Vue({
	el : "#vue-app",

	data : {
		age : 22,
		x : 0,
		y : 0
	},

	methods : {
		add : function(){
			this.age ++;
		},

		getXY : function(event){
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},

		/*	JS实现 停止事件冒泡
			stop : function(event){
			event.stopPropagation();
		}*/
	},

});