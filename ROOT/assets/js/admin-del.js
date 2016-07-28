(function(){
	// 绑定删除按钮
	$.extend({
		'btnDel' : function(){
			$('a.del-u').on('click',function(){
				if(confirm("是否确定删除该用户？")){
					var tr = $(this).parents('tr');
					var tds=tr.find('td');
					var input=tds.eq(0).find('input');
					var userId=input.val();
					$.ajax({
						url : WebRoot + '/db/userInfo/delete/'+userId,
						success : function(data){
							data = isJsonStr(data);
							var errno = data['errno'];
							if(errno == 200){
								alert('删除成功！');
								// 将值修改，然后触发取消按钮
								tr.remove();
							}
						}
					});
				}
			});
			$('a.del-t').on('click',function(){
				if(confirm("是否确定删除？")){
					var tr = $(this).parents('tr');
					var tds=tr.find('td');
					var teamId=tds.eq(0).text();
					$.ajax({
						url : WebRoot + '/db/teamInfo/delete/'+teamId,
						success : function(data){
							data = isJsonStr(data);
							var errno = data['errno'];
							if(errno == 200){
								alert('删除成功！');
								// 将值修改，然后触发取消按钮
								tr.remove();
							}
						}
					});
				}
			});
		},
	});
	function isJsonStr(data){
		if(typeof(data) == 'string'){
			data = eval( '(' + data + ')' );
		}
		// 转换过后如果不是对象类型说明传的不是正确的json数据
		if(typeof(data) == 'object'){
			return data;
		}else{
			return '';
		}
	}
})();