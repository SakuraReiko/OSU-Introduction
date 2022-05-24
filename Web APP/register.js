/*内容不能为空，若空提交后弹出窗口提示*/
function registerfun(){
	var text1 = document.getElementById("Myname");
	var text2 = document.getElementById("Mypassword1");
	var text3 = document.getElementById("Mypassword2");
	var text4 = document.getElementById("Myemail");
	var register="";
	register +="注册信息一览:" +"\n"
	register +="用户名:" + document.getElementById("Myname").value+"\n";
	register +="密码:" + document.getElementById("Mypassword2").value+"\n";
	register +="邮箱地址:" + document.getElementById("Myemail").value;
	if(text1.value==""){
		alert("用户名不能为空!");
		return false;
	}
	else if(text2.value==""){
		alert("密码不能为空!");
		return false;
	}
	else if(text3.value==""){
		alert("请重复填写密码!");
		return false;
	}
	else if(text4.value==""){
		alert("邮箱地址不能为空!");
		return false;
	}
	/*姓名最大输入15个字符，若超出提交则弹窗提示*/
	else if(text1.value!=""){
		if(text1.value.length>15){
			alert("姓名长度超出范围!")
			return false;
		}
		/*密码与确认密码要相同，若不相同则弹窗提示*/
		else if(text2.value!=text3.value){
			alert("密码与确认密码不一致!")
			return false;
		}
		/*当按下提交按钮后，弹出窗口显示注册的必填信息*/
		alert(register);
		window.open("login.html");
	}
}

