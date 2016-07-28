<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<c:if test="${message.refresh == true}">
		<meta http-equiv="Refresh" content="${message.refreshTime}; url=${message.url}"/>
	</c:if>
	<title>${message.title}</title>
	<style type="text/css">
		body,h1,p{
			margin: 0;
			padding: 0;
		}
		body{
			background-image: url("images/login/6.jpg");
			background-size:100%,100%; 
		}
	</style>
</head>
<body>
	<div style="padding: 24px 48px;background: #fff;font-family: 微软雅黑;color: #333;font-size: 24px">
		<c:if test="${message.errMsg == true}">
		<h1 style="font-size: 100px;font-weight: normal;margin-bottom: 12px">:(</h1>
		</c:if>
		<c:if test="${message.errMsg == false}">
		<h1 style="font-size: 100px;font-weight: normal;margin-bottom: 12px">:)</h1>
		</c:if>
		<p style="line-height: 1.8em;font-size: 36px;">${message.text}</p>
		<br />
		<c:if test="${message.refresh == true}">	
		浏览器将在<span class="time">${message.refreshTime}</span>秒后跳转！点击此处直接跳转到
		<a href="${message.url}">${message.urlName}</a>
		</c:if>
	</div>
	<c:if test="${message.refresh == true}">
	<script>
		// 设置时延，修改文本内容
		function delay(){
			var tag = document.getElementsByClassName("time")[0];
			var time = tag.innerHTML;
			if(time-->1){
				setTimeout(function(){
					tag.innerHTML = time;
					delay();
				},1000);
			}
		}
		delay();
	</script>
	</c:if>
</body>
</html>
