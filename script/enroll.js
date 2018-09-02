function rec(){
    if(confirm("已经注册成功，是否跳转到登录界面？")){
        location.href="../pages/login.html";
    }
    else{
        return false;
    }
}