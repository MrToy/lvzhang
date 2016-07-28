<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/register.css">
    <script type="text/javascript">
    	window.WebRoot = '${pageContext.request.contextPath}';
    </script>
    <script src="assets/jquery/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/register.js"></script>
    <title>注册</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>

            <div class="col-md-6">
                <div class="register_panel">
                    <form class="form-horizontal register_form">
                        <h3 class="text-center" style="margin-bottom: 20px;">注  册</h3>
                        <div class="err_panel" id="id_err_panel"></div>
                        <div class="form-group">
                            <label for="name" class="col-sm-3 control-label">用户名：</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control txt_input" id="name" name="userName"
                                       placeholder="用户名">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-3 control-label">密码：</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control txt_input" id="password" name="userPwd"
                                       placeholder="密码">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="repassword" class="col-sm-3 control-label">确认密码：</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control txt_input" id="repassword"
                                       placeholder="确认密码">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-3 col-sm-9" id="rank_user">
                                <label class="checkbox-inline">
                                    <input type="radio" name="userType" id="rank_nomal"
                                           value="0" > 普通用户
                                </label>
                                <label class="checkbox-inline">
                                    <input type="radio" name="userType" id="rank_vip"
                                           value="1" checked> VIP用户
                                </label>
                            </div>
                        </div>

                        <div class="form-group" style="border-bottom: dashed 1px #cccccc"></div>

                        <div class="form-group">
                        <div></div>
                            <div class="col-sm-offset-3 col-sm-5">
                                <button type="button" id="id_btn_reg" class="btn_reg">注册</button>
                            </div>
                            <div class="col-sm-4">
                            <a href="login">已有账号？立即登录</a>
                            </div>
                        </div>

                        <!--<div class="form-group" style="padding: 10px 15px 0px 15px;">-->
                            <!--<div class="col-sm-3">-->
                                <!--<button type="submit" class="btn_reg">注册</button>-->
                            <!--</div>-->
                            <!--<div class="col-sm-6"></div>-->
                            <!--<div class="col-sm-3">-->
                                <!--<button type="submit" class="btn btn-danger btn_res">重置</button>-->
                            <!--</div>-->
                        <!--</div>-->

                    </form>
                </div>
            </div>

            <div class="col-md-3"></div>
        </div>
    </div>
</body>
</html>