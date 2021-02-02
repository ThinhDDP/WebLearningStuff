var encrypted;
var decrypted;
var dom_name = document.getElementById("name")
var dom_value = document.getElementById("value");
var dom_pass = document.getElementById("passSubmit");
var dom_result = document.getElementById("result");
var dom_decrypt = document.getElementById("passDecrypt");
var dom_encryptPass = document.getElementById("encryptPass");
var dom_decryptPass = document.getElementById("decryptPass");
var current_key = "123";
var passDecrypt = [];
var passTem = 
    {
        name: '',
        pass: '',
        encrypt: ''
    }
var pass = [];

dom_pass.addEventListener('click', function(event){
    event.preventDefault();
    encrypted = CryptoJS.AES.encrypt(dom_value.value, current_key);
    dom_value.value = encrypted;
    passTem.name = dom_name.value;
    passTem.pass = dom_value.value;
    passTem.encrypt = current_key;
    pass.push(passTem);
    localStorage.setItem("admin1", JSON.stringify(pass));
})

dom_decrypt.addEventListener('click', function(event){
    event.preventDefault();
    passDecrypt = JSON.parse(localStorage.getItem("admin1"));
    decrypted = CryptoJS.AES.decrypt(passDecrypt[0].pass, current_key);
    dom_result.value = decrypted.toString(CryptoJS.enc.Utf8);
})









