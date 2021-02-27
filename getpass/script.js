var dom_web = document.getElementById("website");
var active = JSON.parse(localStorage.getItem("CurrentUser"));
var dom_table = document.getElementById("table");
var key;

if (localStorage.getItem("key") == null){
    if (!alert("Vui lòng đăng nhập để dùng tính năng này")){
        window.location.href = "../index.html";
    }
}
else{
    key = localStorage.getItem("key");
}

var password = JSON.parse(localStorage.getItem(active));
if (password == null){
    if (!alert("Bạn chưa tạo mật khẩu nào")){
        window.location.href = "../generator/passGenerator.html";
    }
}

function create_row(website, user, password){
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    dom_table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td.innerHTML = website;
    td2.innerHTML = user;
    td3.innerHTML = password;
}

document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault();
    for (var i = 0; i < password.length; i++){
       if (password[i].website == dom_web.value){
         if (CryptoJS.AES.decrypt(password[i].pass, key) != ''){
             create_row(password[i].website, password[i].name, CryptoJS.AES.decrypt(password[i].pass, key).toString(CryptoJS.enc.Utf8));
            }
            else {
                alert("Bạn chưa có mật khẩu này");
            }
        }
        else{
            alert("Bạn chưa có mật khẩu này");
        }
        
    }
})