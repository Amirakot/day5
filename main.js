var inputtext = document.getElementById("full-name");
var h1 = document.getElementById("h1");

{
  function showborder() {
    inputtext.style.border = "5px solid blue";
  }
}
function check(event) {
  if (inputtext.value.length > 3 && password.value == repassword.value) {
    event.target.submit();
  } else {
    event.preventDefault();
    inputtext.focus();
  }
}

function remove() {
  inputtext.style.border = "1px solid black";
  if (inputtext.value.length == "" && inputtext.value.length < 3) {
    document.getElementById("invalid").innerText = "invalid name";
    inputtext.focus();
  } else {
    document.getElementById("invalid").innerText = "";
  }

}
function checkpassword() {
  var password = document.getElementById("password");
  var repassword = document.getElementById("repassword");
  if (password.value != repassword.value) {
    document.getElementById("validatepassword").innerText =
      " password and repeat password should be the same";
  } else {
    document.getElementById("validatepassword").innerText = " ";
  }
}
const form =document.querySelector("form");
form.addEventListener("submit",function(e){
 e.preventDefault();
    const fd=new FormData(form);
    console.log(fd)
    for(var item of fd){
        console.log(item)
    }
    const obj=Object.fromEntries(fd)
    console.log(obj);
   var str= JSON.stringify(obj);
localStorage.setItem("user",str);
localStorage.removeItem("user")

setcookie(JSON.stringify(obj.text));
})
 function setcookie( value) {
   var d = new Date();
   d.setTime(d.getTime() + expdata * 24 * 60 * 60 * 1000);
   var expires = "expires" + d.toGMTString();
   document.cookie = "cookie" + "=" + value + ";" + "expires=" +expires+ ";" + "path/";
 }
 function deletecookie(name) {
   var d = new Date();
   d.setTime(d.getTime() - 60 * 60 * 60 * 1000);
   document.cookie = name + "=" + value + ";" + expires + ";" + "path/";
 }