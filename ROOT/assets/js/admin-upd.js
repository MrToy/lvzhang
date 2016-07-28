// 管理页面数据修改
(function(){
	// 绑定修改按钮
	$.extend({
		'btnUpd' : function(){
			$('a.upd-u').on('click',function(){
				console.log('修改用户');
			});
			$('a.upd-t').on('click',function(){
				console.log('修改团队');
				// 获取当前点击按钮所属tr标签
				var tr = $(this).parents('tr');
				var tds = tr.find('td');
				var teamId = tds.eq(0).text();			// 团队编号
				var teamName = tds.eq(1).text();		// 团队名称
				var teamCount = tds.eq(2).text();		// 团队人数
				tds.eq(1).html('<input name="teamName" value='+ teamName +' placeholder=' + teamName + ' />')
				tds.eq(3).find('.del-t').hide();
				tds.eq(3).find('.upd-t').hide();
				if(tds.eq(3).find('.upd-t-save').length == 0){
					tds.eq(3).append('<a class="upd-t-save" href="javascript:;" style="padding:0 5px;" title="保存修改">保存</a><a class="upd-cancel" href="javascript:;" style="padding:0 5px;" title="取消">取消</a>');					
					// 绑定保存和取消按钮
					updTSave();
					updCancel();
				}else{
					tds.eq(3).find('.upd-t-save').show();
					tds.eq(3).find('.upd-cancel').show();
				}
				return false;
			});
		},
	});
	function updTSave(){
		$('a.upd-t-save').on('click',function(){
			var tr = $(this).parents('tr');
			var tds = tr.find('td');
			var teamId = parseInt(tds.eq(0).text());
			var teamName = tr.find('input[name=teamName]').val();
			var teamNameOld = tr.find('input[name=teamName]').attr('placeholder');
			if($.trim(teamName) == ''){
				alert('团队名称不允许为空!');
				return;
			}else if($.trim(teamName) == teamNameOld){
				// 不用修改，触发取消按钮
				tds.eq(3).find('a.upd-cancel').trigger('click');
				alert('修改数据成功');
				return;
			}else{
				$.ajax({
					url : WebRoot + '/db/teamInfo/update/' + teamId,
					data : {
						teamName : teamName,
					},
					success : function(data){
						data = isJsonStr(data);
						var errno = data['errno'];
						if(errno == 200){
							alert('修改数据成功');
							// 将值修改，然后触发取消按钮
							tr.find('input[name=teamName]').attr('placeholder',teamName);
							tds.eq(3).find('a.upd-cancel').trigger('click');
						}
					}
				});
			}
		});
	}
	function updCancel(){
		$('a.upd-cancel').on('click',function(){
			var tr = $(this).parents('tr');
			var tds = tr.find('td');
			var teamId = tds.eq(0).text();
			var teamName = tr.find('input[name=teamName]').attr('placeholder');
			tds.eq(1).html('<a href="../User/index?teamid=' + teamId + '">' + teamName + '</a>');
			tds.eq(3).find('.upd-t-save').hide();
			tds.eq(3).find('.upd-cancel').hide();
			tds.eq(3).find('.del-t').show();
			tds.eq(3).find('.upd-t').show();
		});
	}
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