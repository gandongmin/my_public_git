new Vue({
	el:'#seg1',//指定只有这个名字的DIV才可以使用
	components:{
		myalert:{
			template:'<button @click="on_click">自定义按钮组件</button>',			
			methods:{
				on_click:function(){
					alert('哟哟哟');
				}
			}
		}  //引用定义,其中my-alert键名表示HTML里的标签名称  
	}
});