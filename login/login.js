var dom_loginButton = document.getElementById("loginButton");
var dom_loginUser = document.getElementById("user-input");
var dom_loginPass = document.getElementById("pass-input");
var user;
var flag;

dom_loginButton.addEventListener('click', function(event){
    event.preventDefault();
    user = JSON.parse(localStorage.getItem('listUser'));
    if (user != null){
    for (var i = 0; i < user.length; ++i){
        if ((dom_loginUser.value == user[i].user) || (dom_loginUser.value == user[i].email)){
            flag = true;
            console.log(true);
            if (CryptoJS.MD5(dom_loginPass.value).toString(CryptoJS.enc.Hex) == user[i].pass){
                localStorage.setItem("CurrentUser", user[i].name)
                window.location.href = "../index.html";
            }
            else{
                document.getElementById("hidden").style.display = "block";
            document.getElementById("hidden").style.color = "red";
            }  
        }
        else{
            flag = false;
        }
    }
    if (!flag){
        document.getElementById("hidden").innerHTML = "Người dùng này không tồn tại, vui lòng tạo tài khoản";
        document.getElementById("hidden").style.display = "block";
    }
  }  
  else {
    document.getElementById("hidden").innerHTML = "Người dùng này không tồn tại, vui lòng tạo tài khoản";
    document.getElementById("hidden").style.display = "block";
  } 
})
