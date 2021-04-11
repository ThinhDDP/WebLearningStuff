var dom_web = document.getElementById("website");
var dom_name = document.getElementById("name");
var dom_password = document.getElementById("password");
var key;
var active = JSON.parse(localStorage.getItem("CurrentUser"));
var passwords = JSON.parse(localStorage.getItem(active));
if (passwords == null){
    passwords = [];
}


if (temp = localStorage.getItem("key"), temp != null){
    key = temp;
}

else {
    if (!alert("Vui lòng tạo tài khoản để dùng tính năng này")){ //Make sure alert pop up before href
        window.location.href = "../index.html"
    }
}

document.getElementById("submit").addEventListener('click', function(event){
    var passObj = { //Object Template for password
        name: '',
        website: '',
        pass: ''
    }
    event.preventDefault()
    console.log(passwords);
    var encrypted = CryptoJS.AES.encrypt(dom_password.value, key).toString(); //Convert WordArray to string
    passObj.name = dom_name.value;
    passObj.website = dom_web.value;
    passObj.pass = encrypted;
    debugger;
    console.log(passwords);
    passwords.push(passObj);
    console.log(passwords)
    localStorage.setItem(active, JSON.stringify(passwords)); //Saves to localstorage
    alert("Thêm mật khẩu thành công");
})