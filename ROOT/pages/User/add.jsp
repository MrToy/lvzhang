<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <script type="text/javascript">
	window.WebRoot = '${pageContext.request.contextPath}';
</script>
    <link rel="stylesheet" type="text/css" href="../manage_assets/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="../manage_assets/css/bootstrap-responsive.css"/>
    <link rel="stylesheet" type="text/css" href="../manage_assets/css/style.css"/>
    <script type="text/javascript" src="../manage_assets/js/jquery.js"></script>
    <script type="text/javascript" src="../manage_assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="../manage_assets/js/ckform.js"></script>
    <script type="text/javascript" src="../manage_assets/js/common.js"></script>
    <script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/add.js"></script>
	<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/admin-upd.js"></script>

    <style type="text/css">
        body {
            padding-bottom: 40px;
        }

        .sidebar-nav {
            padding: 9px 0;
        }

        @media (max-width: 980px) {
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
<div class="form-inline definewidth m20" >
   团队名：
    <input type=text name="teamname" id="teamname" class="abc input-default" placeholder="" value="">
    &nbsp;&nbsp;
    <button id="add_new_team" type="button" class="btn btn-success">确定新增为团队</button>
</div>
<table class="table table-bordered table-hover definewidth m10">
    <thead>
    <tr>
        <th>用户名称</th>
        <th>用户类型</th>
        <th>创建时间</th>
        <th>设置为队长</th>
    </tr>
    </thead>
    <c:forEach items='${userlist}'  var='item' >
    <tr>
        <td>${item.userName}</td>
        <td>${item.typeStr}</td>
        <td>${item.userCreatetime}</td>
        <td><input value="${item.userId}" type="checkbox" name="box" class="checkbox"></td>
    </tr>
    </c:forEach>
</table>
</body>
</html>
<script>
    $(function () {


        $('#addnew').click(function () {

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