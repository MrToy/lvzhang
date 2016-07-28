<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<title>个人中心</title>

<!-- Bootstrap -->
<link
	href="${pageContext.request.contextPath}/assets/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script>
	window.WebRoot = '${pageContext.request.contextPath}';
</script>
<script src="${pageContext.request.contextPath}/assets/js/trim.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/ajax.js"></script>
<style type="text/css">
html{
	height: 100%;
	width: 100%;
}
body {
	height: 100%;
	width: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-image:url("${pageContext.request.contextPath}/assets/images/person/bg.jpg");
	font-size:16px;
	
}
.bg{
	margin:0,0;
	float:left;
	height: 100%;
	width: 100%;
	background-size: 100% 100%;
	background-color: rgba(245, 245, 245, 0.6);
}
.font-center {
	text-align: center;
}

.font-black {
	color: #000000;
}

.font-white {
	color: #ffffff;
}

.font-yellow {
	color: #FFD700;
}

.font-red {
	color: red;
}

.font-weight {
	font-weight: bold;
}

.left {
	float: left;
}

.right {
	float: right;
}
.dollar{
	background:url("${pageContext.request.contextPath}/assets/images/person/dollar.png");
}
.goldbean{
	background:url("${pageContext.request.contextPath}/assets/images/person/goldbean.png");
}
/* .width-height-auto {
	width: 110%;
	height: auto;
} */

/* .margin-left-auto {
	margin-left: 95px;
} */
.userdatabg{
    /* border: 5px solid #dedede; */
    padding:5px;
    padding-right:10px;
    background:#46b8da;
    -moz-border-radius: 5px;      /* Gecko browsers */
    -webkit-border-radius: 5px;   /* Webkit browsers */
    border-radius:5px;            /* W3C syntax */
}
.show {
	display: block;
}
.icon{
	height:26px;
	weiht:26px;
}
.hide {
	display: none;
}

/* #result {
	margin-left: -5px;
	margin-right: -5px;
} */
</style>
<script src="${pageContext.request.contextPath}/assets/js/person.js"></script>
</head>
<body>
	<div class="bg">
	<!--顶部-->
	<div class="container" id="top">
		<h1 class="font-center font-red font-weight">个人中心</h1>
		<p align="right">
			<a class="font-center font-red font-weight" id="username"
				href="${pageContext.request.contextPath}/manage">${user.userName}</a>&nbsp;&nbsp;
			<input type="hidden" value="${user.userId}" id="userid" /> <span
				class="font-black"> <span class="font-red font-weight"
				id="identify"> <c:if test="${user.userType==1}">VIP</c:if> <c:if
						test="${user.userType==0}">普卡</c:if>
			</span>会员欢迎您!
			</span> &nbsp;&nbsp; <a type="button" class="btn btn-danger btn-xs"
				href="${pageContext.request.contextPath}/logout">退出</a> &nbsp;&nbsp;
			<a href="${pageContext.request.contextPath}" type="button"
				class="btn btn-xs btn-info right">转到首页</a>
		</p>
	</div>
	<!--主体部分-->
	<div class="container" id="form">
		<div class="row">
			<!--计算规则-->
			<div class="col-md-4">
				<%-- <img src="${pageContext.request.contextPath}/assets/images/rule.png"
					class="width-height-auto"> --%>
				<div id="usercommandata">
					<span class="font-white userdatabg">&nbsp;&nbsp;分享奖</span>
					<p class="font-red font-weight"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直接分享普卡，奖励现金300元。</p>
					<p class="font-red font-weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直接分享Vip会员，奖励现金3000元。</p>
					<br>
					<span class="font-white userdatabg">&nbsp;&nbsp;返利奖</span>
					<p class="font-red font-weight"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;团队新增1名普卡会员，奖励 30元。</p>
					<p class="font-red font-weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;团队新增1名Vip，奖励300元。</p>
					<br>
					<span class="font-white userdatabg">&nbsp;&nbsp;福利奖</span>
					<p class="font-red font-weight"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总业绩达到100万时，奖励一次国内游。</p>
					<p class="font-red font-weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总业绩达到500万时，奖励一次全球游。</p>
					<p class="font-red font-weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总业绩达到1000万时，奖励奔驰车。</p>
					<p class="font-red font-weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总业绩达到5000万时，奖励别墅。</p>
				</div>
			</div>
			<div class="col-md-3">
			
			</div>
			<div class="col-md-5">
				<!--计算中心-->
				<form class="form-horizontal">
					<div class="form-group">
						<label class="font-black font-weight" for="vipnum">VIP会员：</label>
						<input class="form-control" type="text" id="vipnum"
							placeholder="VIP会员数目">
					</div>
					<div class="form-group">
						<label class="font-black font-weight" for="normalnum">普卡：</label>
						<input class="form-control" type="text" id="normalnum"
							placeholder="普卡数目">
					</div>
					<div class="form-group">
						<button type="button" class="btn btn-success left"
							onclick="calculate()">计算</button>
						<button type="reset" class="btn btn-danger right">重置</button>
					</div>
				</form>
				<br />
				<div id="result">
					<h5>
						<span class="font-black font-weight">VIP会员数：</span><span
							class="font-red font-weight" id="txtVipNum">0</span> &nbsp;&nbsp;
						<span class="font-black font-weight">普卡数：</span><span
							class="font-red font-weight" id="txtNormalNum">0</span>
					</h5>
					<div id="data">
						<div id="vipuserdata" class="show">
							<p>
								<span class="font-black font-weight">本金：</span><span
									class="font-red font-weight" id="benjin">38100</span>
									<!-- <span class="glyphicon glyphicon-yen font-yellow"></span> -->
									<img class="icon" alt="dollar" src="${pageContext.request.contextPath}/assets/images/person/dollar.png">
							</p>
							<p>
								<span class="font-black font-weight">赠送产品：</span><span
									class="font-red font-weight" id="product">10套</span>
							</p>
							<p>
								<span class="font-black font-weight">学子豆：</span><span
									class="font-red font-weight" id="studentbean">38100</span><!-- <span
									class="glyphicon glyphicon-tint font-yellow"></span> -->
									<img class="icon" alt="gold bean" src="${pageContext.request.contextPath}/assets/images/person/goldbean.png">
							</p>
							<p>
								<span class="font-black font-weight">分红点百分比：</span><span
									class="font-red font-weight" id="bounspoints">公司当日总业绩10%的加权平分</span>
							</p>
						</div>
						<div id="normaluserdata" class="show">
							<p>
								<span class="font-black font-weight">本金：</span><span
									class="font-red font-weight" id="benjin">3810</span><!-- <span
									class="glyphicon glyphicon-yen font-yellow"></span> -->
									<img class="icon" alt="dollar" src="${pageContext.request.contextPath}/assets/images/person/dollar.png">
							</p>
							<p>
								<span class="font-black font-weight">赠送产品：</span><span
									class="font-red font-weight" id="product">公司就送一套价值3810产品</span>
							</p>
							<p>
								<span class="font-black font-weight">草根创业平台：</span><span
									class="font-red font-weight" id="studentbean">推荐两名Vip会员，生成一个分红返利点</span>
							</p>
						</div>
						<br>
						<div id="commondata">

							<p>
								<span class="font-black font-weight">奖金：</span><span
									class="font-red font-weight" id="arward">0</span><!-- <span
									class="glyphicon glyphicon-yen font-yellow"></span> -->
									<img class="icon" alt="dollar" src="${pageContext.request.contextPath}/assets/images/person/dollar.png">
							</p>
							<!-- <p>
								<span class="font-black font-weight">总计：</span><span
									class="font-red font-weight" id="total">0</span><span
									class="glyphicon glyphicon-yen font-yellow"></span>
							</p> -->
							<p>
								<span class="font-black font-weight">奖金结发时间：</span><span
									class="font-red font-weight">奖金，日结周发，周三是提现时间</span>
							</p>
						</div>
					</div>
					<div>
						<button type="button" class="btn btn-success left"
							onclick="send()">提交数据</button>
						&nbsp;&nbsp; <a type="button" class="btn btn-info right"
							href="${pageContext.request.contextPath}/history">历史记录</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--底部-->
	<div class="container" id="bottom">
		<br>
		<center class="font-black font-weight">重庆绿彰科技发展有限公司</center>
	</div>
	</div>
	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script
		src="${pageContext.request.contextPath}/assets/jquery/js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script
		src="${pageContext.request.contextPath}/assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>