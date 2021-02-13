var dom_signupUser = document.getElementById("user");
var dom_signupPass = document.getElementById("pass");
var dom_signupEmail = document.getElementById("email");
var dom_signupName = document.getElementById("name");
var dom_signupButton = document.getElementById("signupButton");
var dom_loginButton = document.getElementById("loginButton");

var listUser = [];
var usrObject = {};
var user;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

function pushItem (val1, val2, val3, val4){
    usrObject.user = val1;
    usrObject.pass = val2;
    usrObject.email = val3;
    usrObject.key = makeid(12);
    usrObject.name = val4;
    listUser.push(usrObject);
    localStorage.setItem("listUser", JSON.stringify(listUser))
}

function checkEmpty (val1, val2, val3, val4){
    if (val1 == null || val2 == null || val3 == null || val4 == null){
        return true;
    }
    return false
}

function checkData(input, check){
    return (input == check);
}

dom_signupButton.addEventListener("click", function(event){
    event.preventDefault();
    if (checkEmpty(dom_signupEmail.value, dom_signupPass.value, dom_signupUser.value, dom_signupName.value)){
        alert("Vui lòng điền đủ thông tin");
    }
    pushItem(dom_signupUser.value, dom_signupPass.value, dom_signupEmail.value);
});

if (listUser != null){
    localStorage.setItem("listUser", JSON.stringify(listUser));
}

