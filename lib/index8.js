var app = new Vue({
	el:'#app',
	data:{
		yuwen:80,
		shuxue:90,
		yingyu:85,
	},
	computed:{
		sum:function(){
			return this.yuwen + this.shuxue + this.yingyu;
		},
		avar:function(){
			return Math.round(this.sum / 3);
		}
	}
});

