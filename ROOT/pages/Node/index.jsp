<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/admin-upd.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/admin-del.js"></script>

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
		团队名称： <input type="text" name="team-query" id="rolename"
			class="abc input-default" placeholder="" value="">&nbsp;&nbsp;
		<a href="javascript:;" class="team-query btn btn-primary">查询</a>
	</div>
	<div class="team-data">
	</div>
	<div class="paging team-query-paging" style="padding: 0 40px"></div>
</body>
</html>