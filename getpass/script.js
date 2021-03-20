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
    var password = JSON.parse(localStorage.getItem(active));
    if (password == null){ 
        if (!alert("Bạn chưa tạo mật khẩu nào")){
            window.location.href = "../generator/passGenerator.html";
        }
    }
}

function create_row(website, user, password){
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3Container = document.createElement("TD");
    var td3 = document.createElement("INPUT");
    var td4Container = document.createElement("TD");
    var td4 = document.createElement("INPUT")
    td4.type = "button"
    td4.value = "Delete"
    td4.setAttribute("onClick", "javascript: deleteRow(this)")
    td3.type = "password";
    td3.setAttribute("onClick", "javascript: change(this)")
    td3.value = password;
    td3.className = "input";
    dom_table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3Container);
    tr.appendChild(td4Container)
    td.innerHTML = website;
    td2.innerHTML = user;
    td4Container.appendChild(td4)
    td3Container.appendChild(td3);
}
function getPass(){
    for (var i = 0; i < password.length; ++i){
        create_row(password[i].website, password[i].name, CryptoJS.AES.decrypt(password[i].pass, key).toString(CryptoJS.enc.Utf8));
    }
}

function change(el){
    var element = el;
    el.type = 'text';
}

function deleteRow(btn){
    var row = btn.parentNode.parentNode;
    var temp;
    path = row.childNodes[0].textContent;
    row.parentNode.removeChild(row);
    temp = password.find(password => password.website == path);
    var index = password.findIndex( password => {
        if (password.website === temp.website) {
          if (password.password === temp.password){
              if (password.name === temp.name){
                  return true;
              }
          }
        }
      });
    password.splice(index, 1);
    localStorage.setItem(active, JSON.stringify(password));
}

getPass();

// document.getElementById("submit").addEventListener('click', function(event){
//     event.preventDefault();
//     for (var i = 0; i < password.length; i++){
//        if (password[i].website == dom_web.value){
//          if (CryptoJS.AES.decrypt(password[i].pass, key) != ''){
//              create_row(password[i].website, password[i].name, CryptoJS.AES.decrypt(password[i].pass, key).toString(CryptoJS.enc.Utf8));
//             }
//             else {
//                 alert("Bạn chưa có mật khẩu này");
//             }
//         }
//         else{
//             alert("Bạn chưa có mật khẩu này");
//         }
        
//     }
// })