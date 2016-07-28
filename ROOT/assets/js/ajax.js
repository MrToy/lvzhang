function ajax(url){
	var xmlHttp;
	try
    {
  		// Firefox, Opera 8.0+, Safari
  		xmlHttp = new XMLHttpRequest();    // 实例化对象
    }
    catch( e )
    {
     	// Internet Explorer
     	try
     	{
      		xmlHttp = new ActiveXObject( "Msxml2.XMLHTTP" );
     	}
    	catch ( e )
     	{
      		try
      		{
       			xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
      		}
      		catch( e )
      		{
       			alert("您的浏览器不支持AJAX！");
       			return false;
      		}
      	}
    }
    xmlHttp.onreadystatechange=function(){
    	if( xmlHttp.readyState == 4  && xmlHttp.status == 200 )
     	{
      		 var msg=xmlHttp.responseText;	 
      		 alert(msg);
     	}
    }
    xmlHttp.open( "GET", url, true );
    xmlHttp.send( null );
}