// 管理页面样式
(function(){
	
	$(document).ready(function(){
		
	});
	function getDataByTeamName(p,key){
		if(key == ''){
			alert('请输入要查询的数据!');
			return false;
		}
		$.ajax({
			url : WebRoot + '/tu/team',
			type : 'post',
			data : {
				p : p,
				teamName : key
			},
			success : function(data){
				data = isJsonStr(data);
				var errno = data['errno'];
				if(errno == 200){
					var list = data['data']['list'];
					var count = data['data']['count'];
					var current = data['data']['current'];
					var perCount = data['data']['perCount'];
					var pageCount = data['data']['pageCount'];
					var pages = data['data']['pages'];

					// 计算分页
					var html = $.paging({
						perCount : perCount,	//每页默认显示5条数据
						counts : count,			//数据总条数
						current : current,		//当前页
						pageCount : pageCount,	//总页数
						pages : pages,			//页码数
					});
					
					var table = getTeamHeader();
					var tr = getTeamTr();
					for(var i = 0; i < (list == null ? 0 : list.length); i ++){
						var item = list[i];
						table += getHtml({
							teamId : item['teamId'],
							teamName : item['teamName'],
							teamCount : item['teamCount'],
						},tr);
					}
					table += getTeamFooter();
					$('.paging').prev('.team-data').html('');
					$('.paging').prev('.team-data').append(table);
					$('.paging').html(html);
					// 绑定点击分页按钮
					btnPage(perCount,data['data']['key']);
				}else if(errno == 10008){
					alert('没有找到数据，换个关键词试试!');
				}
			}
		})
	}
	
	// 绑定分页
	function btnPage(perCount,key){
		$('.pagination li[class!=disabled] a').off('click').on('click',function(){
			// 找到目标页码
			var current = $(this).attr('data-page');
			if(typeof(current) == 'undefined'){
				return true;
			}
			var p = current + ',' + perCount;
			if($('.paging').hasClass('team-query-paging')){
				getDataByTeamName(p,key);				
			}
			if($('.paging').hasClass('tu-query-paing')){
				getDataByName(p,key);
			}
		});
	}
	
	function getHtml(options,tpl){
		var html = tpl;
		if(typeof(options.teamId) != 'undefined'){
			// 指定全局匹配,注意正则表达式特殊符号$如何匹配
			html = html.replace(/\${teamId}/g,options.teamId);
		}else{
			html = html.replace(/\${teamId}/g,'空');
		}
		if(typeof(options.teamName) != 'undefined'){
			html = html.replace(/\${teamName}/g,options.teamName);
		}else{
			html = html.replace(/\${teamName}/g,'空');
		}
		if(typeof(options.teamCount) != 'undefined'){
			html = html.replace(/\${teamCount}/g,options.teamCount);
		}else{
			html = html.replace(/\${teamCount}/g,'空');
		}
		if(typeof(options.userName) != 'undefined'){
			html = html.replace(/\${userName}/g,options.userName);
		}else{
			html = html.replace(/\${userName}/g,'空');
		}
		if(typeof(options.money) != 'undefined'){
			html = html.replace(/\${money}/g,options.money);
		}else{
			html = html.replace(/\${money}/g,'空');
		}
		return html;
	}
	
	
	function getTeamHeader(){
		return ''
		+'<table class="table table-bordered table-hover definewidth m10">'
		+	'<thead>'
		+		'<tr>'
		+			'<th>团队编号</th>'
		+			'<th>团队名称</th>'
		+			'<th>团队人数</th>'
		+			'<th>管理操作</th>'
		+		'</tr>'
		+	'</thead>';
	}
	function getTeamTr(){
		return ''
		+'<tr>'
		+	'<td>${teamId}</td>'
		+	'<td><a href="">${teamName}</a></td>'
		+	'<td>${teamCount}</td>'
		+	'<td><a href="#">编辑</a></td>'
		+'</tr>';
	}
	
	function getTeamFooter(){
		return '</table>';
	}
	function getTuHeader(){
		return ''
		+'<table class="table table-bordered table-hover definewidth m10">'
		+	'<thead>'
		+		'<tr>'
		+			'<th><input type="checkbox" class="checkbox"></th>'
		+			'<th>用户名称</th>'
		+			'<th>奖励金额</th>'
		+			'<th>所属团队</th>'
		+			'<th>操作</th>'
		+		'</tr>'
		+	'</thead>';
	}
	function getTuTr(){
		return ''
		+'<tr>'
		+	'<td><input type="checkbox" class="checkbox"></td>'
		+	'<td>${userName}</td>'
		+	'<td>${money}</td>'
		+	'<td>${teamName}</td>'
		+	'<td><a href="">编辑</a></td>'
		+'</tr>';
	}
	
	function getTuFooter(){
		return '</table>';
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