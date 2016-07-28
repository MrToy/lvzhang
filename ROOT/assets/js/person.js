window.onload=function(){
  check_indetify();
  init_div();
}

/**
 *计算的核心方法
 */
function calculate(){
  check_indetify();
  init_div();
  calculate_init();
  init_data();
  calculate_core();
}

/**
 * 将数据初始化，过滤不合法数据
 * 不合法数据过滤为0，小数数据向下取整
 */
function calculate_init(){
  var normalnum=document.getElementById("normalnum").value;
  var vipnum=document.getElementById("vipnum").value;
  var txtVipNum=document.getElementById("txtVipNum");
  var txtNormalNum=document.getElementById("txtNormalNum");
  if(vipnum.trim()==""||isNaN(vipnum)){
    txtVipNum.innerHTML=0;
  }
  else{
    txtVipNum.innerHTML=Math.floor(vipnum);
  }
  if(normalnum.trim()==""||isNaN(normalnum)){
    txtNormalNum.innerHTML=0;
  }
  else{
    txtNormalNum.innerHTML=Math.floor(normalnum);
  }
}
/**
 *要计算数据初始化。
 */
var vipnumcal;
var normalnumcal;
function init_data(){

  vipnumcal=document.getElementById("txtVipNum").innerText.trim();
  normalnumcal=document.getElementById("txtNormalNum").innerText.trim();

  if(vipnumcal==""||isNaN(vipnumcal)){
    vipnumcal=0;
  }
  else{
   vipnumcal=Math.floor(vipnumcal);
  }
  if(normalnumcal==""||isNaN(normalnumcal)){
    normalnumcal=0;
  }
  else{
   normalnumcal=Math.floor(normalnumcal);
  }
}

/**
 *判断用户身份，过滤非法身份的用户
 */
var identify;
function check_indetify(){
  identify=document.getElementById("identify").innerText;
  if(!identify.match("VIP")&&!identify.match("普卡")){
    alert("非法用户！")
    window.history.back(-2);
  }
}

/**
 *根据登陆身份，初始化要显示的数据
 */
function init_div(){
  var vipuserdata=document.getElementById("vipuserdata");
  var normaluserdata=document.getElementById("normaluserdata");
  if(identify.match("VIP")){
    if(hasClass(vipuserdata,"hide")){
       removeClass(vipuserdata,"hide");
    }
    if(!hasClass(vipuserdata,"show")){
       addClass(vipuserdata,"show");
    }
    if(hasClass(normaluserdata,"show")){
       removeClass(normaluserdata,"show");
    }
    if(!hasClass(normaluserdata,"hide")){
       addClass(normaluserdata,"hide");
    }
  }else{
    if(hasClass(vipuserdata,"show")){
       removeClass(vipuserdata,"show");
    }
    if(!hasClass(vipuserdata,"hide")){
       addClass(vipuserdata,"hide");
    }
    if(hasClass(normaluserdata,"hide")){
       removeClass(normaluserdata,"hide");
    }
    if(!hasClass(normaluserdata,"show")){
       addClass(normaluserdata,"show");
    }
  }
}

/**
 *计算的核心方法
 */
var vip=0;
var normal=0;
var arwardvip=3000;
var arwardnormal=300;

function calculate_core(){
	var benjin;
	var total;
	var tnormal=document.getElementById("txtNormalNum").innerText.trim();
	var tvip=document.getElementById("txtVipNum").innerText.trim();
	var arward=tnormal*arwardnormal+tvip*arwardvip;
	if(identify.match("VIP")){
		benjin=vip;
		total=benjin+arward;
	}else{
		benjin=normal;
		total=arward+benjin;
	}
	document.getElementById("arward").innerHTML=arward;
	document.getElementById("benjin").innerHTML=benjin;
	document.getElementById("total").innerHTML=total;
}

function send(){
	var temp=confirm("请先确认要保存的数据,确定要保存吗？");
	if(temp){
		var url=urlcreater();
		console.log(url);
		ajax(url);
	}else{
		alert("已经取消保持!");
	}
}
/**
 *拼接url字符串
 */
function urlcreater(){
	var userid=document.getElementById("userid").value.trim();
	var awardsVipnumber=document.getElementById("txtVipNum").innerText.trim();;
	var awardsNomalnumber=document.getElementById("txtNormalNum").innerText.trim();;

	var url= WebRoot + "/save?"+"userId="+userid+"&awardsVipnumber="+awardsVipnumber+"&awardsNormalnumber="+awardsNomalnumber+"&";
	if(identify.match("VIP")){
		url+="description=1";
	}else if(identify.match("普卡")){
		url+="description=0";
	}
	return url;
}

/**
 *添加类/删除类/判断是否含有类
 */
function hasClass(elements,cName){
    return !!elements.className.match(new RegExp( "(\\s|^)" + cName + "(\\s|$)")); 
};  
function addClass( elements,cName ){  
    if(!hasClass(elements,cName)){  
        elements.className += " " + cName;  
    };  
};  
function removeClass( elements,cName ){  
    if( hasClass( elements,cName ) ){  
        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
    };
};