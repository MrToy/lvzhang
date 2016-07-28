<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<title>历史记录</title>

<!-- Bootstrap -->
<link
	href="${pageContext.request.contextPath}/assets/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">
<style type="text/css">
	 html {
	height: 100%;
	width: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background:
		url("${pageContext.request.contextPath}/assets/images/person/bg.jpg");
}

body {
	height: 100%;
	width: 100%;
	background: rgba(245, 245, 245, 0.75);
	color:#000000;
}
      .font-center{
        text-align: center;
      }
      .font-black{
        color: #000000;
      }
      .font-white{
        color: #ffffff;
      }
      .font-yellow{
      	color:#FFD700;
      }
      .font-weight{
        font-weight: bold;
      }
      .font-red{
        color: red;
      }
      .left{
        float: left;
      }
      .right{
        float: right;
      }
      table{
      	margin:auto;
      }
      tr{
      	text-align:center;
      }
      td{
      	text-align:center;
      }
      th{
      	text-align:center;
      }
      
</style>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="font-green-2">
	<div class="container">
		<div class="row">
			<div class="span12">
				<h1 class="font-center font-red font-weight">历史记录</h1>
				<c:if test="${record.size()<=0}">不存在数据！</c:if>
				<c:if test="${record.size()>0}">
				<table class="table  table-hover">
					<thead>
						<tr>
							<th>编号</th>
							<th>VIP会员人数</th>
							<th>普卡会员人数</th>
							<th>奖金</th>
							<th>时间</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${record}" var="i">
							<tr>
								<td>${i.index }</td>
								<td>${i.vipnum }</td>
								<td>${i.normalnum }</td>
								<td>${i.reward }</td>
								<td><fmt:formatDate value="${i.date}" type="both" /></td>
							</tr>
						</c:forEach>

					</tbody>
				</table>
				<nav>
					<ul class="pager">
						<c:if test="${current - 1 > 0}">
							<li class="previous"><a href="history?p=${current-1},${perCount}"><span aria-hidden="true">&larr;</span>上一页</a></li>
						</c:if>
						<c:if test="${current - 1 <= 0}">
							<li class="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span>上一页</a></li>
						</c:if>
						<c:if test="${current + 1 <= pageCount}">
							<li class="next"><a href="history?p=${current+1},${perCount}">下一页 <span aria-hidden="true">&rarr;</span></a></li>
						</c:if>
						<c:if test="${current + 1 > pageCount}">
							<li class="next disabled"><a href="#">下一页 <span aria-hidden="true">&rarr;</span></a></li>
						</c:if>
					</ul>
				</nav>
				</c:if>
				<div>
					<a href="${pageContext.request.contextPath}/personalCenter" class="right font-red">个人中心</a>
				</div>
			</div>
		</div>
	</div>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script
		src="${pageContext.request.contextPath}/assets/jquery/js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script
		src="${pageContext.request.contextPath}/assets/bootstrap/js/bootstrap.min.js"></script>
	<script
		src="${pageContext.request.contextPath}/assets/js/public/paging.js"></script>
	<script src="${pageContext.request.contextPath}/assets/js/history.js"></script>
</body>
</html>