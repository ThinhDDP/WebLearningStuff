if (temp = JSON.parse(localStorage.getItem('CurrentUser')), temp != null){
    document.getElementById("status").removeAttribute("href")
    document.getElementById("status").innerHTML = "Xin chào " + String(temp);
    document.getElementById("status").style.marginLeft = "500px";
    document.getElementById("status").style.textDecoration = "none"
}
