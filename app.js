/*
 *先创建Vue对象，Vue首字母必须大写！
 *el:element属性是定义根容器，"#vue-app":是id为vue-app的标签
 *data:用于存储数据，可以是对象，数组等
 *methods:用于存储各种方法
 */ 
new Vue({
	el : "#vue-app",

	data : {
		users : [
			{
				name : "强欢喜",
				age : 99
			},
			{
				name : "老鸨",
				age : 44
			},
			{
				name : "老周",
				age : 66
			}
		]
	},

	methods : {
		
	},

	computed : {
		
	}
});