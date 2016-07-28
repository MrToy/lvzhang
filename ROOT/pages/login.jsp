<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/login.css">
<script src="assets/jquery/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/login.js"></script>
<title>登录</title>
</head>
<body>
	<div class="login_form">
		<h3 style="margin-left: 10px">登录</h3>
		<div class="login_err_panel" id="id_login_err_panel"></div>
		<c:if test="${loginFailed==0}">
			<span id="errorpassword" class="err_password">用户名和密码不匹配！</span>
		</c:if>
		<input id="loginfailed" type="hidden" value="${loginFailed}">
		<form class="form-horizontal login_panel" action="loging"
			method="post">
			<div class="input_div">
				<i class="icon_login name"></i> <input name="username"
					id="id_username" class="form-control" type="text"
					placeholder="用户名/用户ID">
			</div>

			<div class="input_div">
				<i class="icon_login pwd"></i> <input name="password"
					id="id_password" class="form-control" type="password"
					placeholder="密码">
			</div>
			<div class="login_help_panel">
				<a class="login_forget_pwd" href="register">没有账号？</a> <label
					class="frm_checkbox_label" for="rememberCheck"> <i
					class="icon_checkbox" id="icon_box"></i> <input
					class="frm_checkbox" name="rememberme" id="rememberCheck"
					type="checkbox">管理员
				</label>
			</div>
			<div class="login_btn_panel">
				<button id="btn_login_submit" type="button" class="btn_login">登录</button>
			</div>
		</form>
	</div>
</body>
</html>