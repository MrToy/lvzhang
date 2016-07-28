
$(document).ready(function(){
    $("#id_btn_reg").bind("click",function (){
        $("#id_err_panel").hide();
        var name=$("#name").val().trim();
        var password=$("#password").val().trim();
        var repassword=$("#repassword").val().trim();
        var userType=$("#rank_user input[name='userType']:checked").val();
        if(name==""||password==""){
            $("#id_err_panel").html("<span class='err_tip'>请输入用户名或密码！</span>").show();
        }else if(!isNaN(name)){
        	$("#id_err_panel").html("<span class='err_tip'>用户名不能为纯数字！</span>").show();
        }else if(password!=repassword){
        	$("#id_err_panel").html("<span class='err_tip'>两次密码不一致！</span>").show();
        }else{
        $.ajax({
        	url: WebRoot + "/registing",
        	type:'post',
        	data:{
        		userName:name,
        		userPwd:password,
        		userType:userType
        	},
        	success:function(data){
        		if(data=="-1"){
        			alert("注册失败！")
        		}else{
        			alert("注册成功！您的用户ID是："+data+"\n赶快去登陆吧！");
        		}
        	},
        	error:function(data){
        		alert("系统异常!");
        	}
        });
        }
    });
});