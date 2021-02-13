var dom_signupUser = document.getElementById("user");
var dom_signupPass = document.getElementById("pass");
var dom_signupEmail = document.getElementById("email");
var dom_signupName = document.getElementById("name");
var dom_loginUser = document.getElementById("user-input");
var dom_loginPass = document.getElementById("pass-input");
var dom_signupButton = document.getElementById("signupButton");

var listUser = [];
var usrObject = {};

if (listUser != null){
    localStorage.setItem("listUser", JSON.stringify(listUser));
}


function pushItem (val1, val2, val3){
    usrObject.user = val1;
    usrObject.pass = val2;
    usrObject.email = val3;
    listUser.push(usrObject);
    localStorage.setItem("listUser", JSON.stringify(listUser))
}

function checkEmpty (val1, val2, val3, val4){
    if (val1 == null || val2 == null || val3 == null || val4 == null){
        return true;
    }
    return false
}

dom_signupButton.addEventListener("click", function(event){
    event.preventDefault();
    if (checkEmpty(dom_signupEmail.value, dom_signupPass.value, dom_signupUser.value, dom_signupName.value)){
        alert("Vui lòng điền đủ thông tin");
    }
    pushItem(dom_signupUser.value, dom_signupPass.value, dom_signupEmail.value);
})
