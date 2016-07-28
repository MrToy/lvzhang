$(document).ready(function(){
	$("#add_new_team").on('click',function(){
		
		var obj=document.getElementsByName("box");
		var count=0;
		var header='';//队长
		var users = '';//所有用户
		var teamName=$("#teamname").val();//队名
		for(var i=0;i<obj.length;i++){
			users+=obj[i].value+',';		
			if(obj[i].checked){
				count++;
				header=obj[i].value;
			}
		}
		if(count!=1){
			alert("必须且只能设置一个队长！");
			return;
		}else if(teamname==""||!isNaN(teamname)){
			alert("团队名称不能为空且不能为纯数字！");
			return;
		}
		
		
		$.ajax({
        	url: WebRoot + "/addteam",
        	type:'post',
        	data:{
        		users : users,
        		header:header,
        		teamName:teamName
        	},
        	success:function(data){
        		if(data=="-1"){
        			alert("添加团队失败！")
        		}else{
        			alert("添加团队成功！团队ID是："+data+"\n");
        		}
        	},
        	error:function(data){
        		alert("系统异常!");
        	}
        });
	});
});