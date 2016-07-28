<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/assets/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="../manage_assets/css/bootstrap-responsive.css" />
<link rel="stylesheet" type="text/css"
	href="../manage_assets/css/style.css" />
<script type="text/javascript">
	window.WebRoot = '${pageContext.request.contextPath}';
</script>
<script type="text/javascript" src="../manage_assets/js/jquery.js"></script>
<script type="text/javascript" src="../manage_assets/js/bootstrap.js"></script>
<script type="text/javascript" src="../manage_assets/js/ckform.js"></script>
<script type="text/javascript" src="../manage_assets/js/common.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/public/paging.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/admin.js"></script>
<style type="text/css">
body {
	padding-bottom: 40px;
}

.sidebar-nav {
	padding: 9px 0;
}

@media ( max-width : 980px) {
	/* Enable use of floated navbar text */
	.navbar-text.pull-right {
		float: none;
		padding-left: 5px;
		padding-right: 5px;
	}
}
</style>
</head>
<body>
	<div class="form-inline definewidth m20">
		用户名称： <input type="text" name="user-query" id="rolename"
			class="abc input-default" placeholder="" value="">&nbsp;&nbsp;
		<button type="submit" class="user-query btn btn-primary">查询</button>
	</div>
	<div class="user-data"></div>
	<!-- <table class="table table-bordered table-hover definewidth m10">
		<thead>
			<tr>
				<th>用户名</th>
				<th>是否为队长</th>
				<th>所属团队</th>
				<th>奖励类型</th>
				<th>奖励金额</th>
				<th>奖励时间</th>
			</tr>
		</thead>
		<tr>
			<td>张三</td>
			<td>否</td>
			<td>第一印象</td>
			<td>分享奖励</td>
			<td>￥5000.0</td>
			<td>2016-6-12 14:32</td>
		</tr>
		<tr>
			<td>李四</td>
			<td>是</td>
			<td>骚客</td>
			<td>分享奖励</td>
			<td>￥2000.0</td>
			<td>2016-6-12 14:32</td>
		</tr>
	</table> -->
	<div class="paging user-query-paing" style="padding: 0 40px"></div>
	<script>
		$(function() {

			$('#addnew').click(function() {

				window.location.href = "add.html";
			});

		});

		function del(id) {

			if (confirm("确定要删除吗？")) {

				var url = "index.html";

				window.location.href = url;

			}

		}
	</script>
</body>
</html>