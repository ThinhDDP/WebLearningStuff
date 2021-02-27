var dom_signupUser = document.getElementById("user");
var dom_signupPass = document.getElementById("pass");
var dom_signupEmail = document.getElementById("email");
var dom_signupName = document.getElementById("name");
var dom_signupButton = document.getElementById("signupButton");
var dom_loginButton = document.getElementById("loginButton");

var listUser = [];
var usrObject = {};
var user;

function isExist(email, user){
    if (temp = JSON.parse(localStorage.getItem("listUser")), temp != null){
        console.log(temp)
        for (var i = 0; i < temp.length; ++i){
            console.log(i)
            if (email == temp[i].email || user == temp[i].user){
                return true;
            }
            return false;
        }
    }
    return false;
}

function makekey(length){
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
    usrObject.pass = CryptoJS.MD5(val2).toString(CryptoJS.enc.Hex);
    usrObject.email = val3;
    usrObject.name = val4;
    usrObject.key = makekey(12);
    listUser.push(usrObject);
    localStorage.setItem("listUser", JSON.stringify(listUser))
    localStorage.setItem("CurrentUser", JSON.stringify(dom_signupName.value));
    localStorage.setItem("key", usrObject.key);
}

function checkEmpty (val1, val2, val3, val4){
    if (val1 == null || val2 == null || val3 == null || val4 == null || val1 == "" || val2 == "" || val3 == "" || val4 == ""){
        return true;
    }
    return false
}


dom_signupButton.addEventListener("click", function(event){
    event.preventDefault();
    if (!isExist(dom_signupEmail.value, dom_signupUser.value)){
        if (checkEmpty(dom_signupEmail.value, dom_signupPass.value, dom_signupUser.value, dom_signupName.value)){
            alert("Vui lòng điền đủ thông tin");
        }
        pushItem(dom_signupUser.value, dom_signupPass.value, dom_signupEmail.value, dom_signupName.value);
        window.location.href = "../index.html"
    }
    else{
        document.getElementById("status").style.display = "block";
        document.getElementById("status").style.color = "red";
    }  
});

if (listUser != null){
    localStorage.setItem("listUser", JSON.stringify(listUser));
    localStorage.setItem("CurrentUser", JSON.stringify(dom_signupName.value));
}