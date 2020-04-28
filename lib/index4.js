var app = new Vue({
	el:'#app',
	methods:{
		onClick:function(){
			console.log('this is onClick methods');
		},
		onSubmit:function(e){			
			e.preventDefault();//禁止提交事件后整个页面刷新.
			console.log('this is onsubmit methods');			
		}
	}
});