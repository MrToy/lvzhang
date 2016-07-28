// 管理页面样式
(function(){
	$(document).ready(function(){
		
		var rank=$("#rank").val();
		
		if($('.team-query').length == 1){
			getDataByTeamName('1,5','%');
		}
		if($('.query').length == 1){
			getDataByName('1,5','%');
		}
		if($('.user-query').length == 1){
			getDataByUserName('1,5','%');
		}
		$('.team-query').on('click',function(){
			getDataByTeamName('1,5',$('input[name=team-query]').val());
		});
		$('.user-query').on('click',function(){
			getDataByUserName('1,5',$('input[name=user-query]').val());
		});
		$('.query').on('click',function(){
			getDataByName('1,5',$('input[name=query]').val());
		});
		btnCheck();
		hideBox();
		
		//绑定删除事件
//		$(".del-u").on('click',function(){
//			alert("fff");
//		});
		
		$('#add').on('click',function(){
			var obj=document.getElementsByName("box");
			var count=0;
			//循环检测是否被选中
			var s='';
			for(var i=0;i<obj.length;i++){
				if(obj[i].checked){
					s+=obj[i].value+',';
					count++;
				}
			}
			if(count==0){
				alert('你还未选择人员，请重新选择');
				return;
			}
			window.location.href=window.WebRoot+'/User/add'+'?usersid='+s;
		});
		
	});
	//隐藏事件
	function hideBox(){
		var rank=$("#rank").val();
		var obj=document.getElementsByName("boxes");	
		if(rank=="header"){
			for(var i=0;i<obj.length;i++){
				obj[i].style.display = "none"; 
			}
		}
	}
	
	// 绑定选中按钮
	function btnCheck(){
		$('#checkAll').click(function (){
			$("input[type=checkbox][id^=box]").prop('checked',this.checked);
		});
	}
	
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
					// 绑定更新按钮
					btnUpd();
					btnDel();
					// 绑定点击分页按钮
					btnPage(perCount,data['data']['key']);
					
				}else if(errno == 10008){
					alert('没有找到数据，换个关键词试试!');
				}
			}
		})
	}
	function getDataByName(p,key){
		if(key == ''){
			alert('请输入要查询的数据!');
			return false;
		}
		$.ajax({
			url : WebRoot + '/tu/tu',
			type : 'post',
			data : {
				p : p,
				name : key
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
					
					var table = getTuHeader();
					var tr = getTuTr();
					for(var i = 0; i < (list == null ? 0 : list.length); i ++){
						var item = list[i];
						table += getHtml({
							userId : item['userId'],
							teamName : item['teamName'],
							userName : item['userName'],
							money : item['money'],
						},tr);
					}
					table += getTuFooter();
					$('.paging').prev('.tu-data').html('');
					$('.paging').prev('.tu-data').append(table);
					$('.paging').html(html);
					// 绑定更新按钮
					btnUpd();
					btnDel();
					// 绑定点击分页按钮
					btnPage(perCount,data['data']['key']);
					// 绑定选中
					btnCheck();
					hideBox();
				}else if(errno == 10008){
					alert('没有找到数据，换个关键词试试!');
				}
			}
		})
	}
	function getDataByUserName(p,key){
		if(key == ''){
			alert('请输入要查询的数据!');
			return false;
		}
		$.ajax({
			url : WebRoot + '/tu/user',
			type : 'post',
			data : {
				p : p,
				userName : key
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
					
					var table = getUserHeader();
					var tr = getUserTr();
					for(var i = 0; i < (list == null ? 0 : list.length); i ++){
						var item = list[i];
						table += getHtml({
							isHeader : item['isHeader'] == false ? '否' : '是',
							teamName : item['teamName'],
							userName : item['userName'],
							awardsTime : item['awardsTime'],
							money : item['money'],
						},tr);
					}
					table += getUserFooter();
					$('.paging').prev('.user-data').html('');
					$('.paging').prev('.user-data').append(table);
					$('.paging').html(html);
					// 绑定更新按钮
					btnUpd();
					btnDel();
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
			if($('.paging').hasClass('user-query-paing')){
				getDataByUserName(p,key);
			}
		});
	}
	// 绑定更新按钮
	function btnUpd(){
		$.btnUpd();
	}
	
	//绑定删除按钮
	function btnDel(){
		$.btnDel();
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
		if(typeof(options.userId) != 'undefined'){
			html = html.replace(/\${userId}/g,options.userId);
		}else{
			html = html.replace(/\${userId}/g,'空');
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
			html = html.replace(/\${money}/g,0);
		}
		if(typeof(options.awardsTime) != 'undefined'){
			html = html.replace(/\${awardsTime}/g,options.awardsTime);
		}else{
			html = html.replace(/\${awardsTime}/g,'空');
		}
		if(typeof(options.isHeader) != 'undefined'){
			html = html.replace(/\${isHeader}/g,options.isHeader);
		}else{
			html = html.replace(/\${isHeader}/g,'否');
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
		+	'<td><a href="../User/index?teamid=${teamId}">${teamName}</a></td>'
		+	'<td>${teamCount}</td>'
		+	'<td><a class="del-t" style="padding:0 5px;">删除</a><a class="upd-t" style="padding:0 5px;">修改</a></td>'
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
		+			'<th name="boxes"><input type="checkbox" class="checkbox" id="checkAll"></th>'
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
		+	'<td name="boxes"><input name="box" type="checkbox" value="${userId}" class="checkbox" id="box_${userId}"></td>'
		+	'<td>${userName}</td>'
		+	'<td>${money}</td>'
		+	'<td>${teamName}</td>'
		+	'<td><a class="del-u" style="padding:0 5px;">删除</a></td>'
		+'</tr>';
	}
	
	function getTuFooter(){
		return '</table>';
	}
	function getUserHeader(){
		return ''
		+'<table class="table table-bordered table-hover definewidth m10">'
		+	'<thead>'
		+		'<tr>'
		+			'<th>用户名</th>'
		+			'<th>是否为队长</th>'
		+			'<th>所属团队</th>'
		+			'<th>奖励金额</th>'
		+			'<th>奖励时间</th>'
		+		'</tr>'
		+	'</thead>';
	}
	function getUserTr(){
		return ''
		+'<tr>'
		+	'<td>${userName}</td>'
		+	'<td>${isHeader}</td>'
		+	'<td>${teamName}</td>'
		+	'<td>${money}</td>'
		+	'<td>${awardsTime}</td>'
		+'</tr>';
	}
	
	function getUserFooter(){
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