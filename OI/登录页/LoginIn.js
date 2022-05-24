function Loginfun(){
	var text1 = document.getElementById("Myusername");
	var text2 = document.getElementById("Mypassword");
	if(text1.value==""){
		alert("用户名不能为空!");
		return false;
	}
	else if(text2.value==""){
		alert("密码不能为空!");
		return false;
	}
	else if(text1.value=="webdesign"){
		if(text2.value=="123456"){
			alert("登录成功!")
			window.open("../主页/index.html");
		}
		if(text2.value!="123456"){
			alert("登录失败!")
			return false;
		}
	}
	else if(text1.value!="webdesign"){
		if(text2.value=="123456"){
			alert("登录失败!")
			return false;
		}
		if(text2.value!="123456"){
			alert("登录失败!")
			return false;
		}
	}
}