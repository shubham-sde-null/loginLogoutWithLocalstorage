let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
userName.textContent += localStorage.getItem("name");
userEmail.textContent += localStorage.getItem("email");
let logoutBtn = document.getElementById("logout");
let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
if (name == "") {
    window.alert("you need to login first");
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "login.html";
}
logoutBtn.addEventListener("click", logout);