
$(function(){

    $("#id_login_err_panel").hide();

   $("#rememberCheck").change(function(){
       $("#icon_box").removeClass();
       $(this).prop("checked")?$("#icon_box").addClass("selected"):$("#icon_box").addClass("icon_checkbox");
   });
});

$(document).ready(function(){
    $("#btn_login_submit").bind("click",function(){

        $("#id_login_err_panel").hide();

        var name=$("#id_username").val();
        var password=$("#id_password").val();
        if(name.length==0){
            $("#id_login_err_panel").html("<span class='err_tip'>请输入用户名</span>").show();
            $("#errorpassword").hide();
            
        }else if(password.length==0){
            $("#id_login_err_panel").html("<span class='err_tip'>请输入密码</span>").show();
            $("#errorpassword").hide();
        }else{
            $(".login_panel").submit();
        }
    });
});
