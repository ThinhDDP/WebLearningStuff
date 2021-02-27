var dom_web = document.getElementById("website");
var dom_name = document.getElementById("name");
var dom_password = document.getElementById("password");
var key;
var active = JSON.parse(localStorage.getItem("CurrentUser"));
var passwords = []
var passObj = {
    name: '',
    website: '',
    pass: ''
}

if (temp = localStorage.getItem("key"), temp != null){
    key = temp;
}

else {
    if (!alert("Vui lòng tạo tài khoản để dùng tính năng này")){
        window.location.href = "../index.html"
    }
}

document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault()
    var encrypted = CryptoJS.AES.encrypt(dom_password.value, key).toString();
    passObj.name = dom_name.value;
    passObj.website = dom_web.value;
    passObj.pass = encrypted;
    passwords.push(passObj);
    localStorage.setItem(active, JSON.stringify(passwords));
    alert("Thêm mật khẩu thành công");
})