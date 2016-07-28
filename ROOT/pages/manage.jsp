<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="jlj.po.AdministratorInfo" %> 
<%@ page import="jlj.po.UserInfo" %> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>管理页面</title>
    <link href="manage_assets/css/dpl-min.css" rel="stylesheet" type="text/css" />
    <link href="manage_assets/css/bui-min.css" rel="stylesheet" type="text/css" />
    <link href="manage_assets/css/main-min.css" rel="stylesheet" type="text/css" />
</head>
<body>
<input type="hidden" value="${rank}" id="id_rank" />
<input type="hidden" value="${teamid}" id="id_team" />
<div class="header">
    <div class="dl-title">
        <!--<img src="/chinapost/Public/assets/img/top.png">-->
    </div>

    <div class="dl-log">欢迎您，<span class="dl-log-user">
    <%
    	Object obj=request.getSession().getAttribute("user");
    	String username="管理员";
    	if(obj instanceof AdministratorInfo){
    		AdministratorInfo admin=(AdministratorInfo)obj;
    		username=admin.getAdminName();
    	}else if(obj instanceof UserInfo){
    		UserInfo user=(UserInfo)obj;
    		username=user.getUserName();
    	}
    %>
    <%=username %>
    </span><a type="button" class="btn btn-danger btn-xs" href="logout">[退出]</a>
    </div>
</div>
<div class="content">
    <div class="dl-main-nav">
        <div class="dl-inform"><div class="dl-inform-title"><s class="dl-inform-icon dl-up"></s></div></div>
        <ul id="J_Nav"  class="nav-list ks-clear">
            <li class="nav-item dl-selected"><div class="nav-item-inner nav-home">系统管理</div></li>
            <li class="nav-item dl-selected" id="id_data_view"><div class="nav-item-inner nav-order">数据查询</div></li>
        </ul>
    </div>
    <ul id="J_NavContent" class="dl-tab-conten">
    </ul>
</div>
<script>
	window.WebRoot = '${pageContext.request.contextPath}';
</script>
<script type="text/javascript" src="manage_assets/js/jquery-1.8.1.min.js"></script>
<script type="text/javascript" src="manage_assets/js/bui-min.js"></script>
<script type="text/javascript" src="manage_assets/js/common/main-min.js"></script>
<script type="text/javascript" src="manage_assets/js/config-min.js"></script>
<script type="text/javascript" src="assets/js/public/jquerysession.js"></script>
<script>
    BUI.use('common/main',function(){
    	var rank=$("#id_rank").val();
    	var team=$("#id_team").val();
    	var config="";
    	if(rank=="admin"){
        	config = [{id:'1',menu:[{text:'系统管理',items:[{id:'2',text:'团队管理',href:'Node/index'},{id:'3',text:'人员管理',href:'User/index'}]}]},{id:'2',homePage : '2',menu:[{text:'数据查询',items:[{id:'2',text:'奖励情况',href:'Awards/index'}]}]}];
    	}else if(rank=="header"){
    		$("#id_data_view").hide();
    		config = [{id:'1',menu:[{text:'系统管理',items:[{id:'3',text:'人员管理',href:'User/index'+'?teamid='+team}]}]}];
    	}else{
    		alert("你未得到权限进入管理页面！");
    		history.go(-1);
    	}
    	new PageUtil.MainPage({
            modulesConfig : config
        });
    	$('.bui-menu-item a').on('click',function(){
    		$.ajax({
    			url : WebRoot + '/isLogin',
    			type : 'post',
    			success: function(data){
    		        if(data != true){
    		        	location.reload();
    		        }
    		    },
    		})
    	});
    });
</script>
</body>
</html>